import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Header from '../Componets/Header'

import Footer from '../Componets/Footer'
import Navbar from '../Componets/Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'


function Login_1() {


    const redirect = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('uid'))
        {
            redirect('/');
        }
    });

    const [logindata, setFormvalue] = useState({

        email: "",
        password: "",
        
    
    })

    const onChangehandel = async (e) => {
        setFormvalue({ ...logindata, [e.target.name]: e.target.value });
        console.log(logindata);
    }

    function validation() {
        var ans = true;
        if (logindata.email == "") {
            toast.error('email filed required');
            ans = false;
            return false;
        }
        if (logindata.password == "") {
            toast.error('password filed required');
            ans = false;
            return false;
        }
        return true;

    }
    const submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res_arr = await axios.get(`http://localhost:3000/user?email=${logindata.email}`,);
            console.log(res_arr)
            if (res_arr.data.length>0) {

                if (res_arr.data[0].password == logindata.password)
                 {
                    if(res_arr.data[0].status=="Unblock"){

                        localStorage.setItem('uid',res_arr.data[0].id)
                        localStorage.setItem('uname',res_arr.data[0].name)
                        localStorage.setItem('uimg',res_arr.data[0].img)

                        toast.success('Login success')
                        return redirect('/')
                    }
                    else{
                        toast.error('Account Blocked conatct shop')
                        setFormvalue({...logindata,email:"",password:""});
                        return false;
                    }

                }
                else {
                    toast.error('password does not match')
                    setFormvalue({ ...logindata, email: "", password: "" })
                    return false;
                }

            }
            else {
                toast.error('email does not exit')
                setFormvalue({ ...logindata, email: "", password: "" })
                return false;
            }
        }
    }



    return (
        <div>
            <Header />
            <Navbar />

            <div className="page-section mt-5" data-aos="fade-up">
                <div className="container">
                    <h1 className="text-center wow fadeInUp" style={{ fontWeight: 'bold' }}><span className='text-danger'>E</span> Shopper Login</h1>
                    <form className="contact-form mt-5" action='' method='post' onSubmit={submithandel} onChange={onChangehandel} >
                        <div className="row mb-3 mx-auto" style={{ width: "450px", color: 'black' }}>
                            <div className="col-sm-12 py-2 wow fadeInLeft">
                                <label htmlFor="fullName">Email</label>
                                <input type="text" value={logindata.email} name='email' id="fullName" className="form-control" placeholder="Enter your email.." style={{ border: '1px solid black' }} />
                            </div>
                            <div className="col-sm-12 py-2 wow fadeInRight">
                                <label htmlFor="emailAddress">Password</label>
                                <input type="text" value={logindata.password} name='password' id="emailAddress" className="form-control" placeholder="Enter your Password.." style={{ border: '1px solid black' }} />
                            </div>
                           
                            <div className='d-flex justify-content-center mt-4' >
                                <button type="submit" className=" col-sm-12 btn btn-dark wow zoomIn" >Log in</button>
                            </div>
                            <div className="text-center mt-5">
                                Don’t have an account? <NavLink to="/signup" style={{ textDecoration: "none", color: 'red' }} >Register Now</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />









        </div>

    )
}

export default Login_1