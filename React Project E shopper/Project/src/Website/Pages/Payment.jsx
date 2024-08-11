import React, { useEffect, useState } from 'react'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


function Payment() {

    useEffect(()=>{
        fetch()
    },[])

    const [data, setData] = useState([])
    const fetch = async () => {
        const ress = await axios.get(`http://localhost:3000/Addtocart`)
        console.log(ress.data);
        setData(ress.data)
    }

    const [dataa, setdata] = useState({

        id: "",
        country: "",
        firstname: "",
        lastname: "",
        Address: "",
        state: "",
        pincode: "",
        email:"",
        phone: ""
    })

    const changehandel = async (e) => {
        setdata({ ...dataa, id: new Date().getTime().toString(),[e.target.name]:e.target.value })
        console.log(setdata)

    }

    const submithandel =async(e)=>{
        e.preventDefault();
        const res=await axios.post(`http://localhost:3000/userDetails`,dataa);
        console.log(res)
        if(res.status==201){
            toast.success("User Details submit succesfully");
            setdata({...dataa,id:"",country:"",firstname:"",lastname:"",Address:"",state:"",pincode:"",email:"",phone:""})
        }
    }

   

   
       
       
    return (
        <div>
            <Header />
            <Navbar />
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-secondary mb-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ height: "300px" }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Payment Page</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><Link to="/">Home</Link></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Shopping Cart</p>
                    </div>
                </div>
            </div>

            {/* -------- */}
            <div className="site-wrap" data-aos="fade-up">
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0">
                                <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
                                <strong className="text-black">Checkout</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        {/* <div className="row mb-5">
                            <div className="col-md-12">
                                <div className="bg-light rounded p-3">
                                    <p className="mb-0">Returning customer? <a href="#" className="d-inline-block">Click here</a> to login</p>
                                </div>
                            </div>
                        </div> */}
                        <form action="" onChange={changehandel} onSubmit={submithandel}>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <h2 className="h3 mb-3 text-black">Billing Details</h2>
                                    <div className="p-3 p-lg-5 " style={{ border: "1px solid black" }}>
                                        <div className="form-group">
                                            <label htmlFor="c_country" className="text-black">Country <span className="text-danger">*</span></label>
                                            <select id="c_country" value={dataa.country} name='country' className="form-control" style={{ border: "1px solid black" }}>
                                                <option value={1}>India</option>
                                                <option value={2}>Select a country</option>
                                                <option value={3}>bangladesh</option>
                                                <option value={4}>Algeria</option>
                                                <option value={5}>Afghanistan</option>
                                                <option value={6}>Ghana</option>
                                                <option value={7}>Albania</option>
                                                <option value={8}>Bahrain</option>
                                                <option value={9}>Colombia</option>
                                                <option value={10}>Dominican Republic</option>
                                            </select>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6" >
                                                <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                                <input type="text" value={dataa.firstname} name='firstname' className="form-control" id="c_fname" style={{ border: "1px solid black" }} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                <input type="text" value={dataa.lastname} name='lastname' className="form-control" id="c_lname" style={{ border: "1px solid black" }} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                                                <input type="text"value={dataa.Address} name='Address' className="form-control" id="c_address"  placeholder="Street address,Apartment, suite, unit etc. (optional)" style={{ border: "1px solid black" }} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_state_country" className="text-black">State<span className="text-danger">*</span></label>
                                                <input type="text" value={dataa.state} name='state' className="form-control" id="c_state_country"  style={{ border: "1px solid black" }} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_postal_zip" className="text-black">Pincode<span className="text-danger">*</span></label>
                                                <input type="text" value={dataa.pincode} name='pincode' className="form-control" id="c_postal_zip"  style={{ border: "1px solid black" }} />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-5">
                                            <div className="col-md-6">
                                                <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                                                <input type="text" value={dataa.email} name='email' className="form-control" id="c_email_address"  style={{ border: "1px solid black" }} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                                <input type="text" value={dataa.phone} name='phone' className="form-control" id="c_phone"  placeholder="10-digit mobile Number" style={{ border: "1px solid black" }} />
                                            </div>
                                        </div>
                                        <div className="form-group row mb-5">
                                            <div className="col-md-6">
                                               <button type='submit' className='bg-dark text-light rounded-2'>Save Details</button>
                                            </div>
                                         
                                        </div>

                                        {/* <div className="form-group">
                                        <label htmlFor="c_ship_different_address" className="text-black" data-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address"><input type="checkbox" defaultValue={1} id="c_ship_different_address" />
                                            Ship To A Different Address?</label>
                                        <div className="collapse" id="ship_different_address">
                                            <div className="py-2">
                                                <div className="form-group">
                                                    <label htmlFor="c_diff_country" className="text-black">Country <span className="text-danger">*</span></label>
                                                    <select id="c_diff_country" className="form-control">
                                                        <option value={1}>Select a country</option>
                                                        <option value={2}>bangladesh</option>
                                                        <option value={3}>Algeria</option>
                                                        <option value={4}>Afghanistan</option>
                                                        <option value={5}>Ghana</option>
                                                        <option value={6}>Albania</option>
                                                        <option value={7}>Bahrain</option>
                                                        <option value={8}>Colombia</option>
                                                        <option value={9}>Dominican Republic</option>
                                                    </select>
                                                </div>
                                                <div className="form-group row ">
                                                    <div className="col-md-6" style={{border:"1px solid black"}}>
                                                        <label htmlFor="c_diff_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="c_diff_fname" name="c_diff_fname" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="c_diff_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="c_diff_lname" name="c_diff_lname" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-12">
                                                        <label htmlFor="c_diff_companyname" className="text-black">Company Name </label>
                                                        <input type="text" className="form-control" id="c_diff_companyname" name="c_diff_companyname" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-12">
                                                        <label htmlFor="c_diff_address" className="text-black">Address <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="c_diff_address" name="c_diff_address" placeholder="Street address" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                                </div>
                                                <div className="form-group row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="c_diff_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="c_diff_state_country" name="c_diff_state_country" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="c_diff_postal_zip" className="text-black">Posta / Zip <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="c_diff_postal_zip" name="c_diff_postal_zip" />
                                                    </div>
                                                </div>
                                                <div className="form-group row mb-5">
                                                    <div className="col-md-6">
                                                        <label htmlFor="c_diff_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="c_diff_email_address" name="c_diff_email_address" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="c_diff_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                                        <input type="text" className="form-control" id="c_diff_phone" name="c_diff_phone" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row mb-5">
                                        <div className="col-md-12">
                                            <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                                            <div className="p-3 p-lg-5" style={{ border: "1px solid black" }}>
                                                <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                                                <div className="input-group w-75">
                                                    <input type="text" className="form-control" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" style={{ border: "1px solid black" }} />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-dark btn-sm px-4" type="button" id="button-addon2">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-md-12">
                                            <h2 className="h3 mb-3 text-black">Your Order</h2>
                                            <div className="p-3 p-lg-5" style={{ border: "1px solid black" }}>
                                                <table className="table site-block-order-table mb-5">
                                                    <thead>
                                                        <tr><th>Product</th>
                                                            <th>Total</th>
                                                        </tr></thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Bioderma <strong className="mx-2">x</strong> 1</td>
                                                            <td>$55.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Ibuprofeen <strong className="mx-2">x</strong> 1</td>
                                                            <td>$45.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                                            <td className="text-black">$350.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                            <td className="text-black font-weight-bold"><strong></strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="border mb-3">
                                                    <h3 className="h6 mb-0"><a className="d-block text-dark" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Direct Bank Transfer</a></h3>
                                                    <div className="collapse" id="collapsebank">
                                                        <div className="py-2 px-4">
                                                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                                                                payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border mb-3">
                                                    <h3 className="h6 mb-0"><a className="d-block text-dark" data-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>
                                                    <div className="collapse" id="collapsecheque">
                                                        <div className="py-2 px-4">
                                                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                                                                payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border mb-5">
                                                    <h3 className="h6 mb-0"><a className="d-block text-dark" data-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>
                                                    <div className="collapse" id="collapsepaypal">
                                                        <div className="py-2 px-4">
                                                            <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the
                                                                payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <Link to='/Placed_order' className="btn btn-dark btn-lg btn-block" onclick="window.location='thankyou.html'">Place Order</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          

                        </form>

                        

                        {/* </form> */}
                    </div>
                </div>

            </div>


            {/* ---------- */}



            <Footer />


        </div>
    )
}

export default Payment