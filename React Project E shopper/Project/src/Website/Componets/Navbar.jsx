import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



function Navbar() {

  const redirect = useNavigate();

  const userlogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('uname');
    toast.success('Logout Success');
    redirect('/Login');
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





      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a className="btn shadow-none d-flex align-items-center justify-content-between bg-dark text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: 65, marginTop: '-1px', padding: '0 30px' }}>
              <h6 className="m-0 text-white">Categories</h6>
              <i className="fa fa-angle-down text-white" />
            </a>
            <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: 1 }}>
              <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }}>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1" /></a>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <Link to="/men_shop" class="dropdown-item">Men's Dresses</Link>
                    <Link to="/women_shop" class="dropdown-item">Women's Dresses</Link>
                    <Link to="/Kids_shop" class="dropdown-item">kid's Dresses</Link>
                  </div>
                </div>
                <a href className="nav-item nav-link">Shirts</a>
                <a href className="nav-item nav-link">Jeans</a>
                <a href className="nav-item nav-link">Swimwear</a>
                <a href className="nav-item nav-link">Sleepwear</a>
                <a href className="nav-item nav-link">Sportswear</a>
                <a href className="nav-item nav-link">Jumpsuits</a>
                <a href className="nav-item nav-link">Blazers</a>
                <a href className="nav-item nav-link">Jackets</a>
                <a href className="nav-item nav-link">Shoes</a>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-dark font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <NavLink to="/" className="nav-item nav-link">HOME</NavLink>

                  {
                    data && data.map((value, index) => {
                      return (
                        <Link to={'/view_shop/' + value.id} style={{ textDecoration: "none" }}>
                          <div>
                            <li class="nav-item nav-link ">{value.Category}</li>
                          </div>
                        </Link>
                      )
                    })
                  }

                  <li><Link to="/Beauty_pages" class="nav-item nav-link ">BEAUTY</Link></li>

                  {/* <NavLink to="/Shop" className="nav-item nav-link">Shop</NavLink> */}





                  {/* <NavLink to="/shop" className="nav-item nav-link ">Shop</NavLink> */}



                  {/* <NavLink to="/shop_details" className="nav-item nav-link">Shop Detail</NavLink> */}


{/* 
                  <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">
                      Pages
                    </a>

                    <div class="dropdown-menu rounded-0 m-0" >
                      <li><Link to="/shopping_cart" class="dropdown-item" href="#">Shopping Cart</Link></li>
                      <li><Link to="/checkout_1" class="dropdown-item" href="#">Checkout</Link></li>
                    </div>
                  </div> */}

                  <NavLink to="/contact" className="nav-item nav-link">CONTACT</NavLink>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  {(() => {
                    if (localStorage.getItem('uid')) {
                      return (
                        <>

                          {/* style={{ border: "3px solid black" }} */}
                          <div class="dropdown rounded-5" >
                            <div type="button" class="text-dark dropdown-toggle " data-bs-toggle="dropdown">
                              <NavLink className='me-3 text-decoration-none'>
                                {/* <i className="fa fa-user text-dark me-2" aria-hidden="true" /> */}
                                {/* <img width={48} height={42} src={localStorage.getItem('uimg')} className="rounded-circle m-r-5" alt="" /> */}
                                <i class="fa-solid fa-user me-2" style={{ color: "#000000" }}></i>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
