import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Admin_header from '../Componets/Admin_header'
import { useNavigate } from 'react-router-dom';


function Calender() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login');
        }
    }, []);
    return (
        <div>
            <Helmet>
                {/* <!-- Bootstrap Core and vandor --> */}
                <link rel="stylesheet" href="Admin/plugins/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="Admin/plugins/fullcalendar/fullcalendar.min.css" />

                {/* <!-- Core css --> */}
                <link rel="stylesheet" href="Admin/css/main.css" />
                <link rel="stylesheet" href="Admin/css/theme1.css" />
            </Helmet>
            <div>
                
                <div id="main_content">
                    <Admin_header />
                    <div className="page">

                        <div className="section-body mt-3">
                            <div className="container-fluid">
                                <div className="row clearfix row-deck">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="card">
                                            <div className="card-header bline">
                                                <h3 className="card-title">Sara Hopkins</h3>
                                                <div className="card-options">
                                                    <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize" /></a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div id="calendar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-body">
                            <footer className="footer">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <a href="templateshub.net">Templates Hub</a>
                                        </div>
                                        <div className="col-md-6 col-sm-12 text-md-right">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item"><a href="doc/index.html">Documentation</a></li>
                                                <li className="list-inline-item"><a href="javascript:void(0)">FAQ</a></li>
                                                <li className="list-inline-item"><a href="javascript:void(0)" className="btn btn-outline-primary btn-sm">Buy Now</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
                {/* Add New Event popup */}
                <div className="modal fade" id="addNewEvent" aria-hidden="true" style={{ display: 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title"><strong>Add</strong> an event</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="control-label">Event Name</label>
                                            <input className="form-control" placeholder="Enter name" type="text" name="category-name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label">Choose Event Color</label>
                                            <select className="form-control" data-placeholder="Choose a color..." name="category-color">
                                                <option value="success">Success</option>
                                                <option value="danger">Danger</option>
                                                <option value="info">Info</option>
                                                <option value="primary">Primary</option>
                                                <option value="warning">Warning</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success save-event" data-dismiss="modal">Save</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add Direct Event popup */}
                <div className="modal fade" id="addDirectEvent" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Direct Event</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Event Name</label>
                                            <input className="form-control" name="event-name" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Event Type</label>
                                            <select name="event-bg" className="form-control">
                                                <option value="success">Success</option>
                                                <option value="danger">Danger</option>
                                                <option value="info">Info</option>
                                                <option value="primary">Primary</option>
                                                <option value="warning">Warning</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn save-btn btn-success">Save</button>
                                <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Event Edit Modal popup */}
                <div className="modal fade" id="eventEditModal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Event</h4>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Event Name</label>
                                            <input className="form-control" name="event-name" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Event Type</label>
                                            <select name="event-bg" className="form-control">
                                                <option value="success">Success</option>
                                                <option value="danger">Danger</option>
                                                <option value="info">Info</option>
                                                <option value="primary">Primary</option>
                                                <option value="warning">Warning</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn mr-auto delete-btn btn-danger">Delete</button>
                                <button className="btn save-btn btn-success">Save</button>
                                <button className="btn btn-default" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <script src="Admin/bundles/lib.vendor.bundle.js"></script>
                <script src="Admin/bundles/fullcalendar.bundle.js"></script>
                <script src="Admin/js/page/calendar.js"></script>
                <script src="Admin/js/core.js"></script>
            </Helmet>

        </div>
    )
}

export default Calender