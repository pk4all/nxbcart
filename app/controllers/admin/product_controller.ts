import type { HttpContext } from '@adonisjs/core/http'
import drive from '@adonisjs/drive/services/main'
import { cuid } from '@adonisjs/core/helpers'
import db from '@adonisjs/lucid/services/db'
import Product from '#models/product'
export default class ProductController {

    async products({inertia}: HttpContext){
        
        return inertia.render('admin/product/products')
    }

    async add({inertia}: HttpContext){

        return inertia.render('admin/product/add')
    }

    async uploadImages({inertia}: HttpContext){

        return inertia.render('admin/product/product_images')
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
            return response.json({data});
        } catch (error) {
            return response.status(500).json({ message:error.message });
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
            const ProductSeo = data.productSEO
            const productInventory = data?.productInventory

            const productAttributes = data?.productAttributes
            
            productData.sku = productInventory.sku
            const product = await Product.create(productData,{client:trx}) 
            console.log(product);
            await trx.commit()
        } catch (error) {
            await trx.rollback()
            return response.status(500).json({ message:error.message });
        }
    }
}