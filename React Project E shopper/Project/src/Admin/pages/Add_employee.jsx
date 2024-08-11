
import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'

import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




function Add_employee() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login')
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

    const onChangehandel = (e) => {

        setFormvalue({ ...fromdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
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
            const res = await axios.post(`http://localhost:3000/employee`, fromdata);
            console.log(res);
            if (res.status == 201) {
                toast.success("data Add success");
                setFormvalue({ ...fromdata, id: "", firstname: "", joiningdate: "", Department: "", Position: "", Phone: "", email: "", url: "" })
            }

        }

    }








    return (
        <div>
            <div id="main_content">

                <Admin_header />
                <div className="page">

                    <div class="main-wrapper">
                        <div className="page-wrapper mt-1">
                            <div className="content">
                                <div className="row">
                                    <div className="col-sm-4 col-3 ml-2 mt-3">
                                        <button className="bg-primary text-light">Add Catrgories</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                    <form className="card-body" role='form' action='' onSubmit={submiHandel} onChange={onChangehandel}>
                                                <div className="row clearfix">
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input value={fromdata.firstname} name='firstname' type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> */}
                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <label>joining date</label>
                                                            <input value={fromdata.joiningdate} name='joiningdate' type='date' className="form-control" placeholder="Date of Birth" />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-3 col-sm-12">
                                                        <label>Gender</label>
                                                        <select className="form-control show-tick">
                                                            <option value>-- Gender --</option>
                                                            <option value={10}>Male</option>
                                                            <option value={20}>Female</option>
                                                        </select>
                                                    </div> */}
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
                                                            <label> URL</label>
                                                            <input value={fromdata.url} name='url' type="text" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                        <button type="submit" className="btn btn-outline-secondary">Cancel</button>
                                                    </div>
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
    )
}

export default Add_employee