//import { Head } from '@inertiajs/react'
import AdminLayout from '../../../layouts/adminLayout';
import Product from '../../../components/admin/product/Product';
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function ProductsPage(){
   const schema = yup.object({
      productInformation: yup.object({
        name: yup.string().required("Name is required"),
      })
    });
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      productInformation:{
        name:''
      }
    }
  });
  const onSubmit = (data:any) => { 
    console.log(data,'all data');
};
  return (
    <>
    <div className='page-body'>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Product />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
    </>
  )
}

ProductsPage.layout = (page: React.ReactNode) => (
  <AdminLayout title="Product" children={page} />
);

export default ProductsPage;