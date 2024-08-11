
import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'
import { NavLink,useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function Order_list() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login');
        }
        else {
            fetch();
        }
    }, []);

    useEffect(() => {
        fetch()

    }, []);

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/order list`);
        console.log(res.data);
        setData(res.data)
    }
    const deleteHandel = async (id)=>{
        const res =await axios.delete(`http://localhost:3000/order list/${id}`)
        console.log(res.data);
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
            <div className='page'>
                <div class="mt-2">
                    <div className="container-fluid">
                        <div className="content">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <h4 className="page-title">Manage Order</h4>
                                </div>
                                <div className="col-sm-8 col-9 text-right m-b-20">
                                    <NavLink to="/add_order" className="btn btn btn-dark btn-rounded float-right"><i className="fa fa-plus" /> Add Product</NavLink>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mt-5">
                                    <div className="table-responsive">
                                        <table className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th style={{color:'black',fontWeight:'700'}}>User name</th>
                                                    <th style={{color:'black',fontWeight:'700'}}>URL</th>
                                                    <th style={{color:'black',fontWeight:'700'}}>Email</th>
                                                    <th style={{color:'black',fontWeight:'700'}}>Category</th>
                                                    <th style={{color:'black',fontWeight:'700'}}>Price</th>
                                                    <th style={{color:'black',fontWeight:'700'}}>Size</th>
                                                    <th style={{color:'black',fontWeight:'700'}}>Pin Code</th>
                                                    <th style={{color:'black',fontWeight:'700'}}>Status</th>
                                                    <th style={{color:'black',fontWeight:'700'}} className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data && data.map(user => {
                                                    return (
                                                        <tr key={user}>
                                                            <td><img width={38} height={38} src={user.url} className="rounded-circle m-r-5" alt /></td>
                                                            <td>{user.username}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.Category}</td>
                                                            <td>{user.price}</td>
                                                            <td>{user.size}</td>
                                                            <td>{user.pincode}</td>
                                                            <td><span className="custom-badge status-green"></span>{user.status}</td>
                                                            <td className="text-right">
                                                                <PopupState variant="popover" popupId="demo-popup-menu">
                                                                    {(popupState) => (
                                                                        <React.Fragment>

                                                                            <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                            <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                                <MenuItem onClick={popupState.close}>Edit<i class="fa-solid fa-pen-to-square ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                                <MenuItem onClick={popupState.close}><button onClick={()=>deleteHandel(user.id)} style={{border:'none'}}>Delete<i class="fa-solid fa-trash ml-1" style={{ color: "#000000" }}></i></button></MenuItem>
                                                                            </Menu>
                                                                        </React.Fragment>
                                                                    )}
                                                                </PopupState>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                }
                                                
                                                {/* <tr>
                                                    <td>Mayure</td>
                                                    <td><img width={38} height={38} src="https://rukminim2.flixcart.com/image/612/612/kz1lle80/sweatshirt/j/5/f/xl-sl0029zh-black-slowloris-original-imagb547gzmbfhnh.jpeg?q=70" className="rounded-circle m-r-5" alt /> Denise Stevens</td>
                                                    <td>Mayure@gmail.com</td>
                                                    <td>black t-shirt</td>
                                                    <td>113 $</td>
                                                    <td>XL</td>
                                                    <td>300080</td>
                                                    <td><span className="custom-badge status-red">cancel</span></td>
                                                    <td className="text-right">
                                                        <PopupState variant="popover" popupId="demo-popup-menu">
                                                            {(popupState) => (
                                                                <React.Fragment>

                                                                    <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                    <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                    <MenuItem onClick={popupState.close}>Edit<i class="fa-solid fa-pen-to-square ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                        <MenuItem onClick={popupState.close}>Delete <i class="fa-solid fa-trash ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>maxi</td>
                                                    <td><img width={38} height={38} src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/w/t/l-hlsh013833-highlander-original-imagg9tes7xm24sm.jpeg?q=70" className="rounded-circle m-r-5" alt /> Denise Stevens</td>
                                                    <td>maxi@gmail.com</td>
                                                    <td> black Hoodies</td>
                                                    <td>123 $</td>
                                                    <td>XL</td>
                                                    <td>300708</td>
                                                    <td><span className="custom-badge status-green">Success</span></td>
                                                    <td className="text-right">
                                                        <PopupState variant="popover" popupId="demo-popup-menu">
                                                            {(popupState) => (
                                                                <React.Fragment>

                                                                    <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                    <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                    <MenuItem onClick={popupState.close}>Edit<i class="fa-solid fa-pen-to-square ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                        <MenuItem onClick={popupState.close}>Delete <i class="fa-solid fa-trash ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Dyane</td>
                                                    <td><img width={38} height={38} src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/n/j/t/s-frml-st2-vebnor-original-imagtyvbmwzuqeyp.jpeg?q=70" className="rounded-circle m-r-5" alt /> Denise Stevens</td>
                                                    <td>Dyane@gmail.com</td>
                                                    <td> black Hoodies</td>
                                                    <td>123 $</td>
                                                    <td>XL</td>
                                                    <td>306708</td>
                                                    <td><span className="custom-badge status-red">cancel</span></td>
                                                    <td className="text-right">
                                                        <PopupState variant="popover" popupId="demo-popup-menu">
                                                            {(popupState) => (
                                                                <React.Fragment>

                                                                    <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                    <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                    <MenuItem onClick={popupState.close}>Edit<i class="fa-solid fa-pen-to-square ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                        <MenuItem onClick={popupState.close}>Delete <i class="fa-solid fa-trash ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Roman</td>
                                                    <td><img width={38} height={38} src="https://rukminim2.flixcart.com/image/612/612/kfoapow0-0/shirt/a/h/x/xl-hlsh009443-highlander-original-imafw2ggzbzkyg6f.jpeg?q=70" className="rounded-circle m-r-5" alt /> Denise Stevens</td>
                                                    <td>Roman@gmail.com</td>
                                                    <td> black Hoodies</td>
                                                    <td>123 $</td>
                                                    <td>XL</td>
                                                    <td>306708</td>
                                                    <td><span className="custom-badge status-green">Success</span></td>
                                                    <td className="text-right">
                                                        <PopupState variant="popover" popupId="demo-popup-menu">
                                                            {(popupState) => (
                                                                <React.Fragment>

                                                                    <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                    <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                    <MenuItem onClick={popupState.close}>Edit<i class="fa-solid fa-pen-to-square ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                        <MenuItem onClick={popupState.close}>Delete <i class="fa-solid fa-trash ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Huily</td>
                                                    <td><img width={38} height={38} src="https://rukminim2.flixcart.com/image/416/416/xif0q/shopsy-shirt/k/x/a/l-spy-schatai91-indiclub-original-imagvp8dvhaqqpea.jpeg?q=70&crop=false" className="rounded-circle m-r-5" alt /> Denise Stevens</td>
                                                    <td>Huily@gmail.com</td>
                                                    <td> black Hoodies</td>
                                                    <td>123 $</td>
                                                    <td>XL</td>
                                                    <td>306708</td>
                                                    <td><span className="custom-badge status-green">Success</span></td>
                                                    <td className="text-right">
                                                        <PopupState variant="popover" popupId="demo-popup-menu">
                                                            {(popupState) => (
                                                                <React.Fragment>

                                                                    <i variant="contained" {...bindTrigger(popupState)} class="fa-solid fa-ellipsis-vertical me-2" style={{ color: "#000000", cursor: 'pointer' }}></i>

                                                                    <Menu {...bindMenu(popupState)} style={{ marginLeft: "-30px", cursor: 'pointer' }}>
                                                                    <MenuItem onClick={popupState.close}>Edit<i class="fa-solid fa-pen-to-square ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                        <MenuItem onClick={popupState.close}>Delete <i class="fa-solid fa-trash ml-1" style={{ color: "#000000" }}></i></MenuItem>
                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>
                                                    </td>
                                                </tr> */}
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



export default Order_list