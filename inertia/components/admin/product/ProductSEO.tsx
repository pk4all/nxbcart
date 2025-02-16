import { Head,useForm,Link } from '@inertiajs/react';
import { useState,useEffect} from 'react';
import { Input} from 'rsuite';
import { useFormContext} from "react-hook-form";
interface ProductFormData {
    productInformation: {
        name:string, 
        slug: string, 
        category_id:string,
        sub_category_id:string,
        model_name:string,
        tags:[],
    },
    productSEO: {
        page_title:string,
        meta_description:string,
        url_handle:string
    };
  }
const ProductSEO = () => {
const {
    register,
    formState: {errors},
    setValue,
    watch
} = useFormContext<ProductFormData>();
const productName = watch("productInformation.name");
const productslug = watch("productInformation.slug");
const productMetaDescription = watch("productSEO.meta_description");
useEffect(()=>{
        
},[]);
    return (
        <>
           <div className="card">
                <div className="card-body">
                    <div className="card-header-2">
                        <h5>Search engine listing</h5>
                    </div>

                    <div className="seo-view">
                        <span className="link">{productslug}</span>
                        <h5>{productName}</h5>
                        <p>{productMetaDescription}</p>
                    </div>
                    <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">Page title</label>
                        <div className="col-sm-9">
                            <input 
                                {...register("productSEO.page_title")}
                                className="form-control"
                                type="text"
                                value={productName}
                                placeholder="Page title"
                                />
                        </div>
                    </div>

                        <div className="mb-4 row">
                            <label className="form-label-title col-sm-3 mb-0">Meta
                                description</label>
                            <div className="col-sm-9">
                                <textarea 
                                    {...register("productSEO.meta_description")}
                                    className="form-control"
                                 ></textarea>
                            </div>
                        </div>

                        <div className="row">
                            <label className="form-label-title col-sm-3 mb-0">URL handle</label>
                            <div className="col-sm-9">
                                <input 
                                    {...register("productSEO.url_handle")} 
                                    value={productslug}
                                    className="form-control" 
                                    type="text"
                                    readOnly
                                />
                            </div>
                        </div>
                 
                </div>
            </div>
        </>
    );
  };

  export default ProductSEO;