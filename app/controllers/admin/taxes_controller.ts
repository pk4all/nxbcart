
import type { HttpContext } from '@adonisjs/core/http'
import GstTax from '#models/gst_tax'
export default class TaxesController {

    async list({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit =10
            const taxes = await GstTax.query().orderBy('id','desc').paginate(page,limit)
            taxes.baseUrl('/admin/taxes')
            return inertia.render('admin/tax/list',{taxes:taxes.serialize()})
        } catch (error) {
            return inertia.render('admin/tax/list',{errors:{invalid:error.message}})
        }
       
    }
    
    async add({inertia}: HttpContext){
        return inertia.render('admin/tax/add')
    }

    async edit({inertia,params}: HttpContext){
        const {id}=params
        try {
            const tax = await GstTax.findOrFail(id)
            return inertia.render('admin/tax/edit',{tax:tax.serialize()})
        } catch (error) {
            return inertia.render('admin/tax/edit',{errors:{invalid:error.message}})
        }
    }

    async save({request,response,auth,inertia}:HttpContext){
        try {
            const data = request.except(['invalid'])
            const adminUser = auth.user?.serialize()
            data.user_id = adminUser?.id
            await GstTax.create(data)
            return response.redirect('/admin/taxes')
        } catch (error) {
            return inertia.render('admin/tax/add',{invalidError:error.message})
        }
    }

    async update({request,response,params,inertia}:HttpContext){
        const {id}=params
        try {
            const data = request.except(['invalid'])
            const tax = await GstTax.findOrFail(id)
            tax.merge(data)
            await tax.save()
            return response.redirect('/admin/taxes')
        } catch (error) {
            return inertia.render('admin/tax/edit',{invalidError:error.message})
        }
    }

     async changeStatus({response,params}:HttpContext){
        const {id}=params
        try {
            const data = await GstTax.findOrFail(id)
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

    async getTaxes({response}:HttpContext){
        try {
            const taxes = (await GstTax.query().orderBy('id','desc')).map((item)=>({
                value: item.tax_percentage,
                label: item.tax_name,
            }))
            return response.json({taxes});
        } catch (error) {
            return response.status(500).json({ type:'error',message:error.message });
        }
    }

}