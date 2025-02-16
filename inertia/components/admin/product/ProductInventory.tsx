import { Head,useForm,Link } from '@inertiajs/react';
import { useState} from 'react';
import { useFormContext} from "react-hook-form";
interface ProductFormData {
    productInventory: {
        sku:string,
        qty:number,
        stock_status:string
    };
  }
const ProductInventory = () => {

   const {
            register,
            setValue,
            watch,
            formState: {errors},
        } = useFormContext<ProductFormData>();
    const stockStatus = watch("productInventory.stock_status");
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Product Inventory</h5>
                    </div>
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">SKU</label>
                            <div className="col-sm-9">
                                <input {...register("productInventory.sku")} className="form-control" type="text" />
                                {errors.productInventory?.sku?.message && (
                                    <p style={{ color: "red" }}>{errors.productInventory?.sku?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <label className="form-label-title col-sm-3 mb-0">Quantity</label>
                            <div className="col-sm-9">
                                <input {...register("productInventory.qty")} className="form-control" type="text" />
                                {errors.productInventory?.qty?.message && (
                                    <p style={{ color: "red" }}>{errors.productInventory?.qty?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 col-form-label form-label-title">Stock
                                Status</label>
                            <div className="col-sm-9">
                                <select {...register("productInventory.stock_status")} className="js-example-basic-single form-control w-100" name="stock_status"
                                onChange={(e) => setValue("productInventory.stock_status", e.target.value)}
                                value={stockStatus}
                                >
                                    <option value="">Select Status</option>
                                    <option value={'InStock'}>In Stock</option>
                                    <option value={'OutOfStock'}>Out Of Stock</option>
                                    <option value={'OnBackorder'}>On Backorder</option>
                                </select>
                                {errors.productInventory?.stock_status?.message && (
                                    <p style={{ color: "red" }}>{errors.productInventory?.stock_status?.message?.toString()}</p>
                                )}
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
  };

  export default ProductInventory;