import React, { useEffect, useState } from 'react'
import Admin_header from '../Componets/Admin_header'
import axios from 'axios';
import { toast } from 'react-toastify';



function Add_prodct() {

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
        Prod_name: "",
        price: "",
        discount: "",
        size: "",
        status: "",
        url: "",
        secndIMG: "",
        
    })
    const onChangehandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    function validation() {
        var ans = true;

        if (formvalue.Cate_id == "") {
            toast.error('Categoty filed is Required');
            ans = false;
            return false;
        }

        if (formvalue.Prod_name == "") {

            toast.error('Product Name filed is Required');
            ans = false;
            return false;
        }

        if (formvalue.price == "") {

            toast.error('price filed is Required');
            ans = false;
            return false;

        }
        if (formvalue.discount == "") {

            toast.error('discount filed is Required');
            ans = false;
            return false;

        }

        if (formvalue.size == "") {

            toast.error('size filed is Required');
            ans = false;
            return false;

        }
        if (formvalue.status == "") {

            toast.error('status filed is Required');
            ans = false;
            return false;
        }


        if (formvalue.url == "") {

            toast.error('url filed is Required');
            ans = false;
            return false;
        }

        if (formvalue.secndIMG == "") {

            toast.error('secndIMG filed is Required');
            ans = false;
            return false;
        }

        return true;
    }

    const submiHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/Products`, formvalue);
            console.log(res);
            if (res.status == 201) {
                toast.success("data Add success");
                setFormvalue({ ...formvalue, id: "",Cate_id:"", Prod_name: "", price: "", discount: "", size: "", status: "", url: "", secndIMG: "" })
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
                                        <label class="form-label">Category</label>
                                            <select value={formvalue.Cate_id}  name='Cate_id' class="form-control" >
                                                <option value="">Select Categories</option>
                                                {
                                                    data && data.map((val) => {
                                                        return (
                                                            <option value={val.id}>{val.Category}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4" >
                                                <label class="form-label">Product Name</label>
                                                <input type="text" value={formvalue.Prod_name} name="Prod_name" placeholder='Enter product' class="form-control" />
                                            </div>
                                            <div data-mdb-input-init class="form-outline mb-4" >
                                                <label class="form-label">Product Price</label>
                                                <input type="tel" value={formvalue.price} name="price" placeholder='Product Price' class="form-control" />
                                            </div>
                                            <div data-mdb-input-init class="form-outline mb-4" >
                                                <label class="form-label">Discount Price</label>
                                                <input type="tel" value={formvalue.discount} name="discount" placeholder='Product Price' class="form-control" />
                                            </div>


                                            <div className="form-group">
                                                <div className="form-group">
                                                    <label class="form-label">Size</label>
                                                    <select value={formvalue.size} name='size' className="form-control select">
                                                        <option>Size</option>
                                                        <option>Sm</option>
                                                        <option>Md</option>
                                                        <option>Lg</option>
                                                        <option>XL</option>
                                                        <option>XXL</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label class="form-label">Status</label>
                                                <input type="text" value={formvalue.status} name="status" placeholder='Enter Product status' className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <label class="form-label">Categories Image</label>
                                                <input type="url" value={formvalue.url} name="url" placeholder='Enter url' className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label class="form-label">Second Image</label>
                                                <input type="url" value={formvalue.secndIMG} name="secndIMG" placeholder='Enter url' className="form-control" />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Submit Button</button>
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

export default Add_prodct