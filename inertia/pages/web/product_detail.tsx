import { Head,usePage } from '@inertiajs/react'
import WebLayout from '../../layouts/webLayout';
import CartHeader from '../../components/web/cart/CartHeader';
import ServiceSection from '../../components/web/ServiceSection';
import ProductImages from '../../components/web/product/ProductImages';
import ProductPrice from '../../components/web/product/ProductPrice';
import ProductRightBox from '../../components/web/product/ProductRightBox';
import ProductAllInfo from '../../components/web/product/ProductAllInfo';
function CheckoutPage() {
   const { slug,product } = usePage<any>().props;
  console.log(product,'product');
  return (
    <>
      <Head title={slug} />
      <CartHeader title={slug} />
      <section className="product-section">
        <div className="container-fluid-lg">
            <div className="row">
              <div className="col-xl-9 col-lg-7 wow fadeInUp">
                <div className="row">
                  <div className="col-xl-6 wow fadeInUp">
                    <ProductImages/>
                  </div>
                  <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
                  <ProductPrice/>
                  </div>

                </div>
                <div className='row'>
                    <div className='col-12'>
                        <ProductAllInfo />
                    </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 d-lg-block fadeInUp m-t-1">
                <div className="right-sidebar-box">
                    <ProductRightBox />
                </div>
              </div>
            </div>
          </div>
      </section>        
      <ServiceSection />
    </>
  )
}

CheckoutPage.layout = (page: React.ReactNode) => (
  <WebLayout title="NXB Check Page " children={page} />
);

export default CheckoutPage;