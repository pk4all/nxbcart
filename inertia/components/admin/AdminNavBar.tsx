import { Link } from "@inertiajs/react";
import { useState } from "react";


const AdminNavBar = () => {
    const [menuIndex, setMenuIndex] = useState(0);
    const toggleVisibility = (index:number) => {
        setMenuIndex(index);
    };
    return (
           <div className="sidebar-wrapper">
                {/* <div id="sidebarEffect"></div> */}
                <div>
                    <div className="logo-wrapper logo-wrapper-center">
                        <Link href="/admin/dashboard">
                            NXBKart
                        </Link>
                        <div className="back-btn">
                            <i className="fa fa-angle-left"></i>
                        </div>
                        <div className="toggle-sidebar">
                            <i className="ri-apps-line status_toggle middle sidebar-toggle"></i>
                        </div>
                    </div>
                    <div className="logo-icon-wrapper">
                        <Link href="/admin/dashboard">
                            NXBKart
                        </Link>
                    </div>
                    <nav className="sidebar-main">
                        <div className="left-arrow" id="left-arrow">
                            <i data-feather="arrow-left"></i>
                        </div>

                        <div id="sidebar-menu">
                            <ul className="sidebar-links" id="simple-bar">
                                <li className="back-btn"></li>
                                <li className="sidebar-list">
                                    <Link className="sidebar-link sidebar-title link-nav active" href="/admin/dashboard">
                                        <i className="ri-home-line"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(0)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-store-3-line"></i>
                                        <span>Product</span>
                                        <div className="according-menu">
                                            <i className={`${menuIndex==0 ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'}`}></i>
                                        </div>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==0 ? '' : 'hide'}`}>
                                        <li>
                                            <Link href="/admin/products">Prodcts</Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/add-new-product">Add New Products</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(1)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-list-check-2"></i>
                                        <span>Category</span>
                                        <div className="according-menu">
                                            <i className={`${menuIndex==1 ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'}`}></i>
                                        </div>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==1 ? '' : 'hide'}`}>
                                        <li>
                                            <Link href="/admin/categories">Category List</Link>
                                        </li>
                                        <li>
                                        <Link href="/admin/add-new-category">Add New Category</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(2)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-list-settings-line"></i>
                                        <span>Attributes</span>
                                        <div className="according-menu">
                                            <i className={`${menuIndex==2 ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'}`}></i>
                                        </div>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==2 ? '' : 'hide'}`}>
                                        <li>
                                            <Link href="/admin/attributes">Attributes</Link>
                                        </li>

                                        <li>
                                            <Link href="/admin/add-new-attributes">Add Attributes</Link>
                                        </li>
                                    </ul>
                                </li>

                                

                                <li className="sidebar-list" onClick={()=>toggleVisibility(3)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-price-tag-3-line"></i>
                                        <span>Coupons</span>
                                        <div className="according-menu">
                                            <i className={`${menuIndex==3 ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'}`}></i>
                                        </div>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==3 ? '' : 'hide'}`}>
                                        <li>
                                            <Link href="/admin/coupons">Coupon List</Link>
                                        </li>

                                        <li>
                                            <Link href="/admin/create-coupon">Create Coupon</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(4)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-price-tag-3-line"></i>
                                        <span>Tax</span>
                                        <div className="according-menu">
                                            <i className={`${menuIndex==4 ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'}`}></i>
                                        </div>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==4 ? '' : 'hide'}`}>
                                        <li>
                                            <Link href="/admin/taxes">Tax List</Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/taxes/add">Add Tax</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(5)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-focus-3-line"></i>
                                        <span>Locations</span>
                                        <div className="according-menu">
                                            <i className={`${menuIndex==5 ? 'ri-arrow-down-s-line' : 'ri-arrow-right-s-line'}`}></i>
                                        </div>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==5 ? '' : 'hide'}`}>
                                        <li>
                                            <Link href="/admin/locations/pincodes">Pincodes</Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/locations/cities">Cities</Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/locations/districts">Districts</Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/locations/states">States</Link>
                                        </li>
                                        
                                        <li>
                                            <Link href="/admin/locations/countries">Countries</Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="right-arrow" id="right-arrow">
                            <i data-feather="arrow-right"></i>
                        </div>
                    </nav>
                
				</div>
            </div>
    );
  };

  export default AdminNavBar;
