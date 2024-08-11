import React, { useEffect, useState } from 'react'
import Footer from '../Componets/Footer'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Link, NavLink, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'



function Single_beauty() {

    useEffect(() => {
        fetchh()
        fetch()

    }, []);

    const [dataa, setDataa] = useState([]);
    const fetchh = async () => {
        const res = await axios.get(`http://localhost:3000/Beauty`);
        console.log(res.data);
        setDataa(res.data)
    }



    const { new_id } = useParams();
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Beauty?id=${new_id}`);
        console.log(res.data);
        setData(res.data)
    }


      const addtocart=async(data)=>{
        const res =await axios.post(`http://localhost:3000/Addtocart`,data)
        console.log(res.data)
        toast.success('Product add in cart')
      }

    return (
        <div>
            <Header />
            <Navbar />
            {/* <!-- Page Header Start --> */}
            <div class="container-fluid bg-secondary mb-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ height: '300px' }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3">Beauty Product</h1>
                    <div class="d-inline-flex">
                        <p class="m-0"><a href="">Home</a></p>
                        <p class="m-0 px-2">-</p>
                        <p class="m-0">Shop</p>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}


            {/* <!-- Shop Detail Start --> */}
            <div class="container-fluid  py-5">
                {
                    data && data.map((value, index) => {
                        return (
                            <div class="row px-xl-5">
                                <div class="col-lg-5 ">
                                    <div id="product-carousel" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner" style={{ height: '500px', width: "400px" }}>
                                            <div class="carousel-item active">
                                                <img class="w-100 h-100" src={value.url} alt="Image" />
                                            </div>
                                            <div class="carousel-item" >
                                                <img class="w-100 h-100" src={value.BeautySecimg} alt="Image" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                            <i class="fa fa-2x fa-angle-left text-dark"></i>
                                        </a>
                                        <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                                            <i class="fa fa-2x fa-angle-right text-dark"></i>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-lg-7 pb-5">
                                    <h3 class="font-weight-semi-bold">{value.Prod_name}</h3>
                                    <div class="d-flex mb-3">
                                        <div class="text-dark mr-2">
                                            <small class="fas fa-star"></small>
                                            <small class="fas fa-star"></small>
                                            <small class="fas fa-star"></small>
                                            <small class="fas fa-star-half-alt"></small>
                                            <small class="far fa-star"></small>
                                        </div>
                                        <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1" />154 orders</span>
                                        <span className="text-success ms-2">In stock</span>
                                    </div>
                                    <div className="mb-3">
                                        <span className="h5">M.R.P: ₹  {value.price} (Incl. of all taxes)</span>

                                    </div>
                                  


                                    <div class="d-flex align-items-center mb-4 pt-2">
                                        <div class="input-group quantity mr-3" style={{ width: "130px" }}>
                                            <div class="input-group-btn">
                                                <button class="btn btn-dark btn-minus" >
                                                    <i class="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" class="form-control bg-secondary text-center" value="1" />
                                            <div class="input-group-btn">
                                                <button class="btn btn-dark btn-plus">
                                                    <i class="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <Link to={`/add_to_cart/` + value.id}  class="btn btn-dark px-3"><i class="fa fa-shopping-cart mr-1"></i> Add To Cart</Link> */}
                                       <Link to={`/add_to_cart/` + value.id} > <button  class="btn btn-dark px-3" onClick={()=>addtocart(value)} ><i class="fa fa-shopping-cart mr-1"></i> Add To Cart</button> </Link>
                                    </div>
                                    <div class="d-flex pt-2">
                                        <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                                        <div class="d-inline-flex">
                                            <a class="text-dark px-2" href="">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a class="text-dark px-2" href="">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                            <a class="text-dark px-2" href="">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                            <a class="text-dark px-2" href="">
                                                <i class="fab fa-pinterest"></i>
                                            </a>
                                        </div>
                                        
                                    </div>
                                    <div className='mt-3'>
                                    <h3><b>Discription</b></h3>
                                    <p>{value.Discription}</p>

                                    </div>
                                    
                                </div>
                            </div>
                            

                        )
                    })
                }

           
              
            </div>
            {/* <!-- Shop Detail End --> */}


            {/* <!-- Products Start --> */}
            <div class="container-fluid py-5">
                <div class="text-center mb-4">
                    <h2 class="section-title px-5"><span class="px-2">You May Also Like</span></h2>
                </div>
                <div class="row px-xl-5">
                    <div class="col">
                        <div class="owl-carousel related-carousel">

                            {
                                dataa && dataa.map((valuee, index) => {

                                    return (

                                        <div class="card product-item border-0" style={{ height: "420px" }}>
                                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                <img class="img-fluid w-100" src={valuee.url} alt="" />
                                            </div>
                                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                <h6 class="text-truncate mb-3">{valuee.Prod_name}</h6>
                                                <div class="d-flex justify-content-center">
                                                    <h6>{valuee.price}</h6><h6 class="text-muted ml-2"><del>{valuee.discount}</del></h6>
                                                </div>
                                            </div>
                                            <div class="card-footer d-flex justify-content-between bg-light border">
                                                <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-dark mr-1"></i>View Detail</a>
                                                <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-dark mr-1"></i>Add To Cart</a>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Products End --> */}

            <Footer />
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="/website/lib/easing/easing.min.js"></script>
                <script src="/website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="/website/mail/jqBootstrapValidation.min.js"></script>
                <script src="/website/mail/contact.js"></script>
                <script src="/website/js/main.js"></script>
            </Helmet>

        </div>
    )
}

export default Single_beauty