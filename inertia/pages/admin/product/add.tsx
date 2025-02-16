import { Head,Link } from '@inertiajs/react';
import { useState,lazy,Suspense,useEffect } from 'react';
import { Inertia } from "@inertiajs/inertia"
import AdminLayout from '../../../layouts/adminLayout';
import ProductDescription from '../../../components/admin/product/ProductDescription';
import ProductInformation from '../../../components/admin/product/ProductInformation';
import ProductAttributes from '../../../components/admin/product/ProductAttributes';
import ProductShipping from '../../../components/admin/product/ProductShipping';
import ProductInventory from '../../../components/admin/product/ProductInventory';
import ProductAdditionalInfo from '../../../components/admin/product/ProductAdditionalInfo';
import ProductSEO from '../../../components/admin/product/ProductSEO';
import ProductPrice from '../../../components/admin/product/ProductPrice';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useCsrfToken from "../../../hooks/useCsrfToken";
function AddProductPage(){ 
    const [category, setCategory] = useState("");
    const csrfToken = useCsrfToken();
    const schema = yup.object({
        productInformation: yup.object({
          name: yup.string().required("Name is required"),
          slug: yup.string().required("Slug is required"),
          category_id: yup.string().required("Category is required"),
          sub_category_id: yup.string().required("Subcategory is required"),
          model_name:yup.string().required("Model name is required"),
          tags:yup.array().notRequired(),
          warranty_summary:yup.string().notRequired(),
          covered_in_warranty:yup.string().notRequired(),
          sales_in_package:yup.string().notRequired(),
          key_features:yup.string().notRequired(),
        }),
        productDescription:yup.object({
            description:yup.string().required("Description is required"),
            additional_info:yup.string().notRequired(),
        }),
        productAttributes:yup.object({}),
        productPrice:yup.object({
            price:yup.number().required("Price is required").moreThan(0, "Price must be greater than 0").typeError("Price must be a number"), 
            sale_price: yup.number().required("Sale Price is required").moreThan(0, "Sale Price must be greater than 0").typeError("Sale Price must be a number"),
            cost_per_item:yup.number().required("Cost per item is required").moreThan(0, "Cost per item must be greater than 0").typeError("Cost per item must be a number"),
            margin:yup.number().notRequired(),
            profit:yup.number().notRequired(),
        }),
        productShipping:yup.object({
            weight:yup.number().required("Weight is required").moreThan(0, "Weight must be greater than 0").typeError("Weight must be a number"), 
            length: yup.number().required("Length is required").moreThan(0, "Length must be greater than 0").typeError("Length must be a number"),
            width:yup.number().required("Width is required").moreThan(0, "Width must be greater than 0").typeError("Width must be a number"),
            height:yup.number().required("Height is required").moreThan(0, "Height must be greater than 0").typeError("Height must be a number"),
        }),
        productInventory:yup.object({
            sku:yup.string().required("Sku is required"),
            qty:yup.number().required("Quantity is required").moreThan(0, "Quantity must be greater than 0").typeError("Quantity must be a number"),
            stock_status:yup.string().required("Stock status is required").oneOf(["InStock", "OutOfStock", "OnBackorder"], "Invalid selection"),
        }),
        productSEO:yup.object({
            page_title:yup.string().required("Page title is required"),
            meta_description:yup.string().required("Meta description is required"),
            url_handle:yup.string().required("Url handle is required"),
        })
      });

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            productInformation: {
                name: "", 
                slug: '', 
                category_id:'',
                sub_category_id:'',
                model_name:'',
                tags:[],
                warranty_summary:'',
                covered_in_warranty:'',
                sales_in_package:'',
                key_features:''
            },
            productDescription: {
                description:"",
                additional_info:""
            },
            productAttributes:{},
            productPrice:{
                price:0, 
                sale_price: 0, 
                cost_per_item:0,
                margin:0,
                profit:0
            },
            productShipping:{
                weight:0, 
                length: 0, 
                width:0,
                height:0,
            },
            productInventory:{
                sku:'',
                qty:0,
                stock_status:''
            },
            productSEO:{
                page_title:'',
                meta_description:'',
                url_handle:''
            }

        },
      });

    const onSubmit = (data:any) => {
        Inertia.post('/admin/product/add',data,
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
        console.log(data,'all data');
   };
  return (
    <>
     <div className='page-body'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                        <div className="row">
                            <div className="col-sm-8 m-auto">
                                <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(onSubmit)}>
                                    <ProductInformation setCategory={setCategory} />
                                    <ProductDescription  />
                                     {category && (
                                        <ProductAttributes category={category} />
                                    )}
                                    <ProductPrice />
                                    <ProductShipping />
                                    <ProductInventory />
                                    <ProductAdditionalInfo />
                                    <ProductSEO />
                                    <div className="mb-4 row align-items-center">
                                        <div className="col-sm-3 form-label-title">
                                            <button className="flex items-center focus:outline-none btn-indigo btn btn-animation w-30" type="submit">Save & Continue</button>
                                        </div>
                                    </div>
                                </form>
                                </FormProvider>

                            </div>
                        </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

AddProductPage.layout = (page: React.ReactNode) => (
  <AdminLayout title="Add Product" children={page} />
);

export default AddProductPage;