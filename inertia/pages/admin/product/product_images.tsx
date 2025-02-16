//import { Head } from '@inertiajs/react'
import AdminLayout from '../../../layouts/adminLayout';
import ImageUpload from '../../../components/admin/product/ImageUpload';
import ProductVideo from '../../../components/admin/product/ProductVideo';
function ProductImages(){
  return (
    <>
      <div className='page-body'>
        <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                    <div className="col-sm-8 m-auto">
                      <ImageUpload />
                      <ProductVideo />
                      
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ProductImages.layout = (page: React.ReactNode) => (
  <AdminLayout title="Upload Product Image" children={page} />
);

export default ProductImages;