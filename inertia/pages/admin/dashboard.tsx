//import { Head } from '@inertiajs/react'
import AdminLayout from '../../layouts/adminLayout';

function DashboardPage(){
  return (
    <>
    <div className='page-body'>
        <h2>Dashboard</h2>
    </div>
       
    </>
  )
}

DashboardPage.layout = (page: React.ReactNode) => (
  <AdminLayout title="Dashboard" children={page} />
);

export default DashboardPage;