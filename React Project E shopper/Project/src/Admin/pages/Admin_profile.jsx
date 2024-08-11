import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet'
import axios from 'axios'
import Admin_header from '../Componets/Admin_header'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function My_profile() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/dashboard');
        }
        else {
            fetch();
        }
    }, []);
    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/admin/${localStorage.getItem('uid_1')}`);
        console.log(res.data);
        setData(res.data);
    }

    const [value, setFormvalue] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
        password: "",
        img: "",
        status: ""
    })

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/admin/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const onChangehandel = (e) => {
        setFormvalue({ ...value, [e.target.name]: e.target.value })
        console.log(value);

    }
    function validation() {
        var ans = true;
        if (value.name == "") {

            toast.error('Name field is required')
            ans = false;
            return false;
        }
        if (value.phone == "") {

            toast.error('phone field is required')
            ans = false;
            return false;
        }
        if (value.email == "") {

            toast.error('email field is required')
            ans = false;
            return false;
        }

        return true;

    }

    const Submithandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const result = await axios.patch(`http://localhost:3000/admin/${value.id}`, value)
            console.log(result); // status = 200 edit
            if (result.status == 200) {
                toast.success("Data Update Success!! ")
                setFormvalue({ ...value, name: "", email: "", phone: "", id: "" })
                // document.getElementById("myModal").style.display = "none";
                redirect('/Admin_profile');
            }
        }
    }

    return (
        <div>
            <div id="main_content">
                <Admin_header />


                <div className="page">
                    <div className="container mt-5">
                        <div className="main-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex flex-column align-items-center text-center">
                                                <img src={data.img} height={120} alt="Admin" className="rounded-circle p-1" style={{ backgroundColor: "#dc3545" }} width={110} />
                                                <div className="mt-3">
                                                    <h4>{data.name}</h4>
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
                                    <div className="card mt-0" style={{ height: "370px" }}>
                                        <form action="" method='post' onSubmit={Submithandel} onChange={onChangehandel}>
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">USER ID</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="text" className="form-control" value={data.id} disabled />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Full Name</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="text" className="form-control" value={data.name} disabled />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Email</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="text" className="form-control" value={data.email} disabled />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Phone</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="text" className="form-control" value={data.phone} disabled />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Img</h6>
                                                    </div>
                                                    <div className="col-sm-9 text-secondary">
                                                        <input type="url" className="form-control" value={data.img} disabled />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <button class="btn btn-danger" onClick={() => redirect('/admin_edit_profile/' + data.id)}>Edit</button>
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

export default My_profile



    // -----------------------------Model open edit data code------------------------




    // < div className = "page" >
    //     <div className="section-body mt-5">
    //         <div className="container-fluid">
    //             <div className="row clearfix">
    //                 <div className="col-lg-5 col-md-15">
    //                     <div className="card" style={{ height: "600px" }}>
    //                         <img className="card-img-top" src={data.img} alt="Card image cap" />
    //                         <div className="card-body">

    //                             <ul className="list-group list-group-flush ">
    //                                 <li className="list-group-item"><span>ID:-</span> {data.id}</li>
    //                                 <li className="list-group-item"><span>Name:-</span> {data.name}</li>
    //                             </ul>


    //                             <ul className="list-group list-group-flush ">
    //                                 <li className="list-group-item"><span>Email:-</span> {data.email}</li>
    //                                 <li className="list-group-item"><span>phone:-</span> {data.phone}</li>
    //                             </ul>

    //                         </div>

    //                         <div className="btn-box text-end me-2">
    //                             <div className="card-footer text-right">
    //                                 <button type="submit" className=" btn btn-primary " id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" >Edit Profile</button> */}
    //                                 <button to="" onClick={() => editdata(data.id)} className=" btn btn-primary " data-bs-toggle="modal" data-bs-target="#myModal"   >Edit Profile</button> */}


    //                                 {/* The Modal */}
    //                                 <div className="modal" id="myModal">
    //                                     <div className="modal-dialog">
    //                                         <div className="modal-content"> 
    //                                             {/* Modal Header  */}
    //                                             <div className="modal-header">
    //                                                 <h4 className="modal-title">Modal Heading</h4>
    //                                                 <button type="button" className="btn-close" data-bs-dismiss="modal" />
    //                                             </div> 
    //                                             {/* Modal body */}
    //                                             <div className="modal-body">
    //                                                 <form action="" method='post' onSubmit={Submithandel} onChange={onChangehandel}>
    //                                                     <div className="form-group">
    //                                                         <label className="form-label">Name</label>
    //                                                         <input value={value.name} name='name' type="text" className="form-control" placeholder="Enter name" />                                 </div>
    //                                                     <div className="form-group">
    //                                                         <label className="form-label">Phone</label>
    //                                                         <input value={value.phone} name='phone' type="number" className="form-control" placeholder="Enter phone" />                                 </div>
    //                                                     <div className="form-group">
    //                                                         <label className="form-label">Email address</label>
    //                                                         <input value={value.email} name='email' type="email" className="form-control" placeholder="Enter email" />
    //                                                     </div>

    //                                                     <div className="form-footer">
    //                                                         <button className="btn btn-primary d-flex">update</button>
    //                                                     </div>
    //                                                 </form>
    //                                             </div>
    //                                             {/* Modal footer */}
    //                                             <div className="modal-footer">
    //                                                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>

    //                             </div>
    //                         </div>




    //                     </div>


    //                 </div>
    //                 <div className="col-lg-7 col-md-12">
    //                     <div className="tab-content" id="pills-tabContent">

    //                         <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
    //                             <div className="card">
    //                                 <div className="card-header">
    //                                     <h3 className="card-title">Edit Profile</h3>
    //                                 </div>
    //                                 <div className="card-body">
    //                                     <div className="row clearfix">
    //                                         <div className="col-md-5">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Company</label>
    //                                                 <input type="text" className="form-control" disabled placeholder="Company" value={data.id} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-sm-6 col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Username</label>
    //                                                 <input type="text" className="form-control" placeholder="Username" value={data.name} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-sm-6 col-md-4">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Email address</label>
    //                                                 <input type="email" className="form-control" value={data.email} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-sm-6 col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">First Name</label>
    //                                                 <input type="text" className="form-control" placeholder="Company" value={data.name} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-sm-6 col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Phone</label>
    //                                                 <input type="text" className="form-control" placeholder="Last Name" value={data.phone} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-12">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Address</label>
    //                                                 <input type="text" className="form-control" placeholder="Home Address" defaultValue="455 S. Airport St. Moncks Corner" />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-sm-6 col-md-4">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">City</label>
    //                                                 <input type="text" className="form-control" placeholder="City" defaultValue="New York" />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-sm-6 col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Postal Code</label>
    //                                                 <input type="number" className="form-control" placeholder="ZIP Code" />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-5">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Country</label>
    //                                                 <select className="form-control custom-select">
    //                                                     <option value>USA</option>
    //                                                 </select>
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-12">
    //                                             <div className="form-group mb-0">
    //                                                 <label className="form-label">About Me</label>
    //                                                 <textarea rows={5} className="form-control" placeholder="Here can be your description" />
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <div className="card-footer text-right">
    //                                     <button type="submit" className="btn btn-primary">Update Profile</button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="tab-pane fade show active" id="pills-blog" role="tabpanel" aria-labelledby="pills-blog-tab">



    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    //             </div > 