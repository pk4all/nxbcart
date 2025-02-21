import { Head,useForm,Link } from '@inertiajs/react';
import { useState,useEffect} from 'react';
import { useFormContext} from "react-hook-form";
interface ProductFormData {
    productTax: {
        HSN:string,
        GST:string
        
    };
  }
const ProductTax = () => {
        const [taxes,setTaxes]=useState([]);
     const {
            register,
            formState: {errors},
            watch,
            setValue
        } = useFormContext<ProductFormData>();

       useEffect(()=>{
            fetch('/admin/taxes/get').then(res=>res.json()).then(data=>setTaxes(data?.taxes))
       },[]);
        
    return (
        <>
             <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Tax</h5>
                    </div>
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">HSN</label>
                            <div className="col-sm-9">
                                <input  {...register("productTax.HSN")} className="form-control" type="text" placeholder="HSN" />
                                {errors.productTax?.HSN?.message && (
                                    <p style={{ color: "red" }}>{errors.productTax?.HSN?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 col-form-label form-label-title">GST</label>
                            <div className="col-sm-9">
                                <select {...register("productTax.GST")} className="form-select w-100" name="stock_status"
                                onChange={(e) => setValue("productTax.GST", e.target.value)}
                                value={watch("productTax.GST")}
                                >
                                    <option value="">Select GST</option>
                                    {taxes&& taxes.map((tax:any)=>(
                                        <option key={tax.value} value={tax.value}>{tax.label}</option>
                                    ))}
                                </select>
                                {errors.productTax?.GST?.message && (
                                    <p style={{ color: "red" }}>{errors.productTax?.GST?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                        
                </div>
            </div>
        </>
    );
  };

  export default ProductTax;