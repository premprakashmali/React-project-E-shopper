import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import Navbar from '../Componets/Navbar';
import Header from '../Componets/Header';
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify';
import './Profile_clr.css'


function Web_profile() {

    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/'); 
        }
        else {
            fetch();
        }
    }, []);
    const [dataa, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({

        id: "",
        name: "",
        mobile: "",
        email: "",
        img: "",
      
    });


    // const editdata = async (id) => {
    //     const res = await axios.get(`http://localhost:3000/user/${id}`);
    //     console.log(res.data);
    //     setFormvalue(res.data);
    // }

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var ans = true;
        if (formvalue.name == "") {

            toast.error('name filed is Required');
            ans = false;
            return false;
        }
        if (formvalue.mobile == "") {

            toast.error('mobile filed is Required');
            ans = false;
            return false;
        }

        if (formvalue.email == "") {

            toast.error('email filed is Required');
            ans = false;
            return false;
        }


        if (formvalue.img == "") {

            toast.error('img filed is Required');
            ans = false;
            return false;

        }
        return true;
    }


    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res_arr = await axios.patch(`http://localhost:3000/user/${formvalue.id}`, formvalue)
            console.log(res_arr); // status = 200 edit
            if (res_arr.status == 200) {
                toast.success("Data Update Success!! ")
                setFormvalue({ ...formvalue, name: "", email: "", phone: "", id: "", img: "" })
                // document.getElementById("myModal").style.display = "none";
                redirect('/web_profile');
            }
        }
    }
    return (
        <div>
            <Helmet>
                {/* <link rel="stylesheet" href="Admin/plugins/bootstrap/css/bootstrap.min.css" /> */}
                {/* <link rel="stylesheet" href="Admin/plugins/charts-c3/c3.min.css" />
                <link rel="stylesheet" href="Admin/css/main.css" />
                <link rel="stylesheet" href="Admin/css/theme1.css" /> */}
            </Helmet>
            <div id="main_content">
                <Header />
                <Navbar />
                <div className="page" data-aos="fade-up">
                    <div className="container mt-5">
                        <div className="main-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center text-center">
                                                <img src={dataa.img} height={110} alt="Admin" className="rounded-circle p-1" style={{ backgroundColor: "#dc3545" }} width={110} />
                                                <div className="mt-3">
                                                    <h4>{dataa.name}</h4>
                                                    <p className="text-dark mb-1">Full Stack Developer</p>
                                                    <p className="text-dark font-size-sm">Tops Technologies</p>
                                                    <button className="btn text-light rounded-1 " style={{ backgroundColor: "#dc3545", border: "1px solid 007bff" }}>Follow</button>
                                                    <button className="btn btn-outline-danger rounded-1 m-1">Message</button>
                                                </div>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="card mt-2">
                                        <form action="" method='post' onSubmit={submithandel} onChange={onChangehandel}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">USER ID</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="text" className="form-control" value={dataa.id} disabled />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Full Name</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="text" className="form-control" value={dataa.name} disabled />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Email</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="text" className="form-control" value={dataa.email} disabled />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Mobile</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="text" className="form-control" value={dataa.mobile} disabled />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Img</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="url" className="form-control" value={dataa.img} disabled />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <button class="btn btn-danger" onClick={() => redirect('/Edit_profile/'+ dataa.id)}>Edit</button>
                                                    </div>
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

export default Web_profile