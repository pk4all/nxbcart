import { Head,Link } from '@inertiajs/react';
import { useState,useEffect} from 'react';
import Category from '../common/Category';
import SubCategory from '../common/SubCategory';
import { Input,TagInput } from 'rsuite';
import 'rsuite/TagInput/styles/index.css';
import { useFormContext} from "react-hook-form";
import slugify from "slugify";
interface ProductFormData {
    productInformation: {
        name:string, 
        slug: string, 
        category_id:string,
        sub_category_id:string,
        model_name:string,
        tags:[],
    };
  }
const ProductInformation = ({setCategory}:any) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const {
        register,
        formState: {errors},
        setValue
      } = useFormContext<ProductFormData>();

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) {
        const { name, value } = e.target;
        // setData((prevData) => ({
        //     ...prevData,
        //     [name]: value,
        // }));
        //console.log(value,name);
        if(name=='category_id'){
            setSelectedCategory(value);
            setCategory(value);
        }
        if(name=='sub_category_id'){
            setValue('productInformation.sub_category_id',value)
        }
    }
    function handleCatChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ){
        const {value } = e.target;
        setSelectedCategory(value);
        setCategory(value);
        setValue('productInformation.category_id',value)
    }
    function setSlug(
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ){
        const {value } = e.target;
        const generatedSlug = slugify(value, {
            lower: true,
            strict: true,
            trim: true,
        });
        setValue('productInformation.slug',generatedSlug);
    }
    function tagChange(
        val:any
    ){
       // console.log(val,'tag values');
        setValue('productInformation.tags',val);
    }
    useEffect(()=>{
        
    },[]);
    return (
        <>
           <div className="card">
            <div className="card-body">
                <div className="card-header-2">
                    <h5>Product Information</h5>
                </div>
                    <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">Product Name</label>
                        <div className="col-sm-9">
                            <input 
                                {...register("productInformation.name")}
                                className="form-control"
                                placeholder="Product Name"
                                onChange={setSlug}
                            />
                            {errors.productInformation?.name?.message && (
                                <p style={{ color: "red" }}>{errors.productInformation?.name?.message?.toString()}</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">Product Slug</label>
                        <div className="col-sm-9">
                            <input
                            {...register("productInformation.slug")} 
                            className="form-control"
                            placeholder="Product Slug"
                            readOnly
                            />
                            {errors.productInformation?.slug?.message && (
                                <p style={{ color: "red" }}>{errors.productInformation?.slug?.message?.toString()}</p>
                            )}
                        </div>
                    </div>
                    
                    <Category 
                         name="category_id" 
                        // {...register("productInformation.category_id")}
                        // value={data?.category_id}
                        change={handleCatChange}
                        label="Category"
                        error={errors.productInformation?.category_id?.message}
                    />
                   
                    <SubCategory 
                        name="sub_category_id"  
                        change={handleChange} 
                        category={selectedCategory}  
                        label="Sub Category" 
                        error={errors.productInformation?.sub_category_id?.message}
                    />

                    <div className="mb-4 row align-items-center">
                        <label className="form-label-title col-sm-3 mb-0">Model Name</label>
                        <div className="col-sm-9">
                            <input
                                className="form-control" 
                                placeholder="Model Name"
                                {...register("productInformation.model_name")} 
                            />
                        {errors.productInformation?.model_name?.message && (
                        <p style={{ color: "red" }}>{errors.productInformation?.model_name?.message?.toString()}</p>
                    )}
                        </div>
                    </div>
                    <div className="mb-4 row align-items-center">
                        <label className="col-sm-3 col-form-label form-label-title">Tags</label>
                        <div className="col-sm-9">
                            <div className="bs-example bootstrap-tagsinput">
                                <TagInput 
                                    className="form-control"
                                    name="tags"
                                    placeholder="Type tag & hit enter" 
                                    onChange={tagChange}
                                />

                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    );
  };

  export default ProductInformation;