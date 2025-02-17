//import { Head } from '@inertiajs/react'
import { Link,usePage } from '@inertiajs/react';
import AdminLayout from '../../../layouts/adminLayout';
import Pagination from '../../../components/pagination/Pagination';
import { Category,PaginatedData } from '../../../types';
function ListPage(){
  const { categories } = usePage<{ categories: PaginatedData<Category> }>().props;
  const {data,meta} = categories;
  return (
    <>
      <div className='page-body'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="title-header option-title">
                                    <h5>All Category</h5>
                                        <Link href="/admin/add-new-category" className="align-items-center btn btn-theme">
                                            <i className="ri-add-line"></i>Add New
                                        </Link>
                                </div>
                                <div className="table-responsive category-table">
                                    <table className="table all-package theme-table" id="table_id">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Category Name</th>
                                                <th>Slug</th>
                                                <th>Icon</th>
                                                <th>Status</th>
                                                <th>Index</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            data.map((row,indx)=>(
                                            <tr key={'row_'+indx}>
                                            <td>{indx+1}</td>
                                                <td>{row?.name}</td>
                                                <td>{row?.slug}</td>
                                                <td>
                                                    <div className="table-image">
                                                    <img src={row.icon?row?.icon:'/images/category_default.png'} className="img-fluid" alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                {row?.status}
                                                </td>
                                                <td>{row?.short_index}</td>
                                                <td>
                                                <ul>
                                                    <li>
                                                        <Link href={"/admin/edit-category/"+row?.id}>
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
                                        <Pagination meta={meta} baseUrl={'/admin/categories'} />
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