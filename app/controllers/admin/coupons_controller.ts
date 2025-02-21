import Coupon from '#models/coupon'
import type { HttpContext } from '@adonisjs/core/http'

export default class CouponsController {

    async list({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit =10
            const coupons = await Coupon.query().orderBy('id','desc').paginate(page,limit)
            coupons.baseUrl('/admin/coupons')
            return inertia.render('admin/coupon/list',{coupons:coupons.serialize()})
        } catch (error) {
            return inertia.render('admin/coupon/list',{errors:{invalid:error.message}})
        }
       
    }
    
    async add({inertia}: HttpContext){
        return inertia.render('admin/coupon/add')
    }

    async edit({inertia,params}: HttpContext){
        const {id}=params
        try {
            const coupon = await Coupon.findOrFail(id)
            return inertia.render('admin/coupon/edit',{coupon:coupon.serialize()})
        } catch (error) {
            return inertia.render('admin/coupon/add',{errors:{invalid:error.message}})
        }
    }

    async save({request,response,auth,inertia}:HttpContext){
        try {
            const data = request.except(['invalid'])
            const adminUser = auth.user?.serialize()
            data.user_id = adminUser?.id
            await Coupon.create(data)
            return response.redirect('/admin/coupons')
        } catch (error) {
            return inertia.render('admin/coupon/add',{invalidError:error.message})
        }
    }

    async update({request,response,params,inertia}:HttpContext){
        const {id}=params
        try {
            const data = request.except(['invalid'])
            const coupon = await Coupon.findOrFail(id)
            coupon.merge(data)
            await coupon.save()
            return response.redirect('/admin/coupons')
        } catch (error) {
            return inertia.render('admin/coupon/edit',{invalidError:error.message})
        }
    }

     async changeStatus({response,params}:HttpContext){
        const {id}=params
        try {
            const data = await Coupon.findOrFail(id)
            if(data.status){
                data.status = false
            }else{
                data.status = true
            }
            await data.save()
            return response.json({message:'Status changed'})
        } catch (error) {
            return response.status(500).json({ message:error.message })
        }
    }

    async changeAutoApply({response,params}:HttpContext){
        const {id}=params
        try {
            const data = await Coupon.findOrFail(id)
            if(data.min_order<=0){
                return response.status(500).json({ type:'error',message:"Please set Minimum order value" }) 
            }
            if(data.auto_apply){
                data.auto_apply = false
            }else{
                data.auto_apply = true
            }
            await data.save()
            return response.json({message:'Auto Apply changed'})
        } catch (error) {
            return response.status(500).json({ message:error.message }) 
        }
    }
}