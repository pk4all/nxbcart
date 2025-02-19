import { Head } from '@inertiajs/react';
import Header from '../components/web/Header';
import Footer from '../components/web/Footer';
import { CurrencyProvider } from '../context/CurrencyContext';
import { CartProvider } from '../context/CartContext';
import MobileMenu from '../components/web/MobileMenu';
import React from 'react'
// import Bugsnag from '@bugsnag/js'
// import BugsnagPluginReact from '@bugsnag/plugin-react'
// import BugsnagPerformance from '@bugsnag/browser-performance'

// Bugsnag.start({
//   apiKey: '58976f2570fc5566527939603aceb371',
//   plugins: [new BugsnagPluginReact()]
// })
// BugsnagPerformance.start({ apiKey: '58976f2570fc5566527939603aceb371' })
// const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)
interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function WebLayout({ title, children}: MainLayoutProps) {
  return (
    <>
    {/* <ErrorBoundary> */}
      <Head title={title} />
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
    {/* </ErrorBoundary> */}
    </>
  );
}
