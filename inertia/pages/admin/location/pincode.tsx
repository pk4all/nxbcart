import { Head } from '@inertiajs/react'
import { Link,usePage } from '@inertiajs/react';
import AdminLayout from '../../../layouts/adminLayout';
import Pagination from '../../../components/pagination/Pagination';
import { Category,PaginatedData } from '../../../types';
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
function ListPage(){
    const { pincodes } = usePage<{pincodes: PaginatedData<any>}>().props;
    const {data,meta} = pincodes;

  return (
    <>
    <Head title="All Pincode Information" />
      <div className='page-body'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="title-header option-title">
                                    <h5>All Pincode</h5>
                                        <Link href="/admin/locations/pincodes/add" className="align-items-center btn btn-theme">
                                            <i className="ri-add-line"></i>Add New
                                        </Link>
                                </div>
                                <div className="table-responsive category-table">
                                <table className="table all-package theme-table" id="table_id">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Pincode</th>
                                                <th>Pincode Name</th>
                                                <th>City</th>
                                                <th>District</th>
                                                <th>State</th>
                                                <th>Country</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            data.map((row,indx)=>(
                                            <tr key={'row_'+indx}>
                                            <td>{indx+1}</td>
                                            <td>{row?.pincode}</td>
                                                <td>{row?.pincodeName}</td>
                                                <td>{row?.cityName}</td>
                                                <td>{row?.districtName}</td>
                                                <td>{row?.stateName}</td>
                                                <td>{row?.countryName}</td>
                                                <td>
                                                <Toggle
                                                    checkedChildren="Active"
                                                    unCheckedChildren="Inactive" 
                                                    defaultChecked={!!row?.status}
                                                    color="green"
                                                    onChange={()=>{
                                                        fetch('/admin/locations/pincodes/change-status/'+row?.id)
                                                    }}
                                                />
                                                </td>
                                                <td>
                                                <ul>
                                                    <li>
                                                        <Link href={"/admin/locations/pincodes/edit/"+row?.id}>
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
                                        <Pagination meta={meta} baseUrl={'/admin/locations/pincodes'} />
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