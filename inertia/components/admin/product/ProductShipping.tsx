import { Head,useForm,Link } from '@inertiajs/react';
import { useState} from 'react';
import { useFormContext} from "react-hook-form";
interface ProductFormData {
    productShipping: {
        weight:number, 
        length: number, 
        width:number,
        height:number,
    };
  }
const ProductShipping = () => {
     const {
            register,
            formState: {errors},
        } = useFormContext<ProductFormData>();
    
    return (
        <>
             <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Shipping</h5>
                    </div>
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">Weight
                                (kg)</label>
                            <div className="col-sm-9">
                                <input  {...register("productShipping.weight")} className="form-control" type="text" placeholder="Weight" />
                                {errors.productShipping?.weight?.message && (
                                    <p style={{ color: "red" }}>{errors.productShipping?.weight?.message?.toString()}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 col-form-label form-label-title">Length
                                (cm)</label>
                            <div className="col-sm-9">
                                <input {...register("productShipping.length")} className="form-control" type="number" placeholder="Length" />
                                {errors.productShipping?.length?.message && (
                                    <p style={{ color: "red" }}>{errors.productShipping?.length?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 col-form-label form-label-title">Width
                                (cm)</label>
                            <div className="col-sm-9">
                                <input {...register("productShipping.width")} className="form-control" type="number" placeholder="Width" />
                                {errors.productShipping?.width?.message && (
                                    <p style={{ color: "red" }}>{errors.productShipping?.width?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <label className="col-sm-3 col-form-label form-label-title">Height
                                (cm)</label>
                            <div className="col-sm-9">
                                <input {...register("productShipping.height")} className="form-control" type="number" placeholder="Height" />
                                {errors.productShipping?.height?.message && (
                                    <p style={{ color: "red" }}>{errors.productShipping?.height?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
  };

  export default ProductShipping;