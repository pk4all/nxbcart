import { Link } from "@inertiajs/react";
import { useState,useEffect } from "react";
import CategoriesList from "./CategoriesList";

const NavBar = () => {
    return (
    <div className="container-fluid-lg">
        <div className="row">
            <div className="col-12">
                <div className="main-nav">
                    <CategoriesList />
                    <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                        <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                            <div className="offcanvas-header navbar-shadow">
                                <h5>Menu</h5>
                                <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                                            data-bs-toggle="dropdown">Blog</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="blog-detail.html">Blog Detail</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="blog-grid.html">Blog Grid</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="blog-list.html">Blog List</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <div className="right-nav">
                        <div className="nav-number">
                            <img src="/images/icon/music.png" className="img-fluid" alt="" />
                            <span>(123) 456 7890</span>
                        </div>
                        <a href="javascript:void(0)" className="btn theme-bg-color ms-3 fire-button"
                            data-bs-toggle="modal" data-bs-target="#deal-box">
                            <div className="fire">
                                <img src="/images/icon/hot-sale.png" className="img-fluid" />
                            </div>
                            <span>Hot Deals</span>
                        </a>
                    </div> */}

                </div>
            </div>
        </div>
    </div>

    );
  };

  export default NavBar;
