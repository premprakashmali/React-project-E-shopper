
import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




function Manage_custo() {

    const redirect = useNavigate();

    useEffect(() => {
        if (!(localStorage.getItem('uid_1'))) {
            redirect('/admin_login')
        }
        else {
            fetch()
        }
    }, [])




    const [search, setsearch] = useState('')

    const [data, setData] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setData(res.data)
    }


    const DeleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        toast.success('Data Delete SUccess');
        fetch();
    }

    const statushandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`)
        if (res.data.status == "Block") {
            const res1 = await axios.patch(`http://localhost:3000/user/${id}`, { status: "Unblock" });
            if (res1.status == 200) {
                console.log(res.data);
                toast.success('Unblock succesfuly')
                fetch()
            }
        }
        else {
            const res1 = await axios.patch(`http://localhost:3000/user/${id}`, { status: "Block" });
            if (res1.status == 200) {
                localStorage.removeItem('uid');
                localStorage.removeItem('uname');
                console.log(res.data);
                toast.success('Block succesfuly')
                fetch()
            }
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
            <div className="page">
                <div className="section-body mt-3">
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-md-flex justify-content-between mb-2">
                                            <ul className="nav nav-tabs b-none">
                                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#list"><i className="fa fa-list-ul" /> Manage user</a></li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#addnew"><i className="fa fa-plus" /> Add New</a></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input type="text" onChange={(e) =>setsearch(e.target.value)} className="form-control" placeholder="Clinet Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-md-4 col-sm-6">
                                                <div className="input-group mb-1">
                                                    <input type="text" className="form-control" placeholder="Order" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-sm-12">
                                                <a href="javascript:void(0);" className="btn btn-primary btn-block mb-1" title>Search</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-body">
                    <div className="container-fluid">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="list" role="tabpanel">
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Url</th>
                                            <th style={{ color: 'black', fontWeight: "700", minWidth: 200 }}>User name</th>
                                            <th style={{ color: 'black', fontWeight: "700", minWidth: 200 }}>Employee ID</th>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Email</th>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Mobile</th>
                                            <th style={{ color: 'black', fontWeight: "700" }}>Status</th>

                                            <th style={{ color: 'black', fontWeight: "700" }} className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.filter((value)=>{
                                            return search.toLowerCase() ===''? value:value.name.toLowerCase().includes(search)
                                        }).map(user => {
                                            return (
                                                <tr key={user}>
                                                    <td><img width={38} height={38} src={user.img} className="rounded-circle m-r-5" alt /> </td>
                                                    <td style={{ minWidth: 100 }}>{user.name}</td>
                                                    <td>{user.id}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.mobile}</td>
                                                    <td><button className='text-white' style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => statushandel(user.id)}>{user.status}</button></td>
                                                    {/* <td><span className="custom-badge status-green"></span>{user.Action}</td> */}
                                                    <td className="text-right">
                                                        <button style={{ border: "none" }}><i class="fa-solid fa-pen-to-square fa-xl" style={{ color: "black" }}></i></button>

                                                        <button style={{ border: "none" }} onClick={() => DeleteHandel(user.id)} ><i class="fa-solid fa-trash fa-xl ml-1" style={{ color: "black" }}></i></button>
                                                    </td>

                                                </tr>
                                            )
                                        })
                                        }

                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>





    )
}

export default Manage_custo


