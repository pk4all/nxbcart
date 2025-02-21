import { Head,Link,usePage } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia"
import React, { useState, useEffect } from "react";
import AdminLayout from '../../../layouts/adminLayout';
import SelectInput from '../../../components/form/SelectInput';
import LoadingButton from '../../../components/button/LoadingButton';
import useCsrfToken from "../../../hooks/useCsrfToken";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Loader} from 'rsuite'; 
import 'rsuite/Loader/styles/index.css';
import { AnyMxRecord } from 'node:dns';
function AddPage(){
    const { invalidError } = usePage<any>().props;
   const [countries, setCountries] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);
    const csrfToken = useCsrfToken();
    const schema = yup.object({
        country_id:yup.string().required("country is required"),
        state_name:yup.string().required("State name is required"),
        state_code:yup.string().required("State  Code is required"),
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
      setValue,
      watch,
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        country_id: "",
        state_name: "",
        state_code: "",
      },
    });
    const onSubmit = async (data: any) => {
      console.log(data); 
      setBtnLoading(true);
      Inertia.post('/admin/locations/save-state',data,
        {
            preserveScroll: true,
            headers: {
                "X-CSRF-TOKEN": csrfToken,
            },
            onError: (error:any) => {
                console.log("Validation Errors:", error);
            },
            onSuccess: () => {
                setBtnLoading(false);
            }
        }
      );
     
    }
    function getCountries(){
        fetch('/admin/locations/get-countries').then(async(data)=>{
           const d = await data.json()
           setCountries(d?.countries);
         });
       }
    useEffect(() => {
        getCountries();
      }, []);
  return (
    <>
    <Head title="Add Coupon Information" />
    <div className='page-body'>
      <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-sm-8 m-auto">
                      <div className="card">
                          <div className="card-body">
                              <div className="title-header option-title">
                                  <h5>State Information</h5>
                                  <Link href="/admin/locations/states" className="align-items-center btn btn-theme">
                                      <i className="ri-list-check-2"></i>States
                                  </Link>
                              </div>

                              <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit(onSubmit)} >
                              <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Countries</label>
                                    <div className="col-sm-9">
                                 <SelectInput
                                    name="parent_id"
                                    value={watch("country_id")}
                                    onChange={(e:any) => setValue("country_id", e.target.value)}
                                    options={countries}
                                />
                                {errors?.country_id?.message && (
                                    <p style={{ color: "red" }}>{errors?.country_id?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                              <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">State Name</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("state_name")}
                                            className="form-control"
                                            placeholder="State Name"
                                        />
                                        {errors?.state_name?.message && (
                                            <p style={{ color: "red" }}>{errors?.state_name?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                              
                            <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">State Code</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("state_code")}
                                            className="form-control"
                                            placeholder="State Code"
                                        />
                                        {errors?.state_code?.message && (
                                            <p style={{ color: "red" }}>{errors?.state_code?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                
                                {invalidError && <div className="mb-4 row align-items-center"><p style={{ color: "red" }}>{invalidError}</p> </div>}
                                
                                  <div className="mb-4 row align-items-center">
                                    <div className="col-sm-3 form-label-title">
                                        <LoadingButton
                                            loading={false}
                                            type="submit"
                                            className="btn-indigo btn btn-animation w-30"
                                            disabled={btnLoading}
                                        >
                                            {btnLoading?<Loader />:'Save'}
                                        </LoadingButton>
                                    </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

AddPage.layout = (page: React.ReactNode) => (
  <AdminLayout title="Add Category" children={page} />
);

export default AddPage;