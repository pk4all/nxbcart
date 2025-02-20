import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Category from '#models/category'
import Product from '#models/product'
import redis from '@adonisjs/redis/services/main'
export default class HomeApiController {
    async getCategories({response,request}:HttpContext){
        try {
            const {limit} = request.qs()
            const categories = await Category.query()
                        .whereNull('parentId')
                        .preload('subCategories').where('status','active').limit(limit)
            return response.json(categories)
        } catch (error) {
            return response.status(500).json({type:'error',error:error.message})
        }
    }

    async gatProducts({response,request}:HttpContext){
        try {
            const {limit,category} = request.qs()
            const productsQuery = Product.query()
                                .preload('productImages',(query)=>{
                                    query.select('thum_url','id').where((query)=>{
                                        query.where('is_default', 1).orWhere('is_default', 0)
                                    }).orderBy('is_default', 'desc').limit(1)
                                })
                                .preload('productPrice',(query)=>{
                                    query.select('price','sale_price')
                                })
                                .preload('category',(query)=>{
                                    query.select('name')
                                })
            if(category>0){
                productsQuery.where('category_id',category)
            }                        
            const products = await productsQuery.orderBy('id','desc').where('status',true).limit(limit)
            return response.json(products)
        } catch (error) {
            return response.status(500).json({type:'error',error:error.message})
        }
    }
    
}