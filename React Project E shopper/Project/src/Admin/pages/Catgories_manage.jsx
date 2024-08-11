
import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'
import { NavLink, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { toast } from 'react-toastify'

function Catgories_manage() {

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

    const [search,setsearch] = useState('')
    console.log(search)

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data)
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`)
        console.log(res.data);
        toast.success('delete successfuly')
        fetch()
    }

    const [value, setFormvalue] = useState({
        id: "",
        Category: "",
        url: ""
    })

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const onChangehandel = (e) => {
        setFormvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value);

    }
    function validation() {
        var ans = true;

        if (value.Category == "") {

            toast.error('Category field is required')
            ans = false;
            return false;
        }
        if (value.url == "") {

            toast.error('url field is required')
            ans = false;
            return false;
        }
        return true;
    }

    const Submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const result = await axios.patch(`http://localhost:3000/categories/${value.id}`, value)
            console.log(result); // status = 200 edit
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setFormvalue({ ...value, id: "", Category: "", url: "" })
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
            <div className='page'>
                <div>
                    <div className="container-fluid">
                        <div className="content">
                            <div className="row">

                                <div className="col-sm-4 col-3">
                                    <h4 className="page-title"></h4>
                                </div>
                                <div className="col-sm-8 col-9 text-right m-b-20 mt-2">
                                    <NavLink to="/add_categories" className="btn btn btn-primary btn-rounded float-right"><i className="fa fa-plus" /> Add Product</NavLink>
                                </div>
                                <div className="card-body">
                                    <div className="d-md-flex justify-content-between mb-2">
                                        <ul className="nav nav-tabs b-none">
                                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#list"><i className="fa fa-list-ul" />Manage  Categories</a></li>

                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="input-group mb-1">
                                                <input type="text" onChange={(e)=>setsearch(e.target.value)} className="form-control" placeholder="Categories Name" />
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
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>URL</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>ID</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }}>Category</th>
                                                    <th style={{ color: 'black', fontWeight: '700' }} className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                {data && data.filter((value)=>{
                                                    return search.toLowerCase() === ''? value : value.Category.toLowerCase().includes(search)
                                                }).map(user => {
                                                    return (
                                                        <tr key={user}>
                                                            <td><img width={48} height={48} src={user.url} className="rounded-circle m-r-5" alt /></td>
                                                            <td>{user.id}</td>
                                                            <td>{user.Category}</td>
                                                            <td className="text-right">
                                                               

                                                                <PopupState variant="popover" popupId="demo-popup-menu">
                                                                    {(popupState) => (
                                                                        <React.Fragment>

                                                                            <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                            <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                                <MenuItem onClick={popupState.close}> <button className='p-2 me-2 rounded-2' style={{ border: "none", backgroundColor: " rgb(255, 0, 0)" }} onClick={() => editdata(user.id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square fa-md" style={{ color: "white" }}></i></button></MenuItem>
                                                                                <MenuItem onClick={popupState.close}><button className='p-2 rounded-2' style={{ border: "none", backgroundColor: "rgb(20, 20, 20)" }} onClick={() => deleteHandel(user.id)} ><i class="fa-solid fa-trash fa-md ml-1" style={{ color: "white" }}></i></button></MenuItem>
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
                                                                                <form action="" method='post' onSubmit={Submithandel} onChange={onChangehandel} className='text-left'>
                                                                                    <div className="form-group">
                                                                                        <label className="form-label">ID</label>
                                                                                        <input value={value.id} name='id' type="text" className="form-control" placeholder="Enter id" disabled />
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="form-label">Category Name</label>
                                                                                        <input value={value.Category} name='Category' type="text" className="form-control" placeholder="Enter Category" />
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="form-label">URL</label>
                                                                                        <input value={value.url} name='url' type="url" className="form-control" placeholder="Enter email" />
                                                                                    </div>
                                                                                    <div class="modal-footer">
                                                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                     x                   <button class="btn btn-primary" >Save changes</button>
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

                        <div id="delete_appointment" className="modal fade delete-modal" role="dialog">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body text-center">
                                        <img src="Admin/img/sent.png" alt width={50} height={46} />
                                        <h3>Are you sure want to delete this Appointment?</h3>
                                        <div className="m-t-20"> <a href="#" className="btn btn-white" data-dismiss="modal">Close</a>
                                            <button type="submit" className="btn btn-danger">Delete</button>
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

export default Catgories_manage




