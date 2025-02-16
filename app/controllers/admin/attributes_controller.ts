import type { HttpContext } from '@adonisjs/core/http'
import Attribute from '#models/attribute'
export default class AttributesController {

    async attributes({inertia,request}: HttpContext){
        try {
                    const page = request.input('page', 1)
                    const limit =10
                    const attributes = await Attribute.query().preload('category').orderBy('id','desc').paginate(page,limit)
                    //console.log(attributes,'attributes');
                    attributes.baseUrl('/admin/attributes')
                    return inertia.render('admin/attributes/list',{
                        attributes:attributes.serialize()
                    })
                } catch (error) {
                    return inertia.render('admin/attributes/list',{
                        errors:{
                            invalid:error.message
                        }
                    })
                }
       // return inertia.render('admin/attributes/list')
    }

    async getAttributes({params,response}: HttpContext){
        const {category} = params
        try {
            const attributes = await Attribute.query().preload('attributesOptions').where(query=>{
                query.where('category_id',category).orWhereNull('category_id')
            }).where('status','active').orderBy('id','desc')

            const transformedAttributes = attributes.map(attr => ({
                ...attr.toJSON(),
                attributesOptions: attr.attributesOptions.map(opt => ({
                  value: opt.value, 
                  label: opt.value
                }))
              }));
            //console.log(attributes,'attributes')
            return response.json({attributes:transformedAttributes})
        } catch (error) {
            return response.status(500).json({ message:error.message });
        }
    }

    async add({inertia}: HttpContext){
        return inertia.render('admin/attributes/add')
    }

    async saveAttribute({request,response,auth,inertia}:HttpContext){
        const data = request.except(['options','invalid'])
        const options = request.input('options')
        const adminUser = auth.user?.serialize()
        data.user_id = adminUser?.id
        //return data
        try {
             const attribute = await Attribute.create(data)
             var optData:any=[]
             if(options.length>0){
                 optData = options.map((elm:any)=>{
                     return {value:elm}
                 })
                 await attribute.related('attributesOptions').createMany(optData)
             }
             //return {data,attribute}
             return response.redirect('/admin/attributes')
        } catch (error) {
            return inertia.render('admin/attributes/add',{errors:{invalid:error.message}})
        }
    }
}