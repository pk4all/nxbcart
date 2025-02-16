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
                                    <a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-user-3-line"></i>
                                        <span>Users</span>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==3 ? '' : 'hide'}`}>
                                        <li>
                                            <a href="all-users">All users</a>
                                        </li>
                                        <li>
                                            <a href="add-new-user">Add new user</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(4)}>
                                    <a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-user-3-line"></i>
                                        <span>Roles</span>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==4 ? '' : 'hide'}`}>
                                        <li>
                                            <a href="role">All roles</a>
                                        </li>
                                        <li>
                                            <a href="create-role">Create Role</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list">
                                    <a className="sidebar-link sidebar-title link-nav" href="media.html">
                                        <i className="ri-price-tag-3-line"></i>
                                        <span>Media</span>
                                    </a>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(5)}>
                                    <a className="sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-archive-line"></i>
                                        <span>Orders</span>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==5 ? '' : 'hide'}`}>
                                        <li>
                                            <a href="order-list">Order List</a>
                                        </li>
                                        <li>
                                            <a href="order-detail">Order Detail</a>
                                        </li>
                                        <li>
                                            <a href="order-tracking">Order Tracking</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(6)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-focus-3-line"></i>
                                        <span>Localization</span>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==6 ? '' : 'hide'}`}>
                                        <li>
                                            <a href="translation">Translation</a>
                                        </li>

                                        <li>
                                            <a href="currency-rates">Currency Rates</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list" onClick={()=>toggleVisibility(7)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-price-tag-3-line"></i>
                                        <span>Coupons</span>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==7 ? '' : 'hide'}`}>
                                        <li>
                                            <a href="coupon-list">Coupon List</a>
                                        </li>

                                        <li>
                                            <a href="create-coupon">Create Coupon</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list">
                                    <a className="sidebar-link sidebar-title link-nav" href="taxes">
                                        <i className="ri-price-tag-3-line"></i>
                                        <span>Tax</span>
                                    </a>
                                </li>

                                <li className="sidebar-list">
                                    <a className="sidebar-link sidebar-title link-nav" href="product-review">
                                        <i className="ri-star-line"></i>
                                        <span>Product Review</span>
                                    </a>
                                </li>

                                <li className="sidebar-list">
                                    <a className="sidebar-link sidebar-title link-nav" href="support-ticket">
                                        <i className="ri-phone-line"></i>
                                        <span>Support Ticket</span>
                                    </a>
                                </li>
                                <li className="sidebar-list" onClick={()=>toggleVisibility(8)}>
                                    <a className="linear-icon-link sidebar-link sidebar-title" href="javascript:void(0)">
                                        <i className="ri-settings-line"></i>
                                        <span>Settings</span>
                                    </a>
                                    <ul className={`sidebar-submenu ${menuIndex==8 ? '' : 'hide'}`}>
                                        <li>
                                            <a href="profile-setting">Profile Setting</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="sidebar-list">
                                    <a className="sidebar-link sidebar-title link-nav" href="reports">
                                        <i className="ri-file-chart-line"></i>
                                        <span>Reports</span>
                                    </a>
                                </li>

                                <li className="sidebar-list">
                                    <a className="sidebar-link sidebar-title link-nav" href="list-page">
                                        <i className="ri-list-check"></i>
                                        <span>List Page</span>
                                    </a>
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
