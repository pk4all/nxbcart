import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Category from '#models/category'
import Product from '#models/product'
import redis from '@adonisjs/redis/services/main'
import Coupon from '#models/coupon'
import ShippingCharge from '#models/shipping_charge'
export default class HomeApiController {

    async saveCart({request,response,session}:HttpContext){
        try {
            const sessionId = session.sessionId
            console.log('all data in save cart',request.all())
            const data = request.all()
            const r = await redis.set(`cart:${sessionId}`,JSON.stringify(data))
            return response.status(200).json({message:r})
        } catch (error) {
            return response.status(500).json({status:'error',message:error?.message})
        }
    }

    async getCart({request,response,session}:HttpContext){
        const sessionId = session.sessionId
        try {
           // console.log(sessionId,'sessionId')
           // await redis.set(`cart:${sessionId}`,JSON.stringify([]))
            const data = await redis.get(`cart:${sessionId}`)
            const allData = JSON.parse(data||'')
            const cart = allData?.cart
            console.log(allData,'all cart Data')
            return response.status(200).json(allData?allData:[])
        } catch (error) {
            return response.status(500).json({status:'error',message:error?.message})
        }
    }

    async addToWishList({request,response,session}:HttpContext){
        console.log(request,response,session);
    }

    async getShipping({request,response}:HttpContext){
            const {amount} = request.all()
            try {
                const sh = await ShippingCharge.query().where((q)=>{
                    q.where('min_cart_amount','<=',amount).where('max_cart_amount','>=',amount)
                }).where('status',true).first()
                //console.log(sh,'shipping',amount)
                return response.status(200).json({ status:'success',message:'',shipping_charge:sh?.shipping_cost||0})
            } catch (error) {
               // console.log('error',error.message)
                return response.status(500).json({status:'error',message:error?.message})
            }

            //console.log(amount,'cart net amount')
    }

    async applyCoupon({request,response,session}:HttpContext){
        try {
            const {coupon,cartTotalValue} = request.all()
            const usedCoupon = await Coupon.query().where('code',coupon).where('status',true).where('expired',false).first()
            let amount:number =0;
            if(usedCoupon){
                if(usedCoupon?.discount_type =='percentage'){
                    amount =parseFloat(((cartTotalValue*usedCoupon?.discount)/100).toFixed(2));
                }
                if(usedCoupon?.discount_type =='fixed'){
                    amount=usedCoupon?.discount
                }
                return response.status(200).json({
                    status:'success',
                    couponCode:usedCoupon,
                    message:usedCoupon?.name,
                    couponAmount:amount
                })
            }else{
                return response.status(500).json({status:'error',message:'Invalid coupon'})
            }
           // console.log(usedCoupon)
        } catch (error) {
            return response.status(500).json({status:'error',message:error?.message})
        }
    }
    
     
}