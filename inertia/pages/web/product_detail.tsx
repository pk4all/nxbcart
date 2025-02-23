import { Head,usePage } from '@inertiajs/react'
import WebLayout from '../../layouts/webLayout';
import CartHeader from '../../components/web/cart/CartHeader';
import ServiceSection from '../../components/web/ServiceSection';
import ProductImages from '../../components/web/product/ProductImages';
import ProductPrice from '../../components/web/product/ProductPrice';
import ProductRightBox from '../../components/web/product/ProductRightBox';
import ProductAllInfo from '../../components/web/product/ProductAllInfo';
import HomeOffers from '../../components/web/HomeOffers';
import RelatedProducts from '../../components/web/product/RelatedProducts';
function CheckoutPage() {
   const { slug,product } = usePage<any>().props;
   const seo = product?.productSeo;
  console.log(product,'product');
  return (
    <>
      <Head>
        <title>{seo?.page_title || product?.name}</title>
        <meta name="description" content={seo?.meta_description || product?.key_features} />
        <link rel="canonical" href={seo?.url_handle || "https://nextbuying.in"} />
      </Head>

      <CartHeader title={seo?.page_title} />
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
              <div className="col-xl-3 col-lg-5 d-lg-block fadeInUp">
                <div className="right-sidebar-box">
                    <ProductRightBox />
                </div>
              </div>
            </div>
          </div>
      </section>
      <HomeOffers />
      <RelatedProducts />
      <ServiceSection />
    </>
  )
}

CheckoutPage.layout = (page: React.ReactNode) => (
  <WebLayout title="NXB Check Page " children={page} />
);

export default CheckoutPage;