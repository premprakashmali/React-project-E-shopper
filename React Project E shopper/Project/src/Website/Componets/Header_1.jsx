import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

// import Dropdown from 'react-bootstrap/Dropdown';

function Header_1() {
    const redirect = useNavigate();

    const userlogout = () => {
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/login');
        return false;
    }

    useEffect(() => {
        fetch()

    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data)
    }

    return (
        <div>
            {/* <!-- Navbar Start --> */}
            <div class="container-fluid mb-5">
                <div class="row border-top px-xl-5">
                    <div class="col-lg-3 d-none d-lg-block">
                        <a class="btn shadow-none d-flex align-items-center justify-content-between bg-dark text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: "65px", margintop: "-1px", padding: "0 30px" }}>
                            <h6 class="m-0 text-white">Categories</h6>
                            <i class="fa fa-angle-down text-white"></i>
                        </a>
                        <nav class="collapse show navbar navbar-vertical navbar-light  align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                            <div class="navbar-nav w-100 overflow-hidden" style={{ height: '410px' }}>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link" data-toggle="dropdown">Dresses <i class="fa fa-angle-down float-right mt-1"></i></a>
                                    <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <Link to="/men_shop" class="dropdown-item">Men's Dresses</Link>
                                        <Link to="/women_shop" class="dropdown-item">Women's Dresses</Link>
                                        <Link to="/Kids_shop" class="dropdown-item">kid's Dresses</Link>
                                    </div>
                                </div>
                                <a href="" class="nav-item nav-link">Shirts</a>
                                <a href="" class="nav-item nav-link">Jeans</a>
                                <a href="" class="nav-item nav-link">Swimwear</a>
                                <a href="" class="nav-item nav-link">Sleepwear</a>
                                <a href="" class="nav-item nav-link">Sportswear</a>
                                <a href="" class="nav-item nav-link">Jumpsuits</a>
                                <a href="" class="nav-item nav-link">Blazers</a>
                                <a href="" class="nav-item nav-link">Jackets</a>
                                <a href="" class="nav-item nav-link">Shoes</a>
                            </div>
                        </nav>
                    </div>
                    <div class="col-lg-9">
                        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" class="text-decoration-none d-block d-lg-none">
                                <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-danger font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                            </a>
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div class="navbar-nav mr-auto py-0">

                                    {/* <a class="text-dark mb-2" href="index.html">Home</a> */}

                                    <li><Link to="/" class="nav-item nav-link ">HOME</Link></li>
                                    {
                                        data && data.map((value, index) => {
                                            return (


                                                <NavLink to={'/view_shop/' + value.id} style={{ textDecoration: "none" }}>
                                                    <div>
                                                            <li class="nav-item nav-link">{value.Category}</li>
                                                    </div>
                                                </NavLink>


                                            )
                                        })
                                    }
                                     <li><Link to="/Beauty_pages" class="nav-item nav-link ">BEAUTY</Link></li>

                                    {/* <li><Link to="/shop" class="nav-item nav-link" href="#">Shop</Link></li> */}

                                    {/* <li><Link to="/shop" class="nav-item nav-link">Shop</Link></li> */}

                                    {/* <li><Link to="/shop_details" class="nav-item nav-link">Shop Detail</Link></li> */}
                                    {/* <div class="nav-item dropdown">
                                        <Link href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">PAGES</Link>
                                        <div class="dropdown-menu rounded-0 m-0" >
                                            <li><Link to="/shopping_cart" class="dropdown-item" href="#">SHOPPING CART </Link></li>
                                            <li><Link to="/checkout_1" class="dropdown-item" href="#">CHECKOUT</Link></li>
                                        </div>
                                    </div> */}
                                    <li><Link to="/contact" class="nav-item nav-link">CONTACT</Link></li>
                                </div>
                                <div class="navbar-nav ml-auto py-0">
                                    {(() => {
                                        if (localStorage.getItem('uid')) {
                                            return (
                                                <>
                                                {/* style={{ border: "3px solid black" }} */}
                                                    <div class="dropdown rounded-5 " >
                                                        <div type="button" class="dropdown-toggle text-dark" data-bs-toggle="dropdown">
                                                            <NavLink className='me-3 text-decoration-none'>

                                                                {/* <img width={48} height={42} src={localStorage.getItem('uimg')} className="rounded-circle m-r-5" alt="" /> */}
                                                                <i class="fa-solid fa-user me-2" style={{color: "#000000"}}></i>

                                                                <span className='text-dark'>
                                                                    <b>{localStorage.getItem('uname')}</b>
                                                                </span>

                                                            </NavLink>
                                                        </div>
                                                        <ul class="dropdown-menu">
                                                            <li><Link class="dropdown-item" to="/web_profile">My profile</Link></li>
                                                            <li><a class="dropdown-item" onClick={userlogout} >Log out</a></li>
                                                        </ul>
                                                    </div>
                                                </>

                                            )
                                        }
                                        else {
                                            return (
                                                <>
                                                    <Link to="/login" class="nav-item nav-link">Login</Link>
                                                    <Link to='/signup' class="nav-item nav-link">Sign up</Link>

                                                </>
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                        </nav>
                        <div id="header-carousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" style={{ height: '410px' }}>
                                    <img class="img-fluid" src="Website/img/carousel-1.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{ maxWidth: '700px' }}>
                                            <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                            <h3 class="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                            <Link to="/shop" class="btn btn-danger py-2 px-3">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" style={{ height: '410px' }}>
                                    <img class="img-fluid" src="Website/img/slid.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{ maxWidth: '700px' }}>
                                            <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                            <h3 class="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                            <Link to="/shop" class="btn btn-danger py-2 px-3">Shop Now</Link>
                                        </div   >
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                                <div class="btn btn-dark" style={{ height: '45px', height: '45px' }}>
                                    <span class="carousel-control-prev-icon mb-n2"></span>
                                </div>
                            </a>
                            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                                <div class="btn btn-dark" style={{ height: '45px', height: '45px' }}>
                                    <span class="carousel-control-next-icon mb-n2"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </div>
    )
}

export default Header_1