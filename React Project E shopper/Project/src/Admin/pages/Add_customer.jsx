import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'
import { Helmet } from 'react-helmet'




import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




function Add_customer() {
  
    const redirect = useNavigate();
    useEffect(()=>{
        if(!(localStorage.getItem('uid'))){
            redirect('/admin_login')
        }
    })

    const [formdata,setFormvalue] = useState({

        username:"",
        employeeid:"",
        email:"",
        url:"",
        mobile:"",
        joindate:"",
        Role:"",
        Action:"",
        id:""
    })

    const onChangehandel = (e)=>{

        setFormvalue({...formdata,id:new Date().getTime().toString(),[e.target.name]:e.target.value})
        console.log(formdata)
    }
    const submiHandel=async(e)=>{
        e.preventDefault();
        const res =await axios.post(`http://localhost:3000/Customer`,formdata)
        console.log(res)

        if(res.status==201)
        {
            toast.success("Customer Added Succesful");
            setFormvalue({...formdata,id:"",username:"",employeeid:"",email:"",url:"",mobile:"",joindate:"",Role:""})
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
                <div className="page-wrapper">
                    <div className="content">
                        <div className="row mt-1">
                            <div className="col-sm-4 col-3">
                                <h4 className="page-title">Add Customer</h4>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-8 offset-lg-2">
                                <form role='form' action='' onSubmit={submiHandel}  onChange={onChangehandel}>
                                    <div className="row">
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
                                                <label>Employee ID <span className="text-danger">*</span></label>
                                                <input value={formdata.employeeid} name='employeeid' type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="form-group">
                                                <label>Joining Date <span className="text-danger">*</span></label>
                                                <div className="cal-icon">
                                                    <input value={formdata.joindate} name='joindate' className="form-control datetimepicker" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="form-group">
                                                <label>Mobile </label>
                                                <input value={formdata.mobile} name='mobile' className="form-control" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="form-group">
                                                <label>URL</label>
                                                <input value={formdata.url} name='url' className="form-control" type="url" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>ROLE</label>
                                                <select value={formdata.Role} name='Role' className="select ms-2">
                                                    <option>Manager</option>
                                                    <option> Hr Manager</option>
                                                    <option>Sales men</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="display-block">Status</label>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="status" id="employee_active" defaultValue="option1" defaultChecked />
                                            <label className="form-check-label" htmlFor="employee_active">
                                                Active
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="status" id="employee_inactive" defaultValue="option2" />
                                            <label className="form-check-label" htmlFor="employee_inactive">
                                                Inactive
                                            </label>
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


    )
}

export default Add_customer



















