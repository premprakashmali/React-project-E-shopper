import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'

import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




function Add_categories() {

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

        const ress = await axios.get(`http://localhost:3000/categories`)
        console.log(ress.data);
        setData(ress.data)

    }



    const [formvalue, setFormvalue] = useState({
        id: "",
        Category: "",
        url: ""
    })
    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    function validation() {
        var ans = true

        if (formvalue.Category == "") {
            toast.error('Category filed is Required');
            ans = false;
            return false;
        }
        if (formvalue.url == "") {
            toast.error('url filed is Required');
            ans = false;
            return false;
        }
        return true;
    }



    const submiHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/categories`, formvalue);
            console.log(res);
            if (res.status == 201) {
                toast.success("data Add success");
                setFormvalue({ ...formvalue, id: "", Category: "", url: "" })
                redirect('/categories_manage')
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
                                        <form role="form" action="" onSubmit={submiHandel} onChange={onChangehandel} method='post'>

                                            <div className='mt-5'>
                                                {/* Name input */}
                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form5Example1">Category Name</label>
                                                    <input type="text" value={formvalue.Category} name="Category" id="form5Example1" className="form-control" />
                                                </div>
                                                {/* Email input */}
                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <label className="form-label" htmlFor="form5Example2">Category Img</label>
                                                    <input type="url" value={formvalue.url} name="url" id="form5Example2" className="form-control" />
                                                </div>
                                                <button type="submit" className="btn btn-primary ">Submit Button</button>
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

export default Add_categories