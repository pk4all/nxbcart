import { Head,useForm,Link } from '@inertiajs/react';
import { useState,useEffect} from 'react';
import { useFormContext} from "react-hook-form";
interface ProductFormData {
    productPrice: {
        price:number, 
        sale_price: number, 
        cost_per_item:number,
        margin:number,
        profit:number
    };
  }
const ProductPrice = () => {
    const {
        register,
        formState: {errors},
        watch,
        setValue
    } = useFormContext<ProductFormData>();
    const price = watch("productPrice.price");
    const salePrice = watch("productPrice.sale_price");
    const costPerItem = watch("productPrice.cost_per_item");
    const [margin, setMargin] = useState(0);
    const [profit, setProfit] = useState(0);
    useEffect(()=>{
        const prof = Number(salePrice)-Number(costPerItem);
        setProfit(prof);
        const calMar:any = ((Number(prof)/Number(costPerItem))*100).toFixed(2);
        if(Number(calMar)>0){
            setMargin(calMar);
        }
        setValue('productPrice.margin',calMar);
        setValue('productPrice.profit',prof);
    },[price,salePrice,costPerItem]);
    return (
        <>
           <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Product Price</h5>
                    </div>
                        <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 form-label-title">Price</label>
                            <div className="col-sm-9">
                            <input
                                className="form-control" 
                                placeholder="0"
                                {...register("productPrice.price")}
                            />
                            {errors.productPrice?.price?.message && (
                                <p style={{ color: "red" }}>{errors.productPrice?.price?.message?.toString()}</p>
                            )}
                            </div>
                        </div>

                        <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 form-label-title">Sale
                                price</label>
                            <div className="col-sm-9">
                                <input
                                    className="form-control" 
                                    placeholder="0"
                                    {...register("productPrice.sale_price")}
                                />
                                {errors.productPrice?.sale_price?.message && (
                                <p style={{ color: "red" }}>{errors.productPrice?.sale_price?.message?.toString()}</p>
                            )}
                            </div>
                        </div>
                        <div className="mb-4 row align-items-center">
                            <label className="col-sm-3 form-label-title">Cost per item</label>
                            <div className="col-sm-5">
                                <input
                                    className="form-control" 
                                    placeholder="0"
                                    {...register("productPrice.cost_per_item")}
                                />
                                {errors.productPrice?.cost_per_item?.message && (
                                <p style={{ color: "red" }}>{errors.productPrice?.cost_per_item?.message?.toString()}</p>
                            )}
                            </div>
                            <div className="col-sm-2">
                                <label>Margin:</label>
                                <span>{margin?margin:0}%</span>
                            </div>
                            <div className="col-sm-2">
                                <label>Profit:</label>
                                <span>₹{profit}</span>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
  };

  export default ProductPrice;