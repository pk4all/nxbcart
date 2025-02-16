import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Category from '#models/category'

export default class HomeController {
    async index({inertia}: HttpContext){
        return inertia.render('web/home')
    }

    async getCategories({response}:HttpContext){
        try {
            const categories = await Category.query()
                        .whereNull('parentId')
                        .preload('subCategories')
            return response.json(categories)
        } catch (error) {
            return response.json({error:error.message})
        }
    }
    
}