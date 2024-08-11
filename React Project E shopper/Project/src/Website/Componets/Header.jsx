import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>

            <Helmet>

           <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

                <link href="/website/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="/website/css/style.css" rel="stylesheet" />
                {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> */}
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="/website/lib/easing/easing.min.js"></script>
                <script src="/website/lib/owlcarousel/owl.carousel.min.js"></script>


                <script src="/website/mail/jqBootstrapValidation.min.js"></script>
                <script src="/website/mail/contact.js"></script>


                <script src="/website/js/main.js"></script>
            </Helmet>
            {/* <!-- Topbar Start --> */}
            <div class="container-fluid" style={{marginTop:"-37px"}}>
                <div class="row py-2 bg-dark px-xl-5">
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="d-inline-flex align-items-center">
                            <a class="text-light" href="">FAQs</a>
                            <span class="text-muted px-2">|</span>
                            <a class="text-light" href="">Help</a>
                            <span class="text-muted px-2">|</span>
                            <a class="text-light" href="">Support</a>
                        </div>
                    </div>
                    <div class="col-lg-6 text-center text-lg-right">
                        <div class="d-inline-flex align-items-center">
                            <a class="text-light px-2" href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="text-light px-2" href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="text-light px-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="text-light px-2" href="">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="text-light pl-2" href="">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center py-3 px-xl-5">
                    <div class="col-lg-3 d-none d-lg-block">
                        <a href="" class="text-decoration-none">
                            <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-danger font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </a>
                    </div>
                    <div class="col-lg-6 col-6 text-left">
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search for products" />
                                <div class="input-group-append">
                                    <span class="input-group-text bg-transparent ">
                                        <i class="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 col-6 text-right">
                        <a href="" class="btn border">
                            <i class="fas fa-heart text-dark"></i>
                            <span class="badge text-dark">100</span>
                        </a>
                        <NavLink to="/add_to_cart/:neww_id" class="btn border">
                        <i class="fa-solid fa-bag-shopping" style={{color: "#000000"}}></i>
                            <span class="badge text-dark">20</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}
        </div>
    )
}

export default Header