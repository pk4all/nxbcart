import type { HttpContext } from '@adonisjs/core/http'
import Customer from '#models/customer'
import redis from '@adonisjs/redis/services/main'
import {sendOtpMessage} from '../../helpers/whatsapp.js'
import crypto from "crypto"
export default class CartApiController {
    async sendOtp({response,request}:HttpContext){
        try {
            const {mobile} = request.all()
            const customer = await Customer.findBy({mobile:mobile})
            const otp = crypto.randomInt(100000, 999999);
            if(customer){
                customer.mobile_otp=otp.toString()
                let c = await customer.save() 
                if(c){
                   const res =  sendOtpMessage(mobile,otp)
                }
                return response.status(200).json({type:'error',message:'test msg'})
            }else{
                let c = await Customer.create({mobile:mobile,mobile_otp:otp.toString()})
                if(c){
                    const res = sendOtpMessage(mobile,otp)
                }
                return response.status(200).json({type:'error',message:'test msg'})
            }
        } catch (error) {
            return response.status(500).json({type:'error',message:error.message})
        }
    }
    async verifyOtp({response,request,auth}:HttpContext){
        try {
            const data = request.all();
            const customer = await Customer.findBy({mobile:data?.mobile})
            if(customer){
                if(customer.mobile_otp==data.otp){
                   await auth.use('customer').login(
                        customer,
                        !!data.remember_me
                    )
                    // const loginCustomer = await auth.use('customer').getUserOrFail()
                    // const cu = await auth.use('customer').authenticate()
                    //customer.mobile_otp=''
                    customer.is_mobile_verified=true
                    customer.is_registered=true
                   // console.log('customer session',loginCustomer,cu)
                    const token = ''//await Customer.accessTokens.create(customer)
                    await customer.save()
                    //return inertia.render('web/home',{token:token})
                    return response.status(200).json({type:'success',message:'Customer Validated',token:token,customer:customer})
                }else{
                    return response.status(500).json({type:'error',message:'Invalid otp'})
                }
            }else{
                return response.status(500).json({type:'error',message:'Customer not found.'})
            }
            
        } catch (error) {
            return response.status(500).json({type:'error',message:error.message})
        }
    }

    async logout({ auth,response}:HttpContext){
        try {
            await auth.use('customer').logout()
            return response.status(200).json({type:'success',message:'Customer logout'})
        } catch (error) {
            return response.status(500).json({type:'error',message:error.message})
        }
        
        
    }

    
    
}