import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';



function Admin_employee() {

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
    }, [])

    const [data, setData] = useState([])

    const fetch = async () => {
        const ress = await axios.get(`http://localhost:3000/employee`)
        console.log(ress.data);
        setData(ress.data)
    }
    const deleteHandel = async (id) => {
        const ress = await axios.delete(`http://localhost:3000/employee/${id}`)
        toast.success('data delete sucessfuly')
        console.log(ress.data)
        fetch()
    }



    const [fromdata, setFormvalue] = useState({

        id: "",
        firstname: "",
        joiningdate: "",
        Department: "",
        Position: "",
        Phone: "",
        email: "",
        url: "",

    })

    const editdata = async (id) => {
        const ress = await axios.get(`http://localhost:3000/employee/${id}`)
        console.log(ress.data)
        setFormvalue(ress.data)

    }


    const onChangehandel = (e) => {

        setFormvalue({ ...fromdata, [e.target.name]: e.target.value })
        console.log(fromdata)
    }

    function validation() {

        var anss = true;
        if (fromdata.firstname == "") {
            toast.error("Name is Required")
            anss = false
            return false;
        }
        if (fromdata.joiningdate == "") {
            toast.error("joining date is Required")
            anss = false
            return false;
        }
        if (fromdata.Department == "") {
            toast.error("Department is Required")
            anss = false
            return false;
        }
        if (fromdata.Position == "") {
            toast.error("Position is Required")
            anss = false
            return false;
        }
        if (fromdata.Phone == "") {
            toast.error("Phone is Required")
            anss = false
            return false;
        }
        if (fromdata.email == "") {
            toast.error("email is Required")
            anss = false
            return false;
        } if (fromdata.url == "") {
            toast.error("url is Required")
            anss = false
            return false;
        }

        return true;
    }


    const submiHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const rest = await axios.patch(`http://localhost:3000/employee/${fromdata.id}`, fromdata);
            console.log(rest);
            if (rest.status == 200) {
                toast.success("Data Update success!!");
                setFormvalue({ ...fromdata, id: "", firstname: "", joiningdate: "", Department: "", Position: "", Phone: "", email: "", url: "" })
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
                        <div className="row">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title"></h4>
                            </div>
                            <div className="col-sm-8 col-9 text-right d-flex justify-content-end m-b-20 ">
                                <NavLink to="/add_employee" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus" />Add Employee</NavLink>
                            </div>
                            <div className="card-body">
                                <div className="d-md-flex justify-content-between mb-2">
                                    <ul className="nav nav-tabs b-none">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#list"><i className="fa fa-list-ul" />Manage  Employee</a></li>

                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control" placeholder="Categories Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-4 col-sm-6">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control" placeholder="Search id" />
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
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="tab-content">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>URL</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>ID</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>Username</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>Email</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>Phone</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>Join Date</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>Department</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>Position</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }} className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {data && data.map(user => {
                                                    return (
                                                        <tr key={user}>
                                                            <td><img width={41} height={45} src={user.url} className="rounded-circle m-r-5" alt /></td>
                                                            <td>{user.id}</td>
                                                            <td>{user.firstname}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.Phone}</td>
                                                            <td>{user.joiningdate}</td>
                                                            <td>{user.Department}</td>
                                                            <td>{user.Position}</td>

                                                            <td className="text-right">



                                                                <PopupState variant="popover" popupId="demo-popup-menu">
                                                                    {(popupState) => (
                                                                        <React.Fragment>

                                                                            <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                            <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                                <MenuItem onClick={popupState.close}><button className='p-2 me-2 rounded-2' style={{ border: "none", backgroundColor: " rgb(255, 0, 0)" }} onClick={() => editdata(user.id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square fa-md" style={{ color: "white" }}></i></button></MenuItem>
                                                                                <MenuItem onClick={popupState.close}><button className='p-2 rounded-2' style={{ border: "none", backgroundColor: "rgb(20, 20, 20)" }} onClick={() => deleteHandel(user.id)} ><i class="fa-solid fa-trash fa-md ml-1" style={{ color: "white" }}></i></button></MenuItem>
                                                                            </Menu>
                                                                        </React.Fragment>
                                                                    )}
                                                                </PopupState>

                                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                            <div class="modal-header">
                                                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                            </div>
                                                                            <div class="modal-body text-left">
                                                                                <form action="" method='post' onSubmit={submiHandel} onChange={onChangehandel} className='text-left'>
                                                                                    <div className="row clearfix">
                                                                                        <div className="col-md-6 col-sm-12">
                                                                                            <div className="form-group">
                                                                                                <label>First Name</label>
                                                                                                <input value={fromdata.firstname} name='firstname' type="text" className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6 col-sm-12">
                                                                                            <div className="form-group">
                                                                                                <label>joining date</label>
                                                                                                <input value={fromdata.joiningdate} name='joiningdate' type='date' className="form-control" placeholder="Date of Birth" />
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="col-md-6 col-sm-12">
                                                                                            <div className="form-group">
                                                                                                <label>Department</label>
                                                                                                <input type="text" value={fromdata.Department} name='Department' className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6 col-sm-12">
                                                                                            <div className="form-group">
                                                                                                <label>Position</label>
                                                                                                <input type="text" value={fromdata.Position} name='Position' className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6 col-sm-12">
                                                                                            <div className="form-group">
                                                                                                <label>Phone</label>
                                                                                                <input type="text" value={fromdata.Phone} name='Phone' className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6 col-sm-12">
                                                                                            <div className="form-group">
                                                                                                <label>Enter Your Email</label>
                                                                                                <input value={fromdata.email} name='email' type="text" className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-12 col-sm-12">
                                                                                            <div className="form-group">
                                                                                                <label>Website URL</label>
                                                                                                <input value={fromdata.url} name='url' type="text" className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="modal-footer">
                                                                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                                            <button class="btn btn-primary">Save changes</button>
                                                                                        </div>
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
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Admin_employee

