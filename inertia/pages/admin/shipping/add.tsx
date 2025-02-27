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
        min_cart_amount:yup.number().required("Min amount is required").moreThan(0, "Min amount must be greater than 0").typeError("Min Amount must be a number"),
        max_cart_amount:yup.number().required("Max amount is required").moreThan(0, "Max amount must be greater than 0").typeError("Max Amount must be a number"),
        shipping_cost:yup.number().required("Shipping cost is required").moreThan(0, "Shipping cost must be greater than 0").typeError("Shipping cost must be a number"),
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        min_cart_amount:0,
        max_cart_amount:0,
        shipping_cost:0
        
      },
    });
    const onSubmit = async (data: any) => {
      setBtnLoading(true);
      Inertia.post('/admin/shippings/save',data,
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
                                  <Link href="/admin/shippings" className="align-items-center btn btn-theme">
                                      <i className="ri-list-check-2"></i>Shipping
                                  </Link>
                              </div>

                              <form className="theme-form theme-form-2 mega-form" onSubmit={handleSubmit(onSubmit)} >
                              <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Min Cart Amount </label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("min_cart_amount")}
                                            className="form-control"
                                            placeholder="Min Car Amount"
                                        />
                                        {errors?.min_cart_amount?.message && (
                                            <p style={{ color: "red" }}>{errors?.min_cart_amount?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                               
                            <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Max Cart Amount</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("max_cart_amount")}
                                            className="form-control"
                                            placeholder="Max Car Amount"
                                        />
                                        {errors?.max_cart_amount?.message && (
                                            <p style={{ color: "red" }}>{errors?.max_cart_amount?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Shipping Cost</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("shipping_cost")}
                                            className="form-control"
                                            placeholder="Shipping Cost"
                                        />
                                        {errors?.shipping_cost?.message && (
                                            <p style={{ color: "red" }}>{errors?.shipping_cost?.message?.toString()}</p>
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
  <AdminLayout title="Add Shipping" children={page} />
);

export default AddPage;