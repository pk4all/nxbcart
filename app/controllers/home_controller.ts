import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Category from '#models/category'

export default class HomeController {
    async index({inertia}: HttpContext){
        return inertia.render('web/home')
    }
    async getCategories({response,request}:HttpContext){
        try {
            const {limit} = request.qs()
            const categories = await Category.query()
                        .whereNull('parentId')
                        .preload('subCategories').limit(limit)
            return response.json(categories)
        } catch (error) {
            return response.json({error:error.message})
        }
    }
}