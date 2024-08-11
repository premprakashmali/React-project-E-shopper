
import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'

import { Helmet } from 'react-helmet'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import axios from 'axios'
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';


function Clients() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login')
        }
        else {
            fetch()
        }
    }, [])

    useEffect(() => {
        fetch()

    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Customer`);
        console.log(res.data);
        setData(res.data)
    }
    const DeleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Customer/${id}`)
        console.log(res.data);
        toast.error('data delete succesfuly')
        fetch()
    }

    const editdata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Customer/${id}`)
        console.log(res.data);
        toast.error('data Update succesfuly')
        fetch()
    }

    const [formdata, setFormvalue] = useState({

        id: "",
        username: "",
        email: "",
        url: "",
        mobile: "",
        joindate: "",
        Role: "",
        status:"",
        Action: "",

    })


    function validation() {
        var val = true
        if (formdata.username == "") {
            toast.error('User name Required')
            val = true
            return false
        }
        if (formdata.email == "") {
            toast.error('email is Required')
            val = true
            return false
        }
        if (formdata.mobile == "") {
            toast.error('mobile is Required')
            val = true
            return false
        }
        if (formdata.joindate == "") {
            toast.error('joindate is Required')
            val = true
            return false
        }

        if (formdata.Role == "") {
            toast.error('Role is Required')
            val = true
            return false
        }
        if (formdata.status == "") {
            toast.error('status is Required')
            val = true
            return false
        }
        return true;
    }

    const onChangehandel = (e) => {

        setFormvalue({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(formdata)
    }
    const Submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/Customer`, formdata)
            console.log(res)

            if (res.status == 201) {
                toast.success("Customer Add Succesful");
                setFormvalue({ ...formdata, id: "", username: "", email: "", url: "", mobile: "", joindate: "", Role: "",status:"" })
            }

        }


    }

    const onChanghan = (e) => {

        setFormvalue({ ...formdata, [e.target.name]: e.target.value })
        console.log(formdata)
    }
    const submit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/Customer`, formdata)
            console.log(res)

            if (res.status == 201) {
                toast.success("Customer Add Succesful");
                setFormvalue({ ...formdata, id: "", username: "", email: "", url: "", mobile: "", joindate: "", Role: "",status:"" })
            }

        }


    }








    return (
        <div>
            <Helmet>
                {/* <link rel="stylesheet" type="text/css" href="Admin/css/style.css" /> */}
                {/* <link rel="stylesheet" type="text/css" href="Admin/css/select2.min.css" /> */}
                <link rel="stylesheet" type="text/css" href="Admin/css/font-awesome.min.css" />
            </Helmet>


            <Admin_header />
            <div className="page">
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-md-flex justify-content-between mb-2">
                                            <ul className="nav nav-tabs b-none">
                                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#list"><i className="fa fa-list-ul" /> Clients List</a></li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#addnew"><i className="fa fa-plus" /> Add New</a></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input type="text" className="form-control" placeholder="Clinet Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input type="text" className="form-control" placeholder="Order" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <a href="javascript:void(0);" className="btn btn-primary btn-block mb-1" title>Search</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="list" role="tabpanel">
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Url</th>
                                            <th style={{ color: 'black', fontWeight: "700", }}>User name</th>
                                            <th style={{ color: 'black', fontWeight: "700", }}>Employee ID</th>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Email</th>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Mobile</th>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Join Date</th>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Role</th>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Status</th>

                                            <th style={{ color: 'black', fontWeight: "700" }} className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map(user => {
                                            return (
                                                <tr key={user}>
                                                    <td><img width={38} height={38} src={user.url} className="rounded-circle m-r-5" alt /> </td>
                                                    <td >{user.username}</td>
                                                    <td >{user.id}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.mobile}</td>
                                                    <td>{user.joindate}</td>
                                                    <td>{user.Role}</td>
                                                    <td>{user.status}</td>
                                                    {/* <td><span className="custom-badge status-green"></span>{user.Action}</td> */}
                                                    <td className="text-right">
                                                        <PopupState variant="popover" popupId="demo-popup-menu">
                                                            {(popupState) => (
                                                                <React.Fragment>

                                                                    <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                    <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                        <MenuItem onClick={popupState.close}> <button className='p-2 me-2 rounded-2' style={{ border: "none", backgroundColor: " rgb(255, 0, 0)" }} onClick={() => editdata(user.id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square fa-md" style={{ color: "white" }}></i></button></MenuItem>
                                                                        <MenuItem onClick={popupState.close}><button className='p-2 rounded-2' style={{ border: "none", backgroundColor: "rgb(20, 20, 20)" }} onClick={() => DeleteHandel(user.id)} ><i class="fa-solid fa-trash fa-md ml-1" style={{ color: "white" }}></i></button></MenuItem>
                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>

                                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body text-left">
                                                                        <form action="" method='post' onChange={onChanghan} onSubmit={submit} className='text-left'>
                                                                            <div className="form-group">
                                                                                <label className="form-label">ID</label>
                                                                                <input value={formdata.id} name='id' type="text" className="form-control" placeholder="Enter id" disabled />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label className="form-label">Category Name</label>
                                                                                <input value={formdata.Category} name='Category' type="text" className="form-control" placeholder="Enter Category" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label className="form-label">URL</label>
                                                                                <input value={formdata.url} name='url' type="url" className="form-control" placeholder="Enter email" />
                                                                            </div>
                                                                            <div class="modal-footer">
                                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                <button class="btn btn-primary" >Save changes</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        }


                                    </tbody>
                                </table>

                            </div>
                            <div className="tab-pane fade" id="addnew" role="tabpanel">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">Add Client</h3>
                                                <div className="card-options ">

                                                </div>
                                            </div>
                                            <form role='form' action='' onSubmit={Submithandel} onChange={onChangehandel}>
                                                <div className="row mt-5 d-flex justify-content-center">
                                                    <div className="col-sm-5">
                                                        <div className="form-group">
                                                            <label>Username <span className="text-danger">*</span></label>
                                                            <input value={formdata.username} name='username' className="form-control" type="text" />
                                                        </div>
                                                    </div>


                                                    <div className="col-sm-5">
                                                        <div className="form-group">
                                                            <label>Email <span className="text-danger">*</span></label>
                                                            <input value={formdata.email} name='email' className="form-control" type="email" />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input className="form-control" type="password" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Confirm Password</label>
                                                <input className="form-control" type="password" />
                                            </div>
                                        </div> */}

                                                    <div className="col-sm-5">
                                                        <div className="form-group">
                                                            <label>Joining Date <span className="text-danger">*</span></label>
                                                            <div className="cal-icon">
                                                                <input value={formdata.joindate} name='joindate' className="form-control datetimepicker" type="date" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-sm-5">
                                                        <div className="form-group">
                                                            <label>Employee ID <span className="text-danger">*</span></label>
                                                            <input value={formdata.id} name='id' type="text" className="form-control" disabled />
                                                        </div>
                                                    </div> */}

                                                    <div className="col-sm-5">
                                                        <div className="form-group">
                                                            <label>Mobile </label>
                                                            <input value={formdata.mobile} name='mobile' className="form-control" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5 d-flex mt-4">
                                                        <div className="form-group">
                                                            <label>ROLE</label>
                                                            <select value={formdata.Role} name='Role' className="select ms-2">
                                                                <option>Manager</option>
                                                                <option> Hr Manager</option>
                                                                <option>Sales men</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group ms-5">
                                                            <label className="display-block" value={formdata.status} name='status'>Status</label>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input"  type="radio" name="status" id="employee_active" defaultValue="Inactive" defaultChecked />
                                                                <label className="form-check-label" htmlFor="employee_active">
                                                                    Active
                                                                </label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="status" id="employee_inactive" defaultValue="Active" />
                                                                <label className="form-check-label" htmlFor="employee_inactive">
                                                                    Inactive
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-5">
                                                        <div className="form-group">
                                                            <label>URL</label>
                                                            <input value={formdata.url} name='url' className="form-control" type="url" />
                                                        </div>
                                                    </div>
                                                  



                                                </div>

                                                <div className="m-t-20 text-center">
                                                    <button className="btn btn-primary submit-btn">Add Customer</button>
                                                </div>
                                            </form>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>





    )
}

export default Clients


