import type { HttpContext } from '@adonisjs/core/http'
import Country from '#models/country'
import State from '#models/state'
import District from '#models/district'
import City from '#models/city'
import Pincode from '#models/pincode'
import axios from 'axios'

export default class LocationsController {

    async countries({inertia,request}: HttpContext){
       try {
        const page = request.input('page', 1)
        const limit=10
        const countries = await Country.query().orderBy('id','desc').paginate(page, limit)
        countries.baseUrl('/admin/countries')
        return inertia.render('admin/location/country',{
            countries:countries.serialize()
        })
       } catch (error) {
            return inertia.render('admin/location/country',{
                errors:{
                    invalid:error.message
                }
            })
       }
    } 
    async states({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit=10
            const states = await State.query().orderBy('state_name','asc').paginate(page, limit)
            states.baseUrl('/admin/states')
            return inertia.render('admin/location/state',{
                states:states.serialize()
            })
        } catch (error) {
            return inertia.render('admin/location/state',{
                errors:{
                    invalid:error.message
                }
            })
        }
        //return inertia.render('admin/location/state')
    }
    async addState({inertia}: HttpContext){
        return inertia.render('admin/location/add_state')
    }

    async saveState({request,response,inertia}: HttpContext){
        try { 
            const data = request.only(['state_name','country_id','state_code'])
            const state = new State()
            state.state_name = data.state_name
            state.country_id = data.country_id
            state.state_code = data.state_code
            await state.save()
            // const page = request.input('page', 1)
            // const limit=10
            // const states = await State.query().orderBy('state_name','asc').paginate(page, limit)
            // states.baseUrl('/admin/states')
            // return inertia.render('admin/location/state',{
            //     states:states.serialize()
            // })
            return response.redirect('/admin/locations/states')
           // return response.json({status:'success',message:'State added successfully'})

        } catch (error) {
            return response.status(500).json({ status:'error',message:error.message });
        }
    }
    async districts({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit=10
            const districts = await District.query().orderBy('id','desc').paginate(page, limit)
            districts.baseUrl('/admin/districts')
            return inertia.render('admin/location/district',{
                districts:districts.serialize()
            })
        } catch (error) {
            return inertia.render('admin/location/district',{
                errors:{
                    invalid:error.message
                }
            })
        }
        //return inertia.render('admin/location/district')
    }

    async cities({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit=10
            const cities = await City.query().orderBy('id','desc').paginate(page, limit)
            cities.baseUrl('/admin/cities')
            return inertia.render('admin/location/city',{
                cities:cities.serialize()
            })
        } catch (error) {
            return inertia.render('admin/location/city',{
                errors:{
                    invalid:error.message
                }
            }) 
        }
        return inertia.render('admin/location/city')
    }

    async pincodes({inertia,request}: HttpContext){
        try {
            const page = request.input('page', 1)
            const limit=100
            const pincodes = await Pincode.query().orderBy('pincode','asc').paginate(page, limit)
            pincodes.baseUrl('/admin/locations/pincodes')
            return inertia.render('admin/location/pincode',{
                pincodes:pincodes.serialize()
            })
        } catch (error) {
            return inertia.render('admin/location/pincode',{
                errors:{
                    invalid:error.message
                }
            }) 
        }
        return inertia.render('admin/location/pincode')
    }

    async getCountries({response}:HttpContext){
        try {
            const allCountries = await Country.query().select('id', 'country_name').where('status',1)
            const countries = allCountries.map((item) => ({
                value: item.id,
                label: item.country_name,
            }))
            return response.json({status:'success',countries});
        } catch (error) {
            return response.status(500).json({status:'error', message:error.message});
        }
    }

    async getpincodes({response}:HttpContext){
        try {
            const apiKey = '579b464db66ec23bdd00000161603bda3dc7486465fe44467a840524';
            const baseUrl = 'https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd';
            const limit = 20;
            let offset = 0;
            let moreRecords = true;
            let allRecords = [];
            // while (moreRecords) {
            //     const url = `${baseUrl}?api-key=${apiKey}&format=json&offset=${offset}&limit=${limit}`;
            //     try {
            //         const responsedata =  await axios.get(url)
            //         const data=await responsedata.data

            //       // Assuming records are in the data.records array
            //       if (data.records && data.records.length > 0) {
            //         const result = data.records.map((record:any) => {
            //           return {
            //             pincode: record?.pincode,
            //             pincode_name: record?.officename,
            //             state_name: record?.statename,
            //             district_name: record?.district,
            //             city_name: record?.circlename,
            //             country_name:'India',
            //             region: record?.regionname,
            //             division: record?.divisionname,
            //             lat: record?.latitude,
            //             long: record?.longitude,
            //             area: record?.circlename,
            //             delivery_status: record.delivery=='Delivery'?1:0,
            //           }
            //         })
            //         await Pincode.createMany(result);
            //         offset += limit; 
            //       } else {
            //         moreRecords = false;

            //       }
                  
            //     } catch (error) {
            //       console.error("Error fetching records:", error);
            //       moreRecords = false; // Stop on error
            //     }
            //   }
                const allStates = await State.query().select('id', 'state_name').where('status',1)
               await allStates.forEach(async (state) => {
                    await Pincode.query().where('state_name',state.state_name).whereNull('state_id').update({state_id:state.id,state_name:state.state_name})
                    console.log('State:',state.state_name.toUpperCase());
                }) 
               // await Pincode.query().

              return response.json({
                status:'success',
                message:'Pincode data fetched successfully'
              });
           // return response.json(result);
        } catch (error) {
            return response.status(500).json({status:'error', message:error.message});
        }
    }  

}