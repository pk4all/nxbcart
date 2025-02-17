//import { Head } from '@inertiajs/react'
import AdminLayout from '../../../layouts/adminLayout';
import { Product,PaginatedData } from '../../../types';
import { Link,usePage } from '@inertiajs/react';
import Pagination from '../../../components/pagination/Pagination';
import { Toggle, Stack } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
function ProductsPage(){
    const { products } = usePage<{ products: PaginatedData<Product> }>().props;
    const {data,meta} = products;
    console.log(data,meta,'data');
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
                                                  <Link href="/admin/add-new-product" className="align-items-center btn btn-theme">
                                                      <i className="ri-add-line"></i>Add New
                                                  </Link>
                                          </div>
                                          <div className="table-responsive category-table">
                                              <table className="table all-package theme-table" id="table_id">
                                                  <thead>
                                                      <tr>
                                                          <th>#</th>
                                                          <th>Image</th>
                                                          <th>Product Name</th>
                                                          <th>Slug</th>
                                                          <th>SKU</th>
                                                          <th>Category</th>
                                                          <th>Sale Price</th>
                                                          <th>Qty</th>
                                                          <th>Is Top</th>
                                                          <th>Is Featured</th>
                                                          <th>Status</th>
                                                          <th>Action</th>
                                                      </tr>
                                                  </thead>
          
                                                  <tbody>
                                                  {
                                                      data.map((row,indx)=>(
                                                      <tr key={'row_'+indx}>
                                                        <td>{indx+1}</td>
                                                        <td>
                                                                <div className="table-image">
                                                      <img src={row.productImages[0]?row.productImages[0]?.thum_url:'/images/category_default.png'}className="img-fluid" alt="" />
                                                                </div>
                                                          </td>
                                                          <td>{row?.name}</td>
                                                          <td>{row?.slug}</td>
                                                          <td>{row?.sku||'NA'}</td>
                                                          <td>{row?.category?.name}</td>
                                                          <td>{row?.productPrice?.sale_price||0}</td>
                                                          <td>{row?.productInventory?.qty||0}</td>
                                                          <td>
                                                           
                                                            <Toggle defaultChecked color="red">
                                                            {/* {row?.topProductText||'NA'} */}
                                                            </Toggle>
                                                          </td>
                                                          <td>
                                                          <Toggle defaultChecked color="yellow">
                                                            {/* {row?.featuredProductText||'NA'} */}
                                                          </Toggle>
                                                            
                                                          </td>
                                                          <td>
                                                          <Toggle defaultChecked color="green">
                                                            {/* {row?.statusText||'NA'} */}
                                                          </Toggle>
                                                            
                                                          </td>
                                                          <td>
                                                          <ul>
                                                          <li>
                                                                  <Link href={"/admin/upload-product-images/"+row?.id}>
                                                                      <i className="ri-image-line"></i>
                                                                  </Link>
                                                              </li>
                                                              <li>
                                                                  <Link href={"/admin/edit-product/"+row?.id}>
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
                                                  <Pagination meta={meta} baseUrl={'/admin/products'} />
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

ProductsPage.layout = (page: React.ReactNode) => (
  <AdminLayout title="Product List" children={page} />
);

export default ProductsPage;