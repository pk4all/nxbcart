//import { Head } from '@inertiajs/react'
import { Link,usePage } from '@inertiajs/react';
import AdminLayout from '../../../layouts/adminLayout.js';
import Pagination from '../../../components/pagination/Pagination';
import { Attribute,PaginatedData } from '../../../types/index.js';
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
function ListPage(){
  const { attributes } = usePage<{ attributes: PaginatedData<Attribute> }>().props;
  const {data,meta} = attributes;
  
  return (
    <>
      <div className='page-body'>
      <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="title-header option-title">
                                        <h5>All Attributes</h5>
                                            <Link href="/admin/add-new-attributes" className="align-items-center btn btn-theme">
                                                <i className="ri-add-line"></i>Add New
                                            </Link>
                                    </div>
                                    <div className="table-responsive category-table">
                                        <table className="table all-package theme-table" id="table_id">
                                            <thead>
                                                <tr>
                                                  <th>#</th>
                                                  <th>Category</th>
                                                  <th>Name</th>
                                                  <th>Field Name</th>
                                                  <th>Type</th>
                                                  <th>Required</th>
                                                  <th>Status</th>
                                                  <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                            {
                                               data.map((row,indx)=>(
                                                <tr key={'row_'+indx}>
                                                    
                                                <td>{indx+1}</td>
                                                <td>{row.category?row?.category?.name:'NA'}</td>
                                                  <td>{row?.name}</td>
                                                  <td>{row?.slug}</td>
                                                  <td>
                                                     {row.type}
                                                  </td>
                                                  <td>
                                                    {/* {
                                                    row?.required?(
                                                    <Toggle
                                                        checkedChildren="Active"
                                                        unCheckedChildren="Inactive" 
                                                        defaultChecked
                                                        color="yellow"
                                                        onChange={()=>{
                                                        fetch('/admin/attribute/change-required/'+row?.id)
                                                        }}
                                                />
                                                    ):(
                                                    <Toggle
                                                        checkedChildren="Active"
                                                        unCheckedChildren="Inactive" 
                                                        color="yellow"
                                                        onChange={()=>{
                                                        fetch('/admin/attribute/change-required/'+row?.id)
                                                        }}
                                                    />
                                                    )
                                                } */}
                                                <Toggle
                                                    checkedChildren="Active"
                                                    unCheckedChildren="Inactive"
                                                    color="yellow"
                                                    defaultChecked={!!row?.required} 
                                                    onChange={() => fetch(`/admin/attribute/change-required/${row?.id}`)}
                                                />
                                                </td>
                                                  <td>
                                                  <Toggle
                                                        checkedChildren="Active"
                                                        unCheckedChildren="Inactive" 
                                                        defaultChecked={!!row?.status}
                                                        color="green"
                                                        onChange={()=>{
                                                        fetch('/admin/attribute/change-status/'+row?.id)
                                                        }}
                                                />
                                                  </td>
                                                  <td>
                                                    {/* <ul>
                                                        <li>
                                                            <Link href={"/admin/edit-category/"+row?.id}>
                                                                <i className="ri-pencil-line"></i>
                                                            </Link>
                                                        </li>
                                                    </ul> */}
                                                  </td>
                                              </tr>
                                               ))} 
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='dataTables_wrapper'>
                                        <div className="dataTables_paginate" id="table_id_paginate">
                                            <Pagination meta={meta} baseUrl={'/admin/attributes'} />
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
  <AdminLayout title="List All Attributes" children={page} />
);

export default ListPage;