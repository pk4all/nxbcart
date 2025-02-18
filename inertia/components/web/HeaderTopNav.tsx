import { Link } from "@inertiajs/react";
import { useState } from "react";
import HeaderCart from "./HeaderCart";
import HeaderLogin from "./header/HeaderLogin";
const HeaderTopNav = () => {
    return (
        <div className="top-nav top-header sticky-header sticky-header-3">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-12">
                    <div className="navbar-top">

                        <button className="navbar-toggler d-xl-none d-block p-0 me-3" type="button"
                            data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                            <span className="navbar-toggler-icon">
                                <i className="iconly-Category icli theme-color"></i>
                            </span>
                        </button>

                        <a href="/" className="web-logo nav-logo">
                           <img src="/images/NXB_Logo_1.webp" />
                        </a>

                        <div className="search-full">
                            <div className="input-group">
                                <span className="input-group-text">
                                    <i data-feather="search" className="font-light"></i>
                                </span>
                                <input type="text" className="form-control search-type" placeholder="Search here.." />
                                <span className="input-group-text close-search">
                                    <i data-feather="x" className="font-light"></i>
                                </span>
                            </div>
                        </div>

                        <div className="middle-box">
                            <div className="center-box">
                                <div className="searchbar-box order-xl-1 d-none d-xl-block">
                                    <input type="search" className="form-control" id="exampleFormControlInput1"
                                        placeholder="search for product, delivered to your door..." />
                                    <button className="btn search-button">
                                        <i className="iconly-Search icli"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="rightside-menu">
                            <div className="dropdown-dollar d-xl-none">
                                {/* <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>Language</span> <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a id="eng" className="dropdown-item" href="javascript:void(0)">English</a>
                                        </li>
                                        <li>
                                            <a id="hin" className="dropdown-item" href="javascript:void(0)">Hindi</a>
                                        </li>
                                        <li>
                                            <a id="guj" className="dropdown-item" href="javascript:void(0)">Gujarati</a>
                                        </li>
                                        <li>
                                            <a id="arb" className="dropdown-item" href="javascript:void(0)">Arbic</a>
                                        </li>
                                        <li>
                                            <a id="rus" className="dropdown-item" href="javascript:void(0)">Rusia</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="javascript:void(0)">Chinese</a>
                                        </li>
                                    </ul>
                                </div> */}

                                <div className="dropdown">
                                    <button className="dropdown-toggle m-0" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>Dollar</span> <i className="fa-solid fa-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a id="usd" className="dropdown-item" href="javascript:void(0)">USD</a>
                                        </li>
                                        <li>
                                            <a id="inr" className="dropdown-item" href="javascript:void(0)">INR</a>
                                        </li>
                                        <li>
                                            <a id="eur" className="dropdown-item" href="javascript:void(0)">EUR</a>
                                        </li>
                                        <li>
                                            <a id="aud" className="dropdown-item" href="javascript:void(0)">AUD</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="option-list">
                                <ul>
                                    
                                    <HeaderLogin />
                                    <li>
                                        <a href="javascript:void(0)" className="header-icon search-box search-icon">
                                            <i className="iconly-Search icli"></i>
                                        </a>
                                    </li>

                                    {/* <li>
                                        <a href="compare.html" className="header-icon">
                                            <small className="badge-number">2</small>
                                            <i className="iconly-Swap icli"></i>
                                        </a>
                                    </li> */}

                                    <li className="onhover-dropdown">
                                        <a href="javascript:void(0)" className="header-icon swap-icon">
                                            <i className="iconly-Heart icli"></i>
                                        </a>

                                    </li>

                                    <HeaderCart />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    );
  };

  export default HeaderTopNav;
