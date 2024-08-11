import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import Header from '../Componets/Header'
import Footer from '../Componets/Footer'
import Navbar from '../Componets/Navbar'
import { toast } from 'react-toastify'
import axios from 'axios'
import './Edit_profile.css'




function Edit_profile() {

    const inputRef = useRef(null);
    const [image, setimage] = useState("");


    const handelimagechange = (event) => {
        const file = event.target.files[0];
        console.log(file)
        setimage(event.target.files[0])
    }




    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            editdata();
        }
        else {
            redirect('/')
        }
    }, []);

    const [formvalue, setFormvalue] = useState({

        id: "",
        name: "",
        mobile: "",
        email: "",
        img: "",

    });
    const { id } = useParams()
    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

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

            const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
            console.log(res)
            if (res.status == 200) {
                setFormvalue({ ...formvalue, id: "", name: "", mobile: "", email: "", img: "" })
                redirect('/web_profile')
                toast.success('data Add success');
            }


        }

    }

    return (

        <div>
            <Header />
            <Navbar />


            <div className="page-section" data-aos="fade-up">
                <div className="container mt-5">
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="account-settings">
                                        <div className="user-profile">
                                            <div className="user-avatar">

                                                {image ? <img src={URL.createObjectURL(image)} alt="Maxwell Admin" /> :
                                                    <img src={formvalue.img} alt="Maxwell Admin" />
                                                }
                                            </div>
                                            <h6>Upload a different photo...</h6>
                                            <input type="file" onChange={handelimagechange} className="form-control" />
                                        </div>

                                        <div className="mt-3 text-center">
                                            <h6>{formvalue.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="card h-100">
                                <div className="card-body">
                                    <form action="" method='post' onSubmit={submithandel} onChange={onChangehandel}>
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <h4 className="mb-2 " style={{ color: "#dc3545" }}>Personal Details</h4>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="fullName">ID</label>
                                                    <input type="text" value={formvalue.id} name='id' className="form-control" id="fullName" placeholder="Enter Your id" disabled />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="fullName">Full Name</label>
                                                    <input type="text" value={formvalue.name} name='name' className="form-control" id="fullName" placeholder="Enter full name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="eMail">Email</label>
                                                    <input type="email" value={formvalue.email} name='email' className="form-control" id="eMail" placeholder="Enter email ID" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="phone">Mobile</label>
                                                    <input type="text" value={formvalue.mobile} name='mobile' className="form-control" id="phone" placeholder="Enter phone number" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="form-group">
                                                    <label htmlFor="website">Website URL</label>
                                                    <input type="url" value={formvalue.img} name='img' className="form-control" id="website" placeholder="Website url" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row gutters">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="text-right">
                                                    <button type="submit" class="btn btn-secondary me-2" onClick={() => redirect('/web_profile')}>Cancel</button>
                                                    <button type="submit" className="btn text-light" style={{ backgroundColor: "#dc3545" }}>Update</button>
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

            <Footer />




        </div>
    )
}

export default Edit_profile





