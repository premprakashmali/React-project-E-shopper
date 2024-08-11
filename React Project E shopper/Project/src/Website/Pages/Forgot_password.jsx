// import React, { useEffect, useState } from 'react'
// import { Link, NavLink, useNavigate, useParams } from 'react-router-dom'
// import Header from '../Componets/Header'

// import Footer from '../Componets/Footer'
// import Navbar from '../Componets/Navbar'
// import axios from 'axios'
// import { toast } from 'react-toastify'


// function Forgot_password() {

   

//     useEffect(() => {
   
//             fetchh();

//     }, []);

//     const [dataa, setData] = useState([]);
//     const fetchh = async () => {
//         const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
//         console.log(res.data);
//         setData(res.data);
//     }





//     return (
//         <div>
//             <Header />
//             {/* <Navbar /> */}

//             <div className="page-section mt-5">
//                 <div className="container">
//                     <h1 className="text-center wow fadeInUp" style={{ fontWeight: 'bold' }}><span className='text-danger'>E</span> Shopper Login</h1>
//                     <form className="contact-form mt-5" action='' method='post'  >
//                         <div className="row mb-3 mx-auto" style={{ width: "450px", color: 'black' }}>
//                             <div className="col-sm-12 py-2 wow fadeInLeft">
//                                 <label htmlFor="fullName">Enter your email</label>
//                                 <input type="text" value={dataa.email}  name='email' id="fullName" className="form-control" placeholder="Enter your email.." style={{ border: '1px solid black' }} />
//                             </div>
//                             <div className="col-sm-12 py-2 wow fadeInRight">
//                                 <label htmlFor="emailAddress">New password</label>
//                                 <input type="text" value={dataa.password}  name='password' id="emailAddress" className="form-control" placeholder="Enter your Password.." style={{ border: '1px solid black' }} />
//                             </div>
                      
//                             <div className='d-flex justify-content-center mt-4' >
//                                 <button type="submit" className=" col-sm-12 btn btn-dark wow zoomIn" >Log in</button>
//                             </div>
//                             <div className="text-center mt-5">
//                                 Don’t have an account? <NavLink to="/signup" style={{ textDecoration: "none", color: 'red' }} >Register Now</NavLink>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <Footer />









//         </div>

//     )
// }

// export default Forgot_password