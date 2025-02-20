import type { HttpContext } from '@adonisjs/core/http'

export default class LocationsController {

    async countries({inertia}: HttpContext){
        
        return inertia.render('admin/location/country')
    } 
    async states({inertia}: HttpContext){
        
        return inertia.render('admin/location/state')
    }

    async districts({inertia}: HttpContext){
        
        return inertia.render('admin/location/district')
    }

    async cities({inertia}: HttpContext){
        
        return inertia.render('admin/location/city')
    }

    async pincodes({inertia}: HttpContext){
        
        return inertia.render('admin/location/pincode')
    }

}