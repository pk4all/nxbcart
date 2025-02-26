import { Head } from '@inertiajs/react'
import WebLayout from '../../layouts/webLayout';
import CartHeader from '../../components/web/cart/CartHeader';
import Cart from '../../components/web/cart/Cart';
import ServiceSection from '../../components/web/ServiceSection';
function CartPage() {
  return (
    <>
      <Head title="Cart Page" />
      <CartHeader />
      <Cart />
      <ServiceSection />
    </>
  )
}

CartPage.layout = (page: React.ReactNode) => (
  <WebLayout title="NXB Home Page " children={page} />
);

export default CartPage;