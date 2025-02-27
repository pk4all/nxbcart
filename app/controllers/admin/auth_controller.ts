import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {

    async adminRegister({request,response}:HttpContext){
        try {
            const user = await User.create(request.body())
            console.log(user)
            return  response.json(user)
        } catch (error) {
            return  response.json(error.message)
        } 
    }

    async adminLogin({inertia}: HttpContext){
        return inertia.render('admin/auth/login')
    }

    async adminAuth({request,response,auth,inertia}:HttpContext){
        const { email, password } = request.only(['email', 'password'])
        try {
            const user = await User.findBy('email', email)
            if (!user) {
               return inertia.render('admin/auth/login',{errors:{invalid:'Invalid credentials'}})
            }
            const validateuser = await User.verifyCredentials(email, password)
            await auth.use('web').login(validateuser)
            response.redirect('/admin/dashboard')
        } catch (error) {
            return inertia.render('admin/auth/login',{errors:{invalid:error.message}})
        }
    }
    
    async adminSignUp({inertia}: HttpContext){
        return inertia.render('admin/auth/signup')
    }
    
}