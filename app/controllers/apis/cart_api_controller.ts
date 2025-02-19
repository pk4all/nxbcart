import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Category from '#models/category'
import Product from '#models/product'
import redis from '@adonisjs/redis/services/main'
export default class HomeApiController {

    async saveCart({request,response,session}:HttpContext){    
        try {
            const sessionId = session.sessionId
            const { cart } = request.all();
            await redis.set(`cart:${sessionId}`,JSON.stringify(cart))
        } catch (error) {
            return response.status(500).json({message:error?.message})
        }
    }

    async getCart({request,response,session}:HttpContext){
        const sessionId = session.sessionId
        try {
            const cart = await redis.get(`cart:${sessionId}`)
            return response.status(200).json({ cart: cart ? JSON.parse(cart) : [] })
        } catch (error) {
            return response.status(500).json({message:error?.message})
        }
    }
    
}