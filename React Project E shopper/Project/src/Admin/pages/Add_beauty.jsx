
import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'

import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




function Add_beauty() {

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

        const ress = await axios.get(`http://localhost:3000/Beauty`)
        console.log(ress.data);
        setData(ress.data)

    }
    const [fromdata, setFormvalue] = useState({
        id: "",
        Prod_name: "",
        price: "",
        discount: "",
        Discription: "",
        status: "",
        url: "",
        BeautySecimg:""
    })

    const onChangehandel = (e) => {
        setFormvalue({ ...fromdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
        console.log(fromdata)
    }

    function validation() {
        var ans = true

        if (fromdata.Prod_name == "") {

            toast.error('Product Name filed is Required');
            ans = false;
            return false;
        }


        if (fromdata.price == "") {

            toast.error('price filed is Required');
            ans = false;
            return false;

        }
        if (fromdata.discount == "") {

            toast.error('discount filed is Required');
            ans = false;
            return false;

        }
        if (fromdata.Discription == "") {

            toast.error('Discription filed is Required');
            ans = false;
            return false;

        }

        if (fromdata.status == "") {

            toast.error('status filed is Required');
            ans = false;
            return false;
        }


        if (fromdata.url == "") {

            toast.error('url filed is Required');
            ans = false;
            return false;
        }
        
        if (fromdata.BeautySecimg == "") {

            toast.error('BeautySecimg filed is Required');
            ans = false;
            return false;
        }

        return true;
    }



    const submiHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/Beauty`, fromdata);
            console.log(res);
            if (res.status == 201) {
                toast.success("data Add success");
                setFormvalue({ ...fromdata, id: "", Prod_name: "", price: "", discount: "", Discription: "", status: "", url: "",BeautySecimg:"" })
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
                                    <div className="col-sm-4 col-3">
                                        <button className="bg-primary text-light ml-5 mt-3">Add Product</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                        <form role="form" action="" onSubmit={submiHandel} onChange={onChangehandel} method='post'>


                                            <div data-mdb-input-init class="form-outline mb-4" >
                                                <label class="form-label">Product Name</label>
                                                <input type="text" value={fromdata.Prod_name} name="Prod_name" placeholder='Enter product' class="form-control" />
                                            </div>
                                            <div data-mdb-input-init class="form-outline mb-4" >
                                                <label class="form-label">Product Price</label>
                                                <input type="tel" value={fromdata.price} name="price" placeholder='Product Price' class="form-control" />
                                            </div>
                                            <div data-mdb-input-init class="form-outline mb-4" >
                                                <label class="form-label">Discount Price</label>
                                                <input type="tel" value={fromdata.discount} name="discount" placeholder='Product Price' class="form-control" />
                                            </div>
                                            <div data-mdb-input-init class="form-outline mb-4" >
                                                <label class="form-label">Discription</label>
                                                <input type="tel" value={fromdata.Discription} name="Discription" placeholder='Discription' style={{ height: "70px" }} class="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label class="form-label">Status</label>
                                                <input type="text" value={fromdata.status} name="status" placeholder='Enter Product status' className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label class="form-label">Product Image</label>
                                                <input type="url" value={fromdata.url} name="url" placeholder='Enter url' className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label class="form-label">Second Image</label>
                                                <input type="url" value={fromdata.BeautySecimg} name="BeautySecimg" placeholder='Enter url' className="form-control" />
                                            </div>

                                            <button type="submit" className="btn btn-primary ">Submit Button</button>
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

export default Add_beauty