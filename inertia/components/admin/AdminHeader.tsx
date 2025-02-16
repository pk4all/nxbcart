import { Link,usePage } from "@inertiajs/react";
import { RegUser } from '../../types';

interface MainMenuProps {
    className?: string;
}
  const AdminHeader = ({ className }: MainMenuProps) => {
     const { user } = usePage<{ user: RegUser[] }>().props;
    // console.log(user,'User Data Header');
    return (
        <div className="page-header">
             <div className="header-wrapper m-0">
            <div className="header-logo-wrapper p-0">
                <div className="logo-wrapper">
                    <a href="index.html">
                        NXBKart
                    </a>
                </div>
                <div className="toggle-sidebar">
                    <i className="status_toggle middle sidebar-toggle" data-feather="align-center"></i>
                    <a href="index.html">
                        NXBKart
                    </a>
                </div>
            </div>

            <form className="form-inline search-full" action="javascript:void(0)" method="get">
                <div className="form-group w-100">
                    <div className="Typeahead Typeahead--twitterUsers">
                        <div className="u-posRelative">
                            <input className="demo-input Typeahead-input form-control-plaintext w-100" type="text"
                                placeholder="Search NXBKart .." name="q" title="" />
                            <i className="close-search" data-feather="x"></i>
                            <div className="spinner-border Typeahead-spinner" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="Typeahead-menu"></div>
                    </div>
                </div>
            </form>
            <div className="nav-right col-6 pull-right right-header p-0">
                <ul className="nav-menus">
                    <li>
                        <span className="header-search">
                            <i className="ri-search-line"></i>
                        </span>
                    </li>
                    <li className="onhover-dropdown">
                        <div className="notification-box">
                            <i className="ri-notification-line"></i>
                            <span className="badge rounded-pill badge-theme">4</span>
                        </div>
                        <ul className="notification-dropdown onhover-show-div">
                            <li>
                                <i className="ri-notification-line"></i>
                                <h6 className="f-18 mb-0">Notitications</h6>
                            </li>
                            <li>
                                <p>
                                    <i className="fa fa-circle me-2 font-primary"></i>Delivery processing <span
                                        className="pull-right">10 min.</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className="fa fa-circle me-2 font-success"></i>Order Complete<span
                                        className="pull-right">1 hr</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className="fa fa-circle me-2 font-info"></i>Tickets Generated<span
                                        className="pull-right">3 hr</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <i className="fa fa-circle me-2 font-danger"></i>Delivery Complete<span
                                        className="pull-right">6 hr</span>
                                </p>
                            </li>
                            <li>
                                <a className="btn btn-primary" href="javascript:void(0)">Check all notification</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <div className="mode">
                            <i className="ri-moon-line"></i>
                        </div>
                    </li>
                    <li className="profile-nav onhover-dropdown pe-0 me-0">
                        <div className="media profile-media">
                            <img className="user-profile rounded-circle" src="/images/4.jpg" alt="" />
                            {/* <div className="media-body">
                                <span>{user?.fullName}</span>
                                <p className="mb-0 font-roboto">Admin<i className="middle ri-arrow-down-s-line"></i></p>
                            </div> */}
                        </div>
                        <ul className="profile-dropdown onhover-show-div">
                            <li>
                                <a href="all-users.html">
                                    <i className="ri-user-3-line"></i>
                                    <span>Users</span>
                                </a>
                            </li>
                            <li>
                                <a href="order-list.html">
                                    <i className="ri-archive-line"></i>
                                    <span>Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="support-ticket.html">
                                    <i className="ri-phone-line"></i>
                                    <span>Spports Tickets</span>
                                </a>
                            </li>
                            <li>
                                <a href="profile-setting.html">
                                    <i className="ri-settings-line"></i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li>
                                <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                    href="/admin/logout">
                                    <i className="ri-logout-circle-r-line"></i>
                                    <span>Log out</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
  };

  export default AdminHeader;
