import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import Navbar from '../Componets/Navbar'
import { toast } from 'react-toastify'
import axios from 'axios'



function Sign_up() {


    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            redirect('/');
        }
    });

    const [formvalue, setFormvalue] = useState({

        id: "",
        name: "",
        mobile: "",
        email: "",
        password: "",
        img: "",
        status: ""
    });

    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
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

        if (formvalue.password == "") {

            toast.error('password filed is Required');
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

            const res_arr = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            console.log(res_arr);
            if (res_arr.data.length > 0) {

                toast.error('Email id already Exits !');
                setFormvalue({ ...formvalue, id: "", name: "", mobile: "", email: "", password: "", img: "", status: "" });
            }

            else {

                const res = await axios.post(`http://localhost:3000/user`, formvalue);
                console.log(res)
                if (res.status == 201) {
                    toast.success('data Add success');
                    setFormvalue({ ...formvalue, id: "", name: "", mobile: "", email: "", password: "", img: "", status: "" })
                }

            }
        }

    }

    return (

        <div>
            <Header />
            <Navbar />

            <div className="page-section" data-aos="fade-up">
                <div className="container mt-5">
                    <h1 className="text-center wow fadeInUp" style={{ fontWeight: 'bold' }}>Welcome to <span className='text-danger'>E</span> Shopper</h1>
                    <form className="contact-form mt-5" action='' method='post' onSubmit={submithandel} onChange={onChangehandel}>
                        <div className="row mb-3 mx-auto" style={{ width: "450px", color: 'black' }}>
                            <div className="col-sm-12 py-2 wow fadeInLeft">
                                <label htmlFor="fullName">Name</label>
                                <input value={formvalue.name} name='name' type="text" id="fullName" className="form-control" placeholder="Enter your Name .." style={{ border: '1px solid black' }} />
                            </div>

                            <div className="col-sm-12 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Mobile</label>
                                <input value={formvalue.mobile} name='mobile' type="number" id="emailAddress" className="form-control" placeholder="Enter your Number.." style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-sm-12 py-2 wow fadeInLeft">
                                <label htmlFor="emailAddress">Email</label>
                                <input value={formvalue.email} name='email' type="email" id="emailAddress" className="form-control" placeholder="Enter your Email.." style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-sm-12 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Password</label>
                                <input value={formvalue.password} name='password' type="password" id="emailAddress" className="form-control" placeholder="Enter your Password.." style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-sm-12 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Img</label>
                                <input value={formvalue.img} name='img' type="url" id="emailAddress" className="form-control" placeholder="Enter your UR.." style={{ border: '1px solid black' }} />
                            </div>
                            <div className='d-flex py-2'>
                                <input type="checkbox" />
                                <span>  I have read and agree the Terms & Conditions</span>
                            </div>
                            <div className='d-flex justify-content-center mt-4' >
                                <button type="submit" className=" col-sm-12 btn btn-dark wow zoomIn">Sign Up</button>
                            </div>
                            <div className="text-center mt-5">
                                Already have an account?  <NavLink to="/login" style={{ textDecoration: "none", color: 'red' }} >Login</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>




            <Footer />




        </div>
    )
}

export default Sign_up