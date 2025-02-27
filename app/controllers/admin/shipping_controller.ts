
import type { HttpContext } from '@adonisjs/core/http'
import ShippingCharge from '#models/shipping_charge'
export default class ShippingController {

    async list({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit =10
            const datas = await ShippingCharge.query().orderBy('min_cart_amount','asc').paginate(page,limit)
            datas.baseUrl('/admin/shippings')
            return inertia.render('admin/shipping/list',{datas:datas.serialize()})
        } catch (error) {
            return inertia.render('admin/shipping/list',{errors:{invalid:error.message}})
        }
       
    }
    
    async add({inertia}: HttpContext){
        return inertia.render('admin/shipping/add')
    }

    async edit({inertia,params}: HttpContext){
        const {id}=params
        try {
            const data = await ShippingCharge.findOrFail(id)
            return inertia.render('admin/shipping/edit',{shipping:data.serialize()})
        } catch (error) {
            return inertia.render('admin/shipping/edit',{errors:{invalid:error.message}})
        }
    }

    async save({request,response,auth,inertia}:HttpContext){
        try {
            const data = request.except(['invalid'])
            const adminUser = auth.user?.serialize()
            data.user_id = adminUser?.id
            await ShippingCharge.create(data)
            return response.redirect('/admin/shippings')
        } catch (error) {
            return inertia.render('admin/shipping/add',{invalidError:error.message})
        }
    }

    async update({request,response,params,inertia}:HttpContext){
        const {id}=params
        try {
            const data = request.except(['invalid'])
            const shipping = await ShippingCharge.findOrFail(id)
            shipping.merge(data)
            await shipping.save()
            return response.redirect('/admin/shippings')
        } catch (error) {
            return inertia.render('admin/shipping/edit',{invalidError:error.message})
        }
    }

     async changeStatus({response,params}:HttpContext){
        const {id}=params
        try {
            const data = await ShippingCharge.findOrFail(id)
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

    async getShipping({response}:HttpContext){
        try {
            const taxes = (await ShippingCharge.query().orderBy('id','desc')).map((item)=>({
                value: item.shipping_cost,
                label: item.id,
            }))
            return response.json({taxes});
        } catch (error) {
            return response.status(500).json({ type:'error',message:error.message });
        }
    }

}