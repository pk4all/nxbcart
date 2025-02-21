import { Head,Link,usePage } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia"
import React, { useState, useEffect } from "react";
import AdminLayout from '../../../layouts/adminLayout';
import TextEditor from '../../../components/admin/common/Editor';
import LoadingButton from '../../../components/button/LoadingButton';
import useCsrfToken from "../../../hooks/useCsrfToken";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Loader} from 'rsuite'; 
import 'rsuite/Loader/styles/index.css';
function EditPage(){
    const { invalidError,coupon } = usePage<any>().props;
    const [html, setHtml] = useState('');
    const [btnLoading, setBtnLoading] = useState(false);
    const csrfToken = useCsrfToken();
    const schema = yup.object({
        name:yup.string().required("Coupon name is required"),
        description:yup.string().required("Description is required"),
        code:yup.string().required("Code is required"),
        discount_type:yup.string().required("Discount type is required"),
        discount:yup.number().required("Discount is required").moreThan(0, "Discount must be greater than 0").typeError("Discount must be a number"),
        max_discount:yup.number().notRequired(),
        min_order:yup.number().notRequired(),
        usage_limit:yup.number().notRequired(),
        usage_per_user:yup.number().notRequired(),
        start_date:yup.date().required("Start date is required"),
        end_date:yup.date().required("End date is required"),
    });
    const {
      register,
      handleSubmit,
      formState: { errors },
      setError,
      setValue,
    } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        name: coupon?.name,
        description: coupon?.description,
        code: coupon?.code,
        discount: coupon?.discount,
        discount_type: coupon?.discount_type,
        max_discount: coupon?.max_discount, 
        min_order: coupon?.min_order,
        usage_limit: coupon?.usage_limit,
        usage_per_user: coupon?.usage_per_user,
        start_date: coupon?.start_date,
        end_date: coupon?.end_date,
      },
    });
    const onSubmit = async (data: any) => {
      setBtnLoading(true);
      Inertia.post('/admin/coupon/update-coupon/'+coupon?.id,data,
        {
            preserveScroll: true,
            headers: {
                "X-CSRF-TOKEN": csrfToken,
            },
            onError: (error:any) => {
                console.log("Validation Errors:", error);
            },
        }
      );
      setBtnLoading(false);
    }
    useEffect(() => {
      setHtml(coupon?.description);
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
                                  <h5>Coupon Information</h5>
                                  <Link href="/admin/coupons" className="align-items-center btn btn-theme">
                                      <i className="ri-list-check-2"></i>Coupons
                                  </Link>
                              </div>

                              <form className="" onSubmit={handleSubmit(onSubmit)} >
                              <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Coupon Name</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("name")}
                                            className="form-control"
                                            placeholder="Coupon Name"
                                        />
                                        {errors?.name?.message && (
                                            <p style={{ color: "red" }}>{errors?.name?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Coupon Description</label>
                                    <div className="col-sm-9">
                                        <TextEditor {...register("description")} 
                                          value={html}
                                          change={(e:any)=>{
                                            setHtml(e.target.value);
                                            setValue('description',e.target.value);
                                          }}
                                        />
                                        {errors?.description?.message && (
                                            <p style={{ color: "red" }}>{errors?.description?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                            <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Coupon Code</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("code")}
                                            className="form-control"
                                            placeholder="Coupon Code"
                                        />
                                        {errors?.code?.message && (
                                            <p style={{ color: "red" }}>{errors?.code?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Discount Type</label>
                                    <div className="col-sm-9">
                                    <select {...register("discount_type")} className="js-example-basic-single form-control w-100" name="stock_status"
                                onChange={(e) => setValue("discount_type", e.target.value)}
                                >
                                    <option value="">Select Type</option>
                                    <option value={'percentage'}>Percentage</option>
                                    <option value={'fixed'}>Fixed</option>
                                </select>
                                        {errors?.discount_type?.message && (
                                            <p style={{ color: "red" }}>{errors?.discount_type?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Coupon Discount</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("discount")}
                                            className="form-control"
                                            placeholder="Discount"
                                        />
                                        {errors?.discount?.message && (
                                            <p style={{ color: "red" }}>{errors?.discount?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Max Discount</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("max_discount")}
                                            className="form-control"
                                            placeholder="Max Discount"
                                        />
                                        {errors?.max_discount?.message && (
                                            <p style={{ color: "red" }}>{errors?.max_discount?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Min Order Amount</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("min_order")}
                                            className="form-control"
                                            placeholder="Order Amount"
                                        />
                                        {errors?.min_order?.message && (
                                            <p style={{ color: "red" }}>{errors?.min_order?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Usage Limit</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("usage_limit")}
                                            className="form-control"
                                            placeholder="Usage Limit"
                                        />
                                        {errors?.usage_limit?.message && (
                                            <p style={{ color: "red" }}>{errors?.usage_limit?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Usage Per User</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("usage_per_user")}
                                            className="form-control"
                                            placeholder="Limit Per User"
                                        />
                                        {errors?.usage_per_user?.message && (
                                            <p style={{ color: "red" }}>{errors?.usage_per_user?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">Start Date</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("start_date")}
                                            className="form-control"
                                            placeholder="Start Date"
                                            type='date'
                                        />
                                        {errors?.start_date?.message && (
                                            <p style={{ color: "red" }}>{errors?.start_date?.message?.toString()}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 row align-items-center">
                                    <label className="form-label-title col-sm-3 mb-0">End Date</label>
                                    <div className="col-sm-9">
                                        <input 
                                            {...register("end_date")}
                                            className="form-control"
                                            placeholder="End Date"
                                            type='date'
                                        />
                                        {errors?.end_date?.message && (
                                            <p style={{ color: "red" }}>{errors?.end_date?.message?.toString()}</p>
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

EditPage.layout = (page: React.ReactNode) => (
  <AdminLayout title="Edit Category" children={page} />
);

export default EditPage;