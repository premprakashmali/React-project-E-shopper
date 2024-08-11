import React, { useEffect, useState } from 'react'
// import Header_1 from '../Componets/Header_1'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'
import Footer from '../Componets/Footer'
import axios from 'axios'
import { Link, redirect } from 'react-router-dom'
// import { Link, useParams } from 'react-router-dom'




function Order_placed() {



    // useEffect(() => {
    //     fetch()

    // }, []);




    return (

        <div>
            <Header />
            <Navbar />

            {/* Page Header Start */}
            <div className="container-fluid bg-secondary mb-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 300 }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Beauty Shop</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><a href="/">Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop</p>
                    </div>
                </div>
            </div>

            <div className=" d-flex justify-content-center align-items-center" data-aos="fade-up">
                <div className="card col-md-4 bg-white shadow-md p-5">
                    <div className="mb-4 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width={75} height={75} fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <h1>Thank You !</h1>
                        <p>We've send the link to your inbox. Lorem ipsum dolor sit,lorem lorem </p>
                        <Link to='/payment' className="btn btn-outline-success" >Back Home</Link>
                    </div>
                </div>
            </div>


            <Footer />




        </div>






    )
}

export default Order_placed

































