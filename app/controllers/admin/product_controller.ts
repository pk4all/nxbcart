import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'
import { cuid } from '@adonisjs/core/helpers'
import db from '@adonisjs/lucid/services/db'
import Product from '#models/product'
import sharp from 'sharp'
import ProductImage from '#models/product_image'
export default class ProductController {

    async products({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit =10
            const products = await Product.query()
                    .preload('productImages',(query)=>{
                        query.select('thum_url','id').where((query)=>{
                            query.where('is_default', 1).orWhere('is_default', 0)
                        }).orderBy('is_default', 'desc')
                    })
                    .preload('productPrice')
                    .preload('productInventory')
                    .preload('category',(query)=>{
                        query.select('name')
                    })
                    .orderBy('id','desc')
                    .paginate(page,limit)
            products.baseUrl('/admin/products')
            return inertia.render('admin/product/products',{
                products:products.serialize()
            })
        } catch (error) {
            return inertia.render('admin/product/products',{
                errors:{
                    invalid:error.message
                }
            })
        }
        return inertia.render('admin/product/products')
    }

    async add({inertia}: HttpContext){

        return inertia.render('admin/product/add')
    }

    async uploadImages({inertia,params}: HttpContext){
        const {id} = params
        try {
            const product = await Product.query().select('id','video_url').preload('productImages').where({id}).first()
            return inertia.render('admin/product/product_images',{product})
        } catch (error) {
            return inertia.render('admin/product/product_images',{
                errors:{
                    invalid:error.message
                }
            })
        } 
    }

    async fileUpload({request,response}:HttpContext){
        try {
            const data = request.all()
            const files = request.files('files', {
                size: '2mb',
                extnames: ['jpg', 'png', 'pdf']
            })
            let invalidDocuments = files.filter((document) => {
                return !document.isValid
            })
            if (invalidDocuments.length) {
                return response.badRequest({
                  errors: invalidDocuments.map((document:any) => ({
                        name: document.clientName,
                        error: document.errors[0].message,
                  }))
                })
            }
            let uploadedImages = []
            for (let file of files) {
                const file_key = `product/attribute/${data.name+cuid()}.${file.extname}`
                await file.moveToDisk(file_key)
                const file_url = await drive.use().getUrl(file_key)
                uploadedImages.push(file_url)
            }
            data.images = uploadedImages
            return response.json({type:'success',data});
        } catch (error) {
            return response.status(500).json({type:'error', message:error.message });
        }
        
    }

    async saveProduct({request,response,auth}:HttpContext){
        const trx = await db.transaction();
        const adminUser = auth.user?.serialize()
        try {
            const data=request.all()
            const productData = data.productInformation
            productData.user_id = adminUser?.id;
            const productDescription = data.productDescription
            const productShipping = data.productShipping
            const productPrice = data.productPrice
            const productSeo = data.productSEO
            const productInventory = data?.productInventory

            const productAttributes = data?.productAttributes
            let productAttributesData=[]
            if(Object.keys(productAttributes).length>0){
                for (let key in productAttributes) {
                    if (productAttributes.hasOwnProperty(key)) {
                      //console.log(key, productAttributes[key]);
                      productAttributesData.push({key:key,value:productAttributes[key]})
                    }
                  }
            }
            productData.sku = productInventory.sku
            const product = await Product.create(productData,{client:trx})
            await product.related('productDescription').create(productDescription,{client:trx})
            await product.related('productShipping').create(productShipping,{client:trx})
            await product.related('productPrice').create(productPrice,{client:trx})
            await product.related('productSeo').create(productSeo,{client:trx})
            await product.related('productInventory').create(productInventory,{client:trx})
            await  product.related('productAttributes').createMany(productAttributesData,{client:trx})
            await trx.commit()
            return response.redirect('/admin/upload-product-images/'+product?.id)
            //return response.json(productAttributesData)
        } catch (error) {
            await trx.rollback()
            return response.status(500).json({type:'error', message:error.message })
        }
    }

    async updateVideoUrl({request,response,params}:HttpContext){
        const {id} = params
        try {
            const data = request.all()
            const product = await Product.findByOrFail({id})
            product.video_url = data.video_url
            await product.save()
            return response.status(200).json({type:'success', message:'Video url update successfully'})
            console.log(data,'data',id)
        } catch (error) {
            return response.status(500).json({type:'error', message:error.message })
        }
    }

    async updateProductImages({request,response,params}:HttpContext){
        try {
            const {id} = params
            const data = request.all()
            const allImage:any = await ProductImage.query().where({'product_id':id}).count('*', 'total').first()
            const imageCount =allImage?.$extras.total
            if(imageCount>4){
                return response.badRequest({
                    type:'error',
                    errors:`not upload more than ${imageCount} images`
                })
            }
            // console.log(allImage.$extras.total,'total 1')
            // return;
            const files = request.files('files', {
                size: '2mb',
                extnames: ['jpg','jpeg', 'png', 'pdf','webp']
            })
            let invalidDocuments = files.filter((document) => {
                return !document.isValid
            })
            if (invalidDocuments.length) {
                return response.badRequest({
                  errors: invalidDocuments.map((document:any) => ({
                        name: document.clientName,
                        error: document.errors[0].message,
                  }))
                })
            }
            for (let file of files) {
                const file_key = `product/images/${data.id+cuid()}.${file.extname}`
                const thumb_file_path = `product/images/thumb/`
                const thumb_file = `thumb-${data.id+cuid()}.${file.extname}`
                const imageBuffer = await sharp(file.tmpPath!).resize(500, 500).toBuffer()
                await file.moveToDisk(file_key)
                const file_url = await drive.use().getUrl(file_key)
                await drive.use().put(`${thumb_file_path+thumb_file}`, imageBuffer,{
                    visibility: 'public'
                })
                const thumb_file_url = await drive.use().getUrl(`${thumb_file_path+thumb_file}`)
                const imgData = {
                    product_id:id||data?.id,
                    name:file?.clientName,
                    image:`${data.id+cuid()}.${file.extname}`,
                    full_url:file_url,
                    thum_image:thumb_file,
                    thum_url:thumb_file_url
                }
                await ProductImage.create(imgData)
            }
            return response.json({type:'success',message:"image uploaded successfuly",});
        } catch (error) {
            return response.badRequest({
                type:'error',
                errors:error.message
            })
           // return response.status(500).json({ message:error.message });
        }
       
    }

    async removeProductImages({request,response}:HttpContext){
        const data = request.all()
        try {
            const imgId = data?.fileKey
            const image = await ProductImage.findOrFail(imgId)
            if(image){
                await drive.use().delete(image?.full_url)
                await drive.use().delete(image?.thum_url)
            }
            await image.delete()
            return response.json({message:'Image deleted'})
        } catch (error) {
            return response.status(500).json({ message:error.message })
        }
    }

    async setDefaultImage({request,response}:HttpContext){
        const data = request.all()
        try {
            const imgId = data?.fileKey
            const image = await ProductImage.findOrFail(imgId)
            if(image){
                await ProductImage.query().where({product_id:image.product_id}).update({is_default:0})
                image.is_default = 1
            }
            await image.save()
            return response.json({message:'Set default Image'})
        } catch (error) {
            return response.status(500).json({ message:error.message })
        }
    }
}