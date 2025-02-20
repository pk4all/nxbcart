import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Category from '#models/category'

export default class HomeController {
    async index({inertia}: HttpContext){
       // console.log(await auth.use('customer').user,'customer',await auth.user);
        return inertia.render('web/home')
    }

    async cart({inertia}: HttpContext){
        return inertia.render('web/cart')
    }
    async checkout({inertia}: HttpContext){
        return inertia.render('web/checkout')
    }
}