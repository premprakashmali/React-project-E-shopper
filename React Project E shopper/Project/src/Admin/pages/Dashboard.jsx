import React, { useEffect } from 'react'
import Admin_header from '../Componets/Admin_header'
import { Helmet } from 'react-helmet'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'



function Dashboard() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login');
        }
    }, []);




    return (
        <div>

            <Admin_header />

            <div className='page'>

                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix row-deck">
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-header justify-content-center">
                                        <h3 className="card-title">ALL Order</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="number mb-0 font-32 counter">31</h5>
                                        <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-header justify-content-center">
                                        <h3 className="card-title">Products</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="number mb-0 font-32 counter">1500</h5>
                                        <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-header justify-content-center">
                                        <h3 className="card-title">Upcoming Orders</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="number mb-0 font-32 counter">17</h5>
                                        <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-header justify-content-center">
                                        <h3 className="card-title">New products</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="number mb-0 font-32 counter">12</h5>
                                        <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-header justify-content-center">
                                        <h3 className="card-title">Open Request</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="number mb-0 font-32 counter">19</h5>
                                        <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="card-header justify-content-center">
                                        <h3 className="card-title">Hours Spent</h3>
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="number mb-0 font-32 counter">284</h5>
                                        <span className="font-12">Measure How Fast... <a href="#">More</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row clearfix row-deck">
                            <div className="col-xl-12 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Sales Analytics</h3>
                                        <div className="card-options">
                                            <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                            <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                            <button className="btn btn-sm btn-outline-secondary mr-1" id="one_year">1Y</button>
                                            <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                            <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div id="apex-timeline-chart" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Current Ticket Status</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                            <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-sm-flex justify-content-between">
                                            <div className="font-12">as of 10th to 17th of Jun 2019</div>
                                            <div className="selectgroup w250">
                                                <label className="selectgroup-item">
                                                    <input type="radio" name="intensity" defaultValue="Day" className="selectgroup-input" defaultChecked />
                                                    <span className="selectgroup-button">1D</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="radio" name="intensity" defaultValue="Week" className="selectgroup-input" />
                                                    <span className="selectgroup-button">1W</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="radio" name="intensity" defaultValue="Month" className="selectgroup-input" />
                                                    <span className="selectgroup-button">1M</span>
                                                </label>
                                                <label className="selectgroup-item">
                                                    <input type="radio" name="intensity" defaultValue="Year" className="selectgroup-input" />
                                                    <span className="selectgroup-button">1Y</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div id="chart-combination" style={{ height: 205 }} />
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-6 col-xl-3 col-md-6">
                                                <h5>05</h5>
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>35%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Yesterday</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-gray" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="text-uppercase font-10">New Tickets</span>
                                            </div>
                                            <div className="col-6 col-xl-3 col-md-6">
                                                <h5>18</h5>
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>61%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Yesterday</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-gray" role="progressbar" style={{ width: '61%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="text-uppercase font-10">Open Tickets</span>
                                            </div>
                                            <div className="col-6 col-xl-3 col-md-6">
                                                <h5>06</h5>
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>100%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Yesterday</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-gray" role="progressbar" style={{ width: '100%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="text-uppercase font-10">Solved Tickets</span>
                                            </div>
                                            <div className="col-6 col-xl-3 col-md-6">
                                                <h5>11</h5>
                                                <div className="clearfix">
                                                    <div className="float-left"><strong>87%</strong></div>
                                                    <div className="float-right"><small className="text-muted">Yesterday</small></div>
                                                </div>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-gray" role="progressbar" style={{ width: '87%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <span className="text-uppercase font-10">Unresolved</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Project Statistics</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                            <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row text-center">
                                            <div className="col-4 border-right pb-4 pt-4">
                                                <label className="mb-0 font-13">Total Project</label>
                                                <h4 className="font-30 font-weight-bold text-col-blue counter">42</h4>
                                            </div>
                                            <div className="col-4 border-right pb-4 pt-4">
                                                <label className="mb-0 font-13">On Going</label>
                                                <h4 className="font-30 font-weight-bold text-col-blue counter">23</h4>
                                            </div>
                                            <div className="col-4 pb-4 pt-4">
                                                <label className="mb-0 font-13">Pending</label>
                                                <h4 className="font-30 font-weight-bold text-col-blue counter">8</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped table-vcenter mb-0">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left"><strong>35%</strong></div>
                                                            <div className="float-right"><small className="text-muted">Design Team</small></div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left"><strong>25%</strong></div>
                                                            <div className="float-right"><small className="text-muted">Developer Team</small></div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-green" role="progressbar" style={{ width: '25%' }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left"><strong>15%</strong></div>
                                                            <div className="float-right"><small className="text-muted">Marketing</small></div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-orange" role="progressbar" style={{ width: '15%' }} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left"><strong>20%</strong></div>
                                                            <div className="float-right"><small className="text-muted">Management</small></div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-indigo" role="progressbar" style={{ width: '20%' }} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left"><strong>11%</strong></div>
                                                            <div className="float-right"><small className="text-muted">Other</small></div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-pink" role="progressbar" style={{ width: '11%' }} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="row clearfix row-deck">
                            {/* <div className="col-xl-4 col-lg-12 col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Transaction History</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i class="fa-solid fa-x" style={{ color: "#000000" }}></i></a>
                                            <div className="item-action dropdown ml-2">
                                                <a href="javascript:void(0)" data-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical" style={{ color: "#000000;" }}></i></a>
                                                <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', transform: 'translate3d(-174px, 25px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i class="fa-solid fa-eye" style={{ color: "#000000" }}></i> View Details </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                    <div className="dropdown-divider" />
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table card-table mt-2">
                                        <tbody>
                                            <tr>
                                                <td className="w60"><img className="avatar" src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></td>
                                                <td>
                                                    <p className="mb-0 d-flex justify-content-between"><span>Payment from #2583</span> <strong>$300</strong></p>
                                                    <span className="text-muted font-13">Feb 21, 2019</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w60"><img className="avatar" src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></td>
                                                <td>
                                                    <p className="mb-0 d-flex justify-content-between"><span>Payment from #1245</span> <strong>$1200</strong></p>
                                                    <span className="text-muted font-13">March 14, 2019</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w60"><img className="avatar" src="Admin/images/xs/avatar3.jpg" alt="Avatar" /></td>
                                                <td>
                                                    <p className="mb-0 d-flex justify-content-between"><span>Payment from #8596</span> <strong>$780</strong></p>
                                                    <span className="text-muted font-13">March 18, 2019</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w60"><img className="avatar" src="Admin/images/xs/avatar4.jpg" alt="Avatar" /></td>
                                                <td>
                                                    <p className="mb-0 d-flex justify-content-between"><span>Payment from #1526</span> <strong>$841</strong></p>
                                                    <span className="text-muted font-13">April 27, 2019</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w60"><img className="avatar" src="Admin/images/xs/avatar5.jpg" alt="Avatar" /></td>
                                                <td>
                                                    <p className="mb-0 d-flex justify-content-between"><span>Payment from #4859</span> <strong>$235</strong></p>
                                                    <span className="text-muted font-13">March 18, 2019</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Customer Satisfaction</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i class="fa-solid fa-x" style={{ color: "#000000" }}></i></a>
                                            <div className="item-action dropdown ml-2">
                                                <a href="javascript:void(0)" data-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical" style={{ color: "#000000;" }}></i></a>
                                                <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', transform: 'translate3d(-174px, 25px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                    <div className="dropdown-divider" />
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-baseline">
                                            <h1 className="mb-0 mr-2">9.8</h1>
                                            <p className="mb-0"><span className="text-success">1.6% <i className="fa fa-arrow-up" /></span></p>
                                        </div>
                                        <h6 className="text-uppercase font-10">Performance Score</h6>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-orange" role="progressbar" style={{ width: '5%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-indigo" role="progressbar" style={{ width: '13%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped table-vcenter mb-0">
                                            <tbody>
                                                <tr>
                                                    <td className="tx-medium"><i className="fa fa-circle text-blue" /> Excellent</td>
                                                    <td className="text-right">3,007</td>
                                                    <td className="text-right">50%</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-medium"><i className="fa fa-circle text-success" /> Very Good</td>
                                                    <td className="text-right">1,674</td>
                                                    <td className="text-right">25%</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-medium"><i className="fa fa-circle text-info" /> Good</td>
                                                    <td className="text-right">125</td>
                                                    <td className="text-right">6%</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-medium"><i className="fa fa-circle text-orange" /> Fair</td>
                                                    <td className="text-right">98</td>
                                                    <td className="text-right">5%</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-medium"><i className="fa fa-circle text-indigo" /> Poor</td>
                                                    <td className="text-right">512</td>
                                                    <td className="text-right">10%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Overall Rating</h3>
                                        <div className="card-options">
                                            <a href="#" className="card-options-remove" data-toggle="card-remove"><i class="fa-solid fa-x" style={{ color: "#000000" }}></i></a>
                                            <div className="item-action dropdown ml-2">
                                                <a href="javascript:void(0)" data-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical" style={{ color: "#000000;" }}></i></a>
                                                <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style={{ position: 'absolute', transform: 'translate3d(-174px, 25px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-eye" /> View Details </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-share-alt" /> Share </a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-cloud-download" /> Download</a>
                                                    <div className="dropdown-divider" />
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-copy" /> Copy to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-folder" /> Move to</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-edit" /> Rename</a>
                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fa fa-trash" /> Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex align-items-baseline">
                                            <h2 className="font-28 mr-2">4.2</h2>
                                            <div className="font-14">
                                                <i className="fa fa-star text-orange" />
                                                <i className="fa fa-star text-orange" />
                                                <i className="fa fa-star text-orange" />
                                                <i className="fa fa-star text-orange" />
                                                <i className="fa fa-star" />
                                            </div>
                                        </div>
                                        <p className="mb-0 font-12">Overall the quality or your support team’s efforts Rating.</p>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-striped table-vcenter mb-0">
                                            <tbody>
                                                <tr>
                                                    <td><strong>5.0</strong></td>
                                                    <td>
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                    </td>
                                                    <td className="text-right">432</td>
                                                    <td className="text-right">58%</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>4.0</strong></td>
                                                    <td>
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                    </td>
                                                    <td className="text-right">189</td>
                                                    <td className="text-right">42%</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>3.0</strong></td>
                                                    <td>
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                    </td>
                                                    <td className="text-right">125</td>
                                                    <td className="text-right">23%</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>2.0</strong></td>
                                                    <td>
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                    </td>
                                                    <td className="text-right">89</td>
                                                    <td className="text-right">18%</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>1.0</strong></td>
                                                    <td>
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                    </td>
                                                    <td className="text-right">18</td>
                                                    <td className="text-right">11%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="row clearfix">
                            <div className="col-12 col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Project Summary</h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped text-nowrap table-vcenter mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#ID</th>
                                                        <th>User  Name</th>
                                                        <th>Team</th>
                                                        {/* <th>Project</th> */}
                                                        <th>Order Cost</th>
                                                        <th>Payment</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>#AD1245</td>
                                                        <td>Sean Black</td>
                                                        <td>
                                                            <ul className="list-unstyled team-info sm margin-0 w150">
                                                                <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                                <li className="ml-2"><span>2+</span></li>
                                                            </ul>
                                                        </td>
                                                        <td>Angular Admin</td>
                                                        <td>$14,500</td>
                                                        <td>Done</td>
                                                        <td><span className="tag tag-success">Delivered</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>#DF1937</td>
                                                        <td>Sean Black</td>
                                                        <td>
                                                            <ul className="list-unstyled team-info sm margin-0 w150">
                                                                <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                                <li className="ml-2"><span>2+</span></li>
                                                            </ul>
                                                        </td>
                                                        <td>Angular Admin</td>
                                                        <td>$14,500</td>
                                                        <td>Pending</td>
                                                        <td><span className="tag tag-success">Delivered</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>#YU8585</td>
                                                        <td>Merri Diamond</td>
                                                        <td>
                                                            <ul className="list-unstyled team-info sm margin-0 w150">
                                                                <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                            </ul>
                                                        </td>
                                                        <td>One page html Admin</td>
                                                        <td>$500</td>
                                                        <td>Done</td>
                                                        <td><span className="tag tag-orange">Submit</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>#AD1245</td>
                                                        <td>Sean Black</td>
                                                        <td>
                                                            <ul className="list-unstyled team-info sm margin-0 w150">
                                                                <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                            </ul>
                                                        </td>
                                                        <td>Wordpress One page</td>
                                                        <td>$1,500</td>
                                                        <td>Done</td>
                                                        <td><span className="tag tag-success">Delivered</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>#GH8596</td>
                                                        <td>Allen Collins</td>
                                                        <td>
                                                            <ul className="list-unstyled team-info sm margin-0 w150">
                                                                <li><img src="Admin/images/xs/avatar1.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar2.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar3.jpg" alt="Avatar" /></li>
                                                                <li><img src="Admin/images/xs/avatar4.jpg" alt="Avatar" /></li>
                                                                <li className="ml-2"><span>2+</span></li>
                                                            </ul>
                                                        </td>
                                                        <td>VueJs Application</td>
                                                        <td>$9,500</td>
                                                        <td>Done</td>
                                                        <td><span className="tag tag-success">Delivered</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Helmet>
                {/* <script src="Admin/js/page/project-index.js"></script> */}
            </Helmet>


        </div>
    )
}

export default Dashboard