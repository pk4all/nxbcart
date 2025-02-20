import { Head } from '@inertiajs/react'
import WebLayout from '../../layouts/webLayout';
import CartHeader from '../../components/web/cart/CartHeader';
import Cart from '../../components/web/cart/Cart';
import ServiceSection from '../../components/web/ServiceSection';
function CheckoutPage() {
  return (
    <>
      <Head title="Checkout Page" />
      <CartHeader title='Checkout' />
      
      <ServiceSection />
    </>
  )
}

CheckoutPage.layout = (page: React.ReactNode) => (
  <WebLayout title="NXB Check Page " children={page} />
);

export default CheckoutPage;