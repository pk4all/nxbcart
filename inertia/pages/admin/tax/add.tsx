import { Head,Link,usePage } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia"
import React, { useState, useEffect } from "react";
import AdminLayout from '../../../layouts/adminLayout';
import LoadingButton from '../../../components/button/LoadingButton';
import useCsrfToken from "../../../hooks/useCsrfToken";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Loader} from 'rsuite'; 
import 'rsuite/Loader/styles/index.css';
function AddPage(){
    const { invalidError } = usePage<any>().props;
    const [html, setHtml] = useState('');
    const [btnLoading, setBtnLoading] = useState(false);
    const csrfToken = useCsrfToken();
    const schema = yup.object({
        tax_name:yup.string().required("Tax name is required"),
        tax_percentage:yup.string().required("Tax percentage is required"),
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        tax_name: "",
        tax_percentage:''
        
      },
    });
    const onSubmit = async (data: any) => {
      console.log(data); 
      setBtnLoading(true);
      Inertia.post('/admin/taxes/save',data,
        {
            preserveScroll: true,
            headers: {
                "X-CSRF-TOKEN": csrfToken,
            },
            onError: (error:any) => {
                console.log("Validation Errors:", error);
            },
            onSuccess:()=>{
                setBtnLoading(false);
            }
        }
      );
      
    }
    useEffect(() => {

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
                                  <h5>Tax Information</h5>
                                  <Link href="/admin/taxes" className="align-items-center btn btn-theme">
                                      <i className="ri-list-check-2"></i>Taxes
                                  </Link>
                              </div>

                              <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit(onSubmit)} >
                              <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Coupon Name</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("tax_name")}
                                            className="form-control"
                                            placeholder="Tax Name"
                                        />
                                        {errors?.tax_name?.message && (
                                            <p style={{ color: "red" }}>{errors?.tax_name?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                               
                            <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Tax Percentage</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("tax_percentage")}
                                            className="form-control"
                                            placeholder="Tax Percentage"
                                        />
                                        {errors?.tax_percentage?.message && (
                                            <p style={{ color: "red" }}>{errors?.tax_percentage?.message?.toString()}</p>
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
                                            disabled={btnLoading}>
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