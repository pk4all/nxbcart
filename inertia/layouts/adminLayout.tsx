import { Head } from '@inertiajs/react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminFooter from '../components/admin/AdminFooter';
import AdminNavBar from '../components/admin/AdminNavBar';

interface MainLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function AdminLayout({ title, children }: MainLayoutProps) {
  return (
    <>
      <Head title={title} />
      <AdminHeader className="header" />
      <div className="page-body-wrapper">
        <AdminNavBar />
        {children}
        <AdminFooter className="footer" />
      </div>
    </>
  );
}
