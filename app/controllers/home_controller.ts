import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Product from '#models/product'

export default class HomeController {
    async index({inertia,request,session}: HttpContext){
       // console.log(await auth.use('customer').user,'customer',await auth.user);
       const cookieValue = request.cookiesList();
       const sessionId = session.sessionId;
       console.log(cookieValue,sessionId);
        return inertia.render('web/home',{
           // data:'test'
        })
    }

    async cart({inertia}: HttpContext){
        return inertia.render('web/cart')
    }
    async checkout({inertia}: HttpContext){
        return inertia.render('web/checkout')
    }

    async productDetail({inertia,params}: HttpContext){
        const {slug} = params
        try {
            const product = await Product.query()
                            .preload('productImages')
                            .preload('productAttributes')
                            .preload('productDescription')
                            .preload('productPrice')
                            .preload('productShipping')
                            .preload('productSeo')
                            .preload('category')
                            .where('slug',slug).first()
            
            return inertia.render('web/product_detail',{
                slug:slug,
                product:product?.serialize()
            })                
        } catch (error) {
            
        }
        
    }
}