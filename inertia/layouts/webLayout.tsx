import { Head,usePage } from '@inertiajs/react';
import Header from '../components/web/Header';
import Footer from '../components/web/Footer';
import { CurrencyProvider } from '../context/CurrencyContext';
import { CartProvider } from '../context/CartContext';
import MobileMenu from '../components/web/MobileMenu';
import Alert from '../components/alert/Alert';
import React,{useEffect} from 'react'

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function WebLayout({ title, children}: MainLayoutProps) {
    const { data } = usePage<any>().props;
  useEffect(()=>{
     // console.log(data,"data page")
  },[data]);
  // 
  return (
    <>
      {/* <Head title={title} /> */}
      <CurrencyProvider>
        <CartProvider>
        <Header className="header" />
        <MobileMenu className="mobile-menu" />
        <div className="page-body-wrapper">
          {children}
          <Footer className="footer" />
        </div>
        </CartProvider>
      </CurrencyProvider>
    </>
  );
}
