import { Head } from '@inertiajs/react';
import Header from '../components/web/Header';
import Footer from '../components/web/Footer';
import { CurrencyProvider } from '../context/CurrencyContext';
import { CartProvider } from '../context/CartContext';
interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function WebLayout({ title, children }: MainLayoutProps) {
  return (
    <>
      <Head title={title} />
      <CurrencyProvider>
        <CartProvider>
        <Header className="header" />
        <div className="page-body-wrapper">
          {children}
          <Footer className="footer" />
        </div>
        </CartProvider>
      </CurrencyProvider>
    </>
  );
}
