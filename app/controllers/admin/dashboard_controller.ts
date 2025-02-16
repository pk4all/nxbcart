import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {

    async dashboard({inertia}: HttpContext){
            
        return inertia.render('admin/dashboard')
    }
}