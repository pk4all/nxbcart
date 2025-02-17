import type { HttpContext } from '@adonisjs/core/http'
import Category from '#models/category'
import { createCategoryValidator,editCategoryValidator } from '#validators/category'
//import { cuid } from '@adonisjs/core/helpers'
import drive from '@adonisjs/drive/services/main'
import db from '@adonisjs/lucid/services/db'
export default class CategoryController {

    async categories({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit =10
            const categories = await Category.query().orderBy('short_index','desc').paginate(page,limit)
            categories.baseUrl('/admin/categories')
           // console.log(categories.serialize())
            return inertia.render('admin/category/list',{
                categories:categories.serialize()
            })
        } catch (error) {
            return inertia.render('admin/category/list',{
                errors:{
                    invalid:error.message
                }
            })
        }
    }

    async add({inertia}: HttpContext){

        return inertia.render('admin/category/add')
    }
    async getMaxShortIndex({ response }: HttpContext) {
        try {
          const maxIndex:any = await Category.query().select(db.raw('MAX(CAST(short_index AS SIGNED)) as maxIndex')).first();
          const maxShortIndex:number = (maxIndex?.$extras.maxIndex || 0) + 1
          return response.json({maxShortIndex:maxShortIndex});
        } catch (error) {
          return response.status(500).json({ message: "Error fetching max short_index", error });
        }
    }
    async getAllParentCategories({ response }: HttpContext){
        try {
            const parentCategories = await Category.query().whereNull('parent_id').select('id', 'name')
            const categories = parentCategories.map((category) => ({
                value: category.id,
                label: category.name,
            }))

            return response.json({categories});
        } catch (error) {
            return response.status(500).json({ message:error.message });
        }
    }

    async getSubCategories({params,response}:HttpContext){
        try {
            const {id} = params
            const parentCategories = await Category.query().where('parent_id',id).select('id', 'name')
            const categories = parentCategories.map((category) => ({
                value: category.id,
                label: category.name,
            }))

            return response.json({categories});
        } catch (error) {
            return response.status(500).json({ message:error.message });
        }
    }
    async saveCategory({request,response,auth,inertia}:HttpContext){
        const data = request.except(['invalid'])
        const adminUser = auth.user?.serialize()
        const image = request.file('image', {
            size: '2mb',
            extnames: ['jpeg', 'jpg', 'png','webp'],
        })
        if(image){
            const key = `category/${data.slug}.${image.extname}`
            await image.moveToDisk(key)
            data.image = await drive.use().getUrl(key)
        }
        const icon = request.file('icon', {
            size: '2mb',
            extnames: ['jpeg', 'jpg', 'png','webp','svg'],
        })
        if(icon){
            const icon_key = `category/icons/${data.slug}.${icon.extname}`
            await icon.moveToDisk(icon_key)
            data.icon = await drive.use().getUrl(icon_key)
        }
        data.user_id = adminUser?.id
        await createCategoryValidator.validate(data)
        try {
            await Category.create(data)
           return response.redirect('/admin/categories')
        }catch (error) {
            return inertia.render('admin/category/add',{errors:{invalid:error.message}})
        }
    }

    async edit({inertia,params}: HttpContext){
        const {id}=params
        try {
            const category = await Category.query().where('id',id).first()
            return inertia.render('admin/category/edit',{category})
        } catch (error) {
            return inertia.render('admin/category/add',{errors:{invalid:error.message}})
        }
    }

    async editCategory({request,response,inertia,params}:HttpContext){
        const {id}=params
        const data = request.except(['invalid'])
        console.log(request.all(),'edit');
        const image = request.file('image', {
            size: '2mb',
            extnames: ['jpeg', 'jpg', 'png','webp'],
        })
        if(image){
            const key = `category/${data.slug}.${image.extname}`
            await image.moveToDisk(key)
            data.image = await drive.use().getUrl(key)
        }
        const icon = request.file('icon', {
            size: '2mb',
            extnames: ['jpeg', 'jpg', 'png','webp','svg'],
        })
        if(icon){
            const icon_key = `category/icons/${data.slug}.${icon.extname}`
            await icon.moveToDisk(icon_key)
            data.icon = await drive.use().getUrl(icon_key)
        }
        const category = await Category.findOrFail(id)
        await editCategoryValidator.validate(data)
        try {
            await category.merge(data).save()
           return response.redirect('/admin/categories')
        }catch (error) {
            return inertia.render('admin/category/add',{errors:{invalid:error.message}})
        }
    }
    
}