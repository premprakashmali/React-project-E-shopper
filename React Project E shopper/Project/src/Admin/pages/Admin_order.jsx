import React, { useEffect } from 'react'
import Admin_header from '../Componets/Admin_header'
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';




function Admin_order() {

    const redirect = useNavigate();

    useEffect(()=>{
        if(!(localStorage.getItem('uid_1'))){
            redirect('/admin_login')
        }
       
    },[])




    return (
        <div>
            <Helmet>
                {/* <!-- Bootstrap Core and vandor --> */}
                <link rel="stylesheet" href="Admin/plugins/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="Admin/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css" />
                {/* <link rel="stylesheet" href="Admin/plugins/nestable/jquery-nestable.css" /> */}

                {/* <!-- Core css --> */}
                <link rel="stylesheet" href="Admin/css/main.css" />
                <link rel="stylesheet" href="Admin/css/theme1.css" />
            </Helmet>
            <div id="main_content">

                <Admin_header />
                <div className="page">
                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-md-flex justify-content-between align-items-center">
                                        <ul className="nav nav-tabs page-header-tab">
                                            <li className="nav-item"><a className="nav-link active" id="TaskBoard-tab" data-toggle="tab" href="#TaskBoard-list">List View</a></li>
                                            <li className="nav-item"><a className="nav-link" id="TaskBoard-tab" data-toggle="tab" href="#TaskBoard-grid">Grid View</a></li>
                                        </ul>
                                        <div className="header-action d-flex">
                                            <div className="input-group mr-2">
                                                <input type="text" className="form-control" placeholder="Search..." />
                                            </div>
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addtask">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix mt-2">
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h6>Planned</h6>
                                            <input type="text" className="knob" defaultValue={23} data-width={90} data-height={90} data-thickness="0.1" data-fgcolor="#6e7687" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h6>Order in progress</h6>
                                            <input type="text" className="knob" defaultValue={43} data-width={90} data-height={90} data-thickness="0.1" data-fgcolor="#6e7687" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h6>Completed</h6>
                                            <input type="text" className="knob" defaultValue={83} data-width={90} data-height={90} data-thickness="0.1" data-fgcolor="#6e7687" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <h6>In Completed</h6>
                                            <input type="text" className="knob" defaultValue={12} data-width={90} data-height={90} data-thickness="0.1" data-fgcolor="#6e7687" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-body">
                        <div className="container-fluid">
                            <div className="tab-content taskboard">
                                <div className="tab-pane fade show active" id="TaskBoard-list" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="table-responsive">
                                                <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th>#</th>
                                                            <th>Task</th>
                                                            <th>Team</th>
                                                            <th>Duration</th>
                                                            <th>Action</th>
                                                            <th className="w200" />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>01</td>
                                                            <td>
                                                                <h6 className="mb-0">New code Update on github</h6>
                                                                <span>It is a long established fact that a reader will be distracted...</span>
                                                            </td>
                                                            <td>
                                                                <ul className="list-unstyled team-info mb-0">
                                                                    <li><img src="Admin/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <div className="text-info">Start: 3 Jun 2019</div>
                                                                <div className="text-pink">End: 15 Jun 2019</div>
                                                            </td>
                                                            <td>
                                                                <span className="tag tag-blue">Planned</span>
                                                            </td>
                                                            <td>
                                                                <div className="clearfix">
                                                                    <div className="float-left"><strong>0%</strong></div>
                                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-azure" role="progressbar" style={{ width: '0%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>02</td>
                                                            <td>
                                                                <h6 className="mb-0">Design Events</h6>
                                                                <span>It is a long established fact that a reader will be distracted...</span>
                                                            </td>
                                                            <td>
                                                                <ul className="list-unstyled team-info mb-0">
                                                                    <li><img src="Admin/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <div className="text-info">Start: 02 Jun 2019</div>
                                                                <div className="text-pink">End: 08 Jun 2019</div>
                                                            </td>
                                                            <td>
                                                                <span className="tag tag-green">Completed</span>
                                                            </td>
                                                            <td>
                                                                <div className="clearfix">
                                                                    <div className="float-left"><strong>100%</strong></div>
                                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-green" role="progressbar" style={{ width: '100%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>03</td>
                                                            <td>
                                                                <h6 className="mb-0">Feed Details on Dribbble</h6>
                                                                <span>The point of using Lorem Ipsum is that...</span>
                                                            </td>
                                                            <td>
                                                                <ul className="list-unstyled team-info mb-0">
                                                                    <li><img src="Admin/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <div className="text-info">Start: 3 Jun 2019</div>
                                                                <div className="text-pink">End: 15 Jun 2019</div>
                                                            </td>
                                                            <td>
                                                                <span className="tag tag-orange">In progress</span>
                                                            </td>
                                                            <td>
                                                                <div className="clearfix">
                                                                    <div className="float-left"><strong>35%</strong></div>
                                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>04</td>
                                                            <td>
                                                                <h6 className="mb-0">New code Update on github</h6>
                                                                <span>It is a long established fact that a reader will be distracted...</span>
                                                            </td>
                                                            <td>
                                                                <ul className="list-unstyled team-info mb-0">
                                                                    <li><img src="Admin/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <div className="text-info">Start: 13 Jun 2019</div>
                                                                <div className="text-pink">End: 23 Jun 2019</div>
                                                            </td>
                                                            <td>
                                                                <span className="tag tag-orange">In progress</span>
                                                            </td>
                                                            <td>
                                                                <div className="clearfix">
                                                                    <div className="float-left"><strong>75%</strong></div>
                                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-green" role="progressbar" style={{ width: '75%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>05</td>
                                                            <td>
                                                                <h6 className="mb-0">New code Update on github</h6>
                                                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                                                            </td>
                                                            <td>
                                                                <ul className="list-unstyled team-info mb-0">
                                                                    <li><img src="Admin/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <div className="text-info">Start: 8 Jun 2019</div>
                                                                <div className="text-pink">End: 15 Jun 2019</div>
                                                            </td>
                                                            <td>
                                                                <span className="tag tag-orange">In progress</span>
                                                            </td>
                                                            <td>
                                                                <div className="clearfix">
                                                                    <div className="float-left"><strong>35%</strong></div>
                                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>06</td>
                                                            <td>
                                                                <h6 className="mb-0">Angular App Design bug</h6>
                                                                <span>There are many variations of passages of Lorem Ipsum available...</span>
                                                            </td>
                                                            <td>
                                                                <ul className="list-unstyled team-info mb-0">
                                                                    <li><img src="Admin/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    <li><img src="Admin/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <div className="text-info">Start: 3 Jun 2019</div>
                                                                <div className="text-pink">End: 15 Jun 2019</div>
                                                            </td>
                                                            <td>
                                                                <span className="tag tag-orange">Planned</span>
                                                            </td>
                                                            <td>
                                                                <div className="clearfix">
                                                                    <div className="float-left"><strong>35%</strong></div>
                                                                    <div className="float-right"><small className="text-muted">Progress</small></div>
                                                                </div>
                                                                <div className="progress progress-xs">
                                                                    <div className="progress-bar bg-azure" role="progressbar" style={{ width: '35%' }} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="TaskBoard-grid" role="tabpanel">
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-12">
                                            <div className="card planned_task">
                                                <div className="card-header">
                                                    <h3 className="card-title">Planned</h3>
                                                    <div className="card-options">
                                                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                                        <div className="item-action dropdown ml-2">
                                                            <a href="javascript:void(0)" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
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
                                                    <div className="dd" data-plugin="nestable">
                                                        <ol className="dd-list">
                                                            <li className="dd-item" data-id={1}>
                                                                <div className="dd-handle">
                                                                    <h6>Dashbaord</h6>
                                                                    <span className="time"><span className="text-primary">Start: 5 Aug</span> to <span className="text-danger">Complete: 15 Aug</span></span>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                    <ul className="list-unstyled team-info">
                                                                        <li><img src="Admin/images/xs/avatar1.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="Admin/images/xs/avatar2.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="Admin/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={2}>
                                                                <div className="dd-handle">
                                                                    <h6>New project</h6>
                                                                    <span className="time"><span className="text-primary">Start: 6 Aug</span> to <span className="text-danger">Complete: 28 Aug</span></span>
                                                                    <p>It is a long established fact that a reader will be distracted.</p>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={3}>
                                                                <div className="dd-handle">
                                                                    <h6>Feed Details</h6>
                                                                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <div className="card progress_task">
                                                <div className="card-header">
                                                    <h3 className="card-title">In progress</h3>
                                                    <div className="card-options">
                                                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                                        <div className="item-action dropdown ml-2">
                                                            <a href="javascript:void(0)" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
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
                                                    <div className="dd" data-plugin="nestable">
                                                        <ol className="dd-list">
                                                            <li className="dd-item" data-id={1}>
                                                                <div className="dd-handle">
                                                                    <h6>New Code Update</h6>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={2}>
                                                                <div className="dd-handle">
                                                                    <h6>Meeting</h6>
                                                                    <span className="time"><span className="text-primary">Start: 5 Aug</span> to <span className="text-danger">Complete: 11 Aug</span></span>
                                                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                                                                    <ul className="list-unstyled team-info">
                                                                        <li><img src="Admin/images/xs/avatar7.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="Admin/images/xs/avatar9.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={2}>
                                                                <div className="dd-handle">
                                                                    <h6>New project</h6>
                                                                    <p>It is a long established fact that a reader will be distracted.</p>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={3}>
                                                                <div className="dd-handle">
                                                                    <h6>Feed Details</h6>
                                                                    <p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12">
                                            <div className="card completed_task">
                                                <div className="card-header">
                                                    <h3 className="card-title">Completed</h3>
                                                    <div className="card-options">
                                                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up" /></a>
                                                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x" /></a>
                                                        <div className="item-action dropdown ml-2">
                                                            <a href="javascript:void(0)" data-toggle="dropdown"><i className="fe fe-more-vertical" /></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
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
                                                    <div className="dd" data-plugin="nestable">
                                                        <ol className="dd-list">
                                                            <li className="dd-item" data-id={1}>
                                                                <div className="dd-handle">
                                                                    <h6>Job title</h6>
                                                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                                    <ul className="list-unstyled team-info">
                                                                        <li><img src="Admin/images/xs/avatar4.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="Admin/images/xs/avatar5.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="Admin/images/xs/avatar6.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                        <li><img src="Admin/images/xs/avatar8.jpg" data-toggle="tooltip" data-placement="top" title="Avatar" alt="Avatar" /></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={2}>
                                                                <div className="dd-handle">
                                                                    <h6>Event Done</h6>
                                                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                                                                </div>
                                                            </li>
                                                            <li className="dd-item" data-id={1}>
                                                                <div className="dd-handle">
                                                                    <h6>New Code Update</h6>
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Helmet>
                <script src="Admin/bundles/lib.vendor.bundle.js"></script>

                <script src="Admin/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
                <script src="Admin/bundles/knobjs.bundle.js"></script>
                <script src="Admin/bundles/nestable.bundle.js"></script>

                <script src="Admin/js/core.js"></script>
                <script src="Admin/js/page/sortable-nestable.js"></script>
                <script src="Admin/js/chart/knobjs.js"></script>
            </Helmet>

        </div>
    )
}

export default Admin_order