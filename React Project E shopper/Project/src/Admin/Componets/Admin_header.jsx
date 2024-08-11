

import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink, useNavigate } from 'react-router-dom'



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { toast } from 'react-toastify';




function Admin_header() {
    const redirect = useNavigate();

    const userlogout_1 = () => {
        localStorage.removeItem('uid_1');
        localStorage.removeItem('uname_1');
        toast.success('Logout Success');
        redirect('/admin_login');
        return false;
    }
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="/Admin/plugins/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/Admin/plugins/charts-c3/c3.min.css" />
                <link rel="stylesheet" href="/Admin/css/main.css" />
                <link rel="stylesheet" href="/Admin/css/theme1.css" />





                <script src="/Admin/bundles/lib.vendor.bundle.js"></script>
                <script src="/Admin/bundles/apexcharts.bundle.js"></script>
                <script src="/Admin/bundles/counterup.bundle.js"></script>
                <script src="/Admin/bundles/knobjs.bundle.js"></script>
                <script src="/Admin/bundles/c3.bundle.js"></script>
                <script src="/Admin/js/core.js"></script>
            </Helmet>
            <div>
                <div className="page">
                    <div id="page_top" className="section-body top_dark">
                        <div className="container-fluid">
                            <div className="page-header" style={{ marginTop: "-30px" }}>
                                <div className="left">
                                    <a href="javascript:void(0)" className="icon menu_toggle mr-3"><i className="fa  fa-align-left" /></a>
                                    <h1 className="page-title"></h1>
                                </div>
                                <div className="right">
                                    <div className="input-icon xs-hide mr-4">
                                        <input type="text" className="form-control" placeholder="Search for..." />
                                        <span className="input-icon-addon"><i class="fa-solid fa-magnifying-glass" style={{ color: "#ffff" }}></i></span>
                                    </div>
                                    <div className="notification d-flex">
                                        {(() => {
                                            if (localStorage.getItem('uid_1')) {
                                                return (
                                                    <>

                                                        <div class="dropdown ">
                                                            <div type="button" class="dropdown-toggle" data-bs-toggle="dropdown">
                                                                <a to="/" className='me-3'>
                                                                    <NavLink to='/Admin_profile'><img width={42} height={38} src={localStorage.getItem('uimg_1')} className="rounded-circle m-r-5" alt="" /></NavLink>

                                                                    <span className='ms-2 mt-3'>
                                                                        {localStorage.getItem('uname_1')}
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            <ul class="dropdown-menu text-center text-end">
                                                                <li><Link to="/admin_profile" class="dropdown-item" href="#">My profile</Link></li>
                                                                <li><a class="dropdown-item" href="#" onClick={userlogout_1}>Logout</a></li>

                                                            </ul>
                                                        </div>
                                                    </>
                                                )
                                            }
                                            else {
                                                return (
                                                    <>
                                                        <PopupState variant="popover" popupId="demo-popup-menu">
                                                            {(popupState) => (
                                                                <React.Fragment>
                                                                    <i variant="contained" {...bindTrigger(popupState)} class="fa fa-user" style={{ color: "white", cursor: 'pointer' }}></i>
                                                                    <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                        <MenuItem onClick={popupState.close}><NavLink to='/admin_login'>Login</NavLink></MenuItem>

                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>

                                                    </>
                                                )
                                            }
                                        })()}



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header_top" className="header_top">
                    <div className="container">
                        <div className="hleft">
                            <a className="header-brand" href="index-2.html"><i className="fa fa-soccer-ball-o brand-logo" /></a>
                            <div className="dropdown">
                                <a href="javascript:void(0)" className="nav-link user_btn"><img className="avatar" src="Admin/images/user.png" alt data-toggle="tooltip" data-placement="right" title="User Menu" /></a>
                                <a href="page-search.html" className="nav-link icon xs-hide"><i className="fa fa-search" /></a>
                                <NavLink to='/calendar' className="nav-link icon app_inbox xs-hide"><i className="fa fa-calendar" /></NavLink>
                            </div>
                        </div>
                        <div className="hright">
                            <div className="dropdown">
                                <a href="javascript:void(0)" className="nav-link icon menu_toggle"><i className="fa  fa-align-left" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                
             
                <div className="user_div">
                    <h5 className="brand-name mb-4">Soccer<a href="javascript:void(0)" className="user_btn"><i class="icon-logout"></i></a></h5>
                    <div className="card-body">
                        <a href="page-profile.html"><img className="card-profile-img" src="Admin/images/sm/avatar1.jpg" alt /></a>
                        <h6 className="mb-0">Peter Richards</h6>
                        <span>peter.richard@gmail.com</span>
                        <div className="d-flex align-items-baseline mt-3">
                            <h3 className="mb-0 mr-2">9.8</h3>
                            <p className="mb-0"><span className="text-success">1.6% <i className="fa fa-arrow-up" /></span></p>
                        </div>
                        <div className="progress progress-xs">
                            <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                            <div className="progress-bar bg-orange" role="progressbar" style={{ width: '5%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                            <div className="progress-bar bg-indigo" role="progressbar" style={{ width: '13%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <h6 className="text-uppercase font-10 mt-1">Performance Score</h6>
                        <hr />
                        <p>Activity</p>
                        <ul className="new_timeline">
                            <li>
                                <div className="bullet pink" />
                                <div className="time">11:00am</div>
                                <div className="desc">
                                    <h3>Attendance</h3>
                                    <h4>Computer Class</h4>
                                </div>
                            </li>
                            <li>
                                <div className="bullet pink" />
                                <div className="time">11:30am</div>
                                <div className="desc">
                                    <h3>Added an interest</h3>
                                    <h4>“Volunteer Activities”</h4>
                                </div>
                            </li>
                            <li>
                                <div className="bullet green" />
                                <div className="time">12:00pm</div>
                                <div className="desc">
                                    <h3>Developer Team</h3>
                                    <h4>Hangouts</h4>
                                    <ul className="list-unstyled team-info margin-0 p-t-5">
                                        <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                        <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                        <li><img src="Admin/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                        <li><img src="Admin/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="bullet green" />
                                <div className="time">2:00pm</div>
                                <div className="desc">
                                    <h3>Responded to need</h3>
                                    <a href="javascript:void(0)">“In-Kind Opportunity”</a>
                                </div>
                            </li>
                            <li>
                                <div className="bullet orange" />
                                <div className="time">1:30pm</div>
                                <div className="desc">
                                    <h3>Lunch Break</h3>
                                </div>
                            </li>
                            <li>
                                <div className="bullet green" />
                                <div className="time">2:38pm</div>
                                <div className="desc">
                                    <h3>Finish</h3>
                                    <h4>Go to Home</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div id="left-sidebar" className="sidebar ">
                    <h5 className="brand-name">Admin side<a href="javascript:void(0)" className="menu_option float-right"><i className="fa-solid fa-bars font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle" /></a></h5>
                    <nav id="left-sidebar-nav" className="sidebar-nav">
                        <ul className="metismenu">
                            <li className="g_heading">Project</li>
                            <li className="active"><NavLink to="/dashboard"><i className="fa fa-dashboard" /><span>Dashboard</span></NavLink></li>
                            {/* <li><NavLink to="/add_order"><i className="fa fa-list-ol" /><span>Add new product</span></NavLink></li> */}
                            <li>
                                <a href="javascript:void(0)" ><i class="fa-solid fa-bars" style={{ color: "#000000;" }}></i><span> Manage Categories</span></a>
                                <ul>
                                    <ol><NavLink to="/categories_manage"> Category</NavLink></ol>
                                    
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)" ><i class="fa-solid fa-angle-down" style={{ color: "#000000;" }}></i><span> Manage Products </span></a>
                                <ul>
                                    <ol><NavLink to="/manage_prodct"> Product</NavLink></ol>
                                </ul>
                            </li>

                            <li>
                                <a href="javascript:void(0)" ><i class="fa-solid fa-angle-down" style={{ color: "#000000;" }}></i><span> New Products </span></a>
                                <ul>
                                    <ol><NavLink to="/beauty_page">Beauty</NavLink></ol>
                                  
                                </ul>
                            </li>
                            <li><NavLink to="/employee"><i className="fa fa-user" /><span>employee</span></NavLink></li>

                            <li><NavLink to="/order list"><i class="fa-solid fa-cart-shopping" style={{ color: "#000000" }}></i><span>Order List</span></NavLink></li>
                            <li><NavLink to="/clients"><i className="fa fa-user" /><span>Customer</span></NavLink></li>
                            <li><NavLink to="/manage_custom"><i className="fa fa-user" /><span> Manage Customer</span></NavLink></li>
                            {/* <li className="g_heading">App</li> */}
                            <li><NavLink to="/contact_1"><i className="fa fa-address-book" /><span>Contact</span></NavLink></li>
                            <li><NavLink to='/Admin_order'><i className="fa fa-calendar-check-o" /><span>Orderboard</span></NavLink></li>

                            <li><NavLink to='/calendar'><i className="fa fa-calendar" /><span>Calendar</span></NavLink></li>
                          
                            <li className="g_heading">Support</li>
                            <li><a href="javascript:void(0)"><i className="fa fa-support" /><span>Need Help?</span></a></li>
                            <li><a href="javascript:void(0)"><i className="fa fa-tag" /><span>ContactUs</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default Admin_header