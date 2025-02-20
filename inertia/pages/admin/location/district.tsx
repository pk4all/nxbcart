import { Head } from '@inertiajs/react'
import { Link,usePage } from '@inertiajs/react';
import AdminLayout from '../../../layouts/adminLayout';
import Pagination from '../../../components/pagination/Pagination';
import { Category,PaginatedData } from '../../../types';
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
function ListPage(){

  return (
    <>
    <Head title="All Districts Information" />
      <div className='page-body'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="title-header option-title">
                                    <h5>All Districts</h5>
                                        <Link href="/admin/create-coupon" className="align-items-center btn btn-theme">
                                            <i className="ri-add-line"></i>Add New
                                        </Link>
                                </div>
                                <div className="table-responsive category-table">
                                   
                                </div>
                                <div className='dataTables_wrapper'>
                                    <div className="dataTables_paginate" id="table_id_paginate">
                                        {/* <Pagination meta={meta} baseUrl={'/admin/coupons'} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  )
}

ListPage.layout = (page: React.ReactNode) => (
  <AdminLayout title="List All Category" children={page} />
);

export default ListPage;