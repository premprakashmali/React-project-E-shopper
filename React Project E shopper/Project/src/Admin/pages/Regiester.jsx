// import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { NavLink,useNavigate } from 'react-router-dom'




// function Regiester() {


//     const redirect = useNavigate();

//     useEffect(() => {
//         if (localStorage.getItem('uid_1')) {
//             redirect('/dashboard');
//         }
//     });
//     const [formdata, setFormvalue] = useState({

//         name: "",
//         phone: "",
//         email: "",
//         password: "",
//         img: "",
//         status: ""
//     })
//     const onChangehandel = (e) => {
//         setFormvalue({ ...formdata, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
//         console.log(formdata);
//     }

//     function validation() {
//         var ans = true;
//         if (formdata.name == "") {

//             toast.error('Name field is required')
//             ans = false;
//             return false;
//         }
//         if (formdata.phone == "") {

//             toast.error('phone field is required')
//             ans = false;
//             return false;
//         }
//         if (formdata.email == "") {

//             toast.error('email field is required')
//             ans = false;
//             return false;
//         }
//         if (formdata.password == "") {

//             toast.error('password field is required')
//             ans = false;
//             return false;
//         }
//         return true;

//     }
//     const submithandel = async (e) => {
//         e.preventDefault();
//         if (validation()) {

//             const res_arr = await axios.get(`http://localhost:3000/admin?email=${formdata.email}`);
//             console.log(res_arr)
//             if (res_arr.data.length > 0) {

//                 toast.error('Email Id  already Exit !')
//                 setFormvalue({ ...formdata, id: "", name: "", phone: "", email: "", password: "", img: "", status: "" })

//             }

//             const res_arr1 = await axios.get(`http://localhost:3000/admin?name=${formdata.name}`);
//             console.log(res_arr1)
//             if (res_arr1.data.length > 0) {

//                 toast.error('User Name  already Exit !')
//                 setFormvalue({ ...formdata, id: "", name: "", phone: "", email: "", password: "", img: "", status: "" })

//             }
//             else {

//                 const res = await axios.post(`http://localhost:3000/admin`, formdata);
//                 console.log(res)
//                 if (res.status == 201) {
//                     toast.success('data Add success');
//                     setFormvalue({ ...formdata, id: "", name: "", phone: "", email: "", password: "", img: "", status: "" })
//                 }

//             }









//         }

//     }


//     return (

//         <div>
//             <Helmet>
//                 {/* <!-- Bootstrap Core and vandor --> */}
//                 <link rel="stylesheet" href="Admin/plugins/bootstrap/css/bootstrap.min.css" />

//                 {/* <!-- Core css --> */}
//                 <link rel="stylesheet" href="Admin/css/main.css" />
//                 <link rel="stylesheet" href="Admin/css/theme1.css" />
//             </Helmet>


//             <div className="auth bg">
//                 <div className="auth_left" style={{ backgroundColor: "black" }}>

//                     <div className="card">
//                         <div className="card-body">
//                             <form action="" method='post' onSubmit={submithandel} onChange={onChangehandel}>
//                                 <div className="card-title text-center">Welcome to Sign up</div>
//                                 <div className="form-group">
//                                     <label className="form-label">Name</label>
//                                     <input value={formdata.name} name='name' type="text" className="form-control" placeholder="Enter name" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="form-label">Phone</label>
//                                     <input value={formdata.phone} name='phone' type="number" className="form-control" placeholder="Enter name" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="form-label">Email address</label>
//                                     <input value={formdata.email} name='email' type="email" className="form-control" placeholder="Enter email" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="form-label">Password</label>
//                                     <input value={formdata.password} name='password' type="password" className="form-control" placeholder="Password" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="form-label">URL</label>
//                                     <input value={formdata.img} name='img' type="url" className="form-control" placeholder="Enter the URL" />
//                                 </div>
//                                 <div className="form-group">
//                                     <label className="custom-control custom-checkbox">
//                                         <input type="checkbox" className="custom-control-input" />
//                                         <span className="custom-control-label">Agree the <a href="#">terms and policy</a></span>
//                                     </label>
//                                 </div>
//                                 <div className="form-footer">
//                                     <button className="btn btn-primary btn-block">Create new account</button>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="text-center text-muted">
//                             Already have account? <NavLink to="/admin_login">Sign in</NavLink>
//                         </div>
//                     </div>



//                 </div>
//                 <div className="auth_right full_img" />
//             </div>





//             <Helmet>
//                 {/* <script src="Admin/bundles/lib.vendor.bundle.js"></script> */}
//                 {/* <script src="Admin/js/core.js"></script> */}
//             </Helmet>


//         </div>


//     )
// }

// export default Regiester



