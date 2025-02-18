import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import redis from '@adonisjs/redis/services/main'
export default class CustomerApiController {
    async sendOtp({response,request,inertia}:HttpContext){
        try {
            const data = request.all();
            return response.status(200).json({type:'error',message:'test msg',data:data})
        } catch (error) {
            return response.status(500).json({type:'error',message:error.message})
        }
    }
    async verifyOtp({response,request}:HttpContext){
        try {
            const data = request.all();
            return response.status(500).json({type:'error',message:'otp test msg',data:data})
        } catch (error) {
            return response.status(500).json({type:'error',message:error.message})
        }
    }
    
}