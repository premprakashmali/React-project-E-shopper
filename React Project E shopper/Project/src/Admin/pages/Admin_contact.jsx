


import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'
import { NavLink,useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify'


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import axios from 'axios';

function Catgories_women() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login')
        }
        else{
            fetch()
        }
    },[])

  

    useEffect(() => {
        fetch()

    }, [])

    const [search,setsearch] = useState('')

    const [data, setData] = useState([])

    const fetch = async () => {

        const ress = await axios.get(`http://localhost:3000/contact`)
        console.log(ress.data);
        setData(ress.data)

    }
    const deleteHandel = async (id) => {
        const ress = await axios.delete(`http://localhost:3000/contact/${id}`)
        console.log(ress.data)
        fetch()
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
                                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#list"><i className="fa fa-list-ul" /> Manage Contact</a></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input type="text" onChange={(e)=>setsearch(e.target.value)} className="form-control" placeholder="Clinet Name" />
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

                            <table className="table table-striped custom-table">
                                            <thead>
                                                <tr>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>URL</th>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>User name</th>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>Email</th>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>Subject</th>
                                                    <th style={{ color: 'black', fontWeight: "700" }}>Message</th>

                                                    <th style={{ color: 'black', fontWeight: "700" }} className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data.filter((value)=>{
                                                    return search.toLowerCase() ===''? value : value.name.toLowerCase().includes(search)
                                                }).map(user => {
                                                    return (
                                                        <tr>
                                                            <td><img width={38} height={38} src={user.img} className="rounded-circle m-r-5" alt /></td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.subject}</td>
                                                            <td>{user.message}</td>
                                                       
                                                            <td className="text-right">
                                                                <PopupState variant="popover" popupId="demo-popup-menu">
                                                                    {(popupState) => (
                                                                        <React.Fragment>

                                                                            <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                            <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                                <MenuItem onClick={popupState.close}>Edit<i class="fa-solid fa-pen-to-square ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                                <MenuItem onClick={popupState.close}><button onClick={() => deleteHandel(user.id)} style={{ border: 'none' }}>Delete<i class="fa-solid fa-trash ml-1" style={{ color: "#000000" }}></i></button></MenuItem>
                                                                            </Menu>
                                                                        </React.Fragment>
                                                                    )}
                                                                </PopupState>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}

                                                
                                            </tbody>
                                        </table>
                               

                            </div>

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
export default Catgories_women


