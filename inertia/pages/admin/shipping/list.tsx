import { Head } from '@inertiajs/react'
import { Link,usePage } from '@inertiajs/react';
import AdminLayout from '../../../layouts/adminLayout';
import Pagination from '../../../components/pagination/Pagination';
import {PaginatedData } from '../../../types';
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
function ListPage(){
  const { datas } = usePage<{ datas: PaginatedData<any> }>().props;
  const {data,meta} = datas;
  return (
    <>
    <Head title="All taxes Information" />
      <div className='page-body'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="title-header option-title">
                                    <h5>All Sippings</h5>
                                        <Link href="/admin/shippings/add" className="align-items-center btn btn-theme">
                                            <i className="ri-add-line"></i>Add New
                                        </Link>
                                </div>
                                <div className="table-responsive category-table">
                                    <table className="table all-package theme-table" id="table_id">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                {/* <th>Name</th> */}
                                                <th>Min Amount</th>
                                                <th>Max Amount</th>
                                                <th>Shipping Charge</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            data.map((row,indx)=>(
                                            <tr key={'row_'+indx}>
                                                <td>{indx+1}</td>
                                                <td>{row?.min_cart_amount}</td>
                                                <td>{row?.max_cart_amount}</td>
                                                <td>{row?.shipping_cost}</td>
                                                <td>
                                                <Toggle
                                                    checkedChildren="Active"
                                                    unCheckedChildren="Inactive" 
                                                    defaultChecked={!!row?.status}
                                                    color="green"
                                                    onChange={()=>{
                                                        fetch('/admin/shippings/change-status/'+row?.id)
                                                    }}
                                                />
                                                </td>
                                                <td>
                                                <ul>
                                                    <li>
                                                        <Link href={"/admin/shippings/edit/"+row?.id}>
                                                            <i className="ri-pencil-line"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                </td>
                                            </tr>
                                            ))} 
                                        </tbody>
                                    </table>
                                </div>
                                <div className='dataTables_wrapper'>
                                    <div className="dataTables_paginate" id="table_id_paginate">
                                        <Pagination meta={meta} baseUrl={'/admin/shippings'} />
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
  <AdminLayout title="List All Shipping" children={page} />
);

export default ListPage;