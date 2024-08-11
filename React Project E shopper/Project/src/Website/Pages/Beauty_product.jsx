import React, { useEffect, useState } from 'react'
// import Header_1 from '../Componets/Header_1'
import Header from '../Componets/Header'
import Navbar from '../Componets/Navbar'
import Footer from '../Componets/Footer'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import './Profile_clr.css'




function Beauty_product() {



    useEffect(() => {
        fetch()

    }, []);
    const [search,setsearch] = useState('')
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/Beauty`);
        console.log(res.data);
        setData(res.data)
    }

    const [minprice, setminprice] = useState(250)
    const [maxprice, setmaxprice] = useState(999)

    const handelpricechnge = (e) => {
        const { value } = e.target;
        setmaxprice(value)
    }

    const filterproduct = data.filter(
        (item) => item.price >= minprice && item.price <= maxprice
      )

    
 
    return (

        <div>
            <Header />
            <Navbar />

            {/* Page Header Start */}
            <div className="container-fluid bg-secondary mb-5" style={{ backgroundImage: 'url(https://swissbeauty.in/cdn/shop/files/Website-Banner_1700x510_2b7664f3-b59f-4e29-ac00-fe066b459b9b_1944x.gif?v=1717217895)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: 300 }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3 text-light">Beauty Shop</h1>
                    <div className="d-inline-flex">
                        <p className="m-0 text-light"><a href="/">Home</a></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0 text-light">Shop</p>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* Shop Start */}
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    {/* Shop Sidebar Start */}
                    <div className="col-lg-3 col-md-12">
                        {/* Price Start */}
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>

                            <form >
                                <div className='container py-5 '>
                                    <div className='shadow p-3 '>
                                        <h3 className='fw-bold'>Filter price</h3>
                                        <div className='d-flex mt-3'>
                                            <input type="text" className='text-center' value='Min' style={{ width: '60px' }} />
                                            <h5 className='ms-3 text-center'>To</h5>
                                            <input type="number" className='ms-4 text-center' value={maxprice} placeholder='₹' style={{ width: '60px' }} />

                                        </div>

                                        <input type="range" className='form-range mt-2' id="customRange1" min="250" max="999" value={maxprice} onChange={handelpricechnge} />
                                    </div>

                                </div>

                            </form>
                            {/*<div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-2" />
                                    <label className="custom-control-label" htmlFor="price-2">$100 - $200</label>
                                    <span className="badge border font-weight-normal">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-3" />
                                    <label className="custom-control-label" htmlFor="price-3">$200 - $300</label>
                                    <span className="badge border font-weight-normal">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="price-4" />
                                    <label className="custom-control-label" htmlFor="price-4">$300 - $400</label>
                                    <span className="badge border font-weight-normal">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-control-input" id="price-5" />
                                    <label className="custom-control-label" htmlFor="price-5">$400 - $500</label>
                                    <span className="badge border font-weight-normal">168</span>
                                </div> */}

                        </div>
                        {/* Price End */}
                        {/* Color Start */}
                        {/* <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
                            <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" defaultChecked id="color-all" />
                                    <label className="custom-control-label" htmlFor="price-all">All Color</label>
                                    <span className="badge border font-weight-normal">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="color-1" />
                                    <label className="custom-control-label" htmlFor="color-1">Black</label>
                                    <span className="badge border font-weight-normal">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="color-2" />
                                    <label className="custom-control-label" htmlFor="color-2">White</label>
                                    <span className="badge border font-weight-normal">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="color-3" />
                                    <label className="custom-control-label" htmlFor="color-3">Red</label>
                                    <span className="badge border font-weight-normal">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="color-4" />
                                    <label className="custom-control-label" htmlFor="color-4">Blue</label>
                                    <span className="badge border font-weight-normal">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-control-input" id="color-5" />
                                    <label className="custom-control-label" htmlFor="color-5">Green</label>
                                    <span className="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                        </div> */}
                        {/* Color End */}
                        {/* Size Start */}
                        {/* <div className="mb-5">
                            <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                            <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" defaultChecked id="size-all" />
                                    <label className="custom-control-label" htmlFor="size-all">All Size</label>
                                    <span className="badge border font-weight-normal">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="size-1" />
                                    <label className="custom-control-label" htmlFor="size-1">XS</label>
                                    <span className="badge border font-weight-normal">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="size-2" />
                                    <label className="custom-control-label" htmlFor="size-2">S</label>
                                    <span className="badge border font-weight-normal">295</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="size-3" />
                                    <label className="custom-control-label" htmlFor="size-3">M</label>
                                    <span className="badge border font-weight-normal">246</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="custom-control-input" id="size-4" />
                                    <label className="custom-control-label" htmlFor="size-4">L</label>
                                    <span className="badge border font-weight-normal">145</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="custom-control-input" id="size-5" />
                                    <label className="custom-control-label" htmlFor="size-5">XL</label>
                                    <span className="badge border font-weight-normal">168</span>
                                </div>
                            </form>
                        </div> */}
                        {/* Size End */}
                    </div>
                    {/* Shop Sidebar End */}
                    {/* Shop Product Start */}
                    <div className="col-lg-9 col-md-12">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <form action>
                                        <div className="input-group">
                                            <input type="text" onChange={((e)=>setsearch(e.target.value))} className="form-control" placeholder="Search by name" />
                                            <div className="input-group-append">
                                                <span className="input-group-text bg-transparent text-dark">
                                                    <i className="fa fa-search" />
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="dropdown ml-4">
                                        <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Sort by
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                            <a className="dropdown-item" href="#">Latest</a>
                                            <a className="dropdown-item" href="#">Popularity</a>
                                            <a className="dropdown-item" href="#">Best Rating</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row' data-aos="fade-up">
                                {/* {
                                    data && data.map((value, index) => {
                                        return (

                                            <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
                                                <Link to={`/single_beauty/` + value.id} style={{ textDecoration: 'none' }}>
                                                    <div className="card product-item border-0 mb-4" style={{ width: '250px' }}>
                                                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                                            <img className="img-fluid w-100" src={value.url} alt />
                                                        </div>
                                                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                                            <h6 className="text-truncate mb-3">{value.Prod_name}</h6>
                                                            <div className="d-flex justify-content-center">
                                                                <h6>₹ {value.price} <del>{value.discount}</del></h6>
                                                            </div>
                                                        </div>
                                               
                                                            <div class="d-flex justify-content-center text-dark">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa-regular fa-star" style={{color: "#000000"}}></i>
                                                            </div>
                                                       
                                                        <div className="card-footer d-flex justify-content-between bg-light border">
                                                            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-dark mr-1" />View Detail</a>
                                                            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-dark mr-1" />Add To Cart</a>
                                                        </div>

                                                    </div>
                                                </Link>

                                            </div>

                                        )
                                    })
                                } */}
                                {
                                    filterproduct && filterproduct.filter((value)=>{
                                        return search.toLowerCase() ===''? value:value.Prod_name .toLowerCase().includes(search)
                                    }).map((value, index) => {
                                        return (
                                            <div className="col-md-3 col-sm-6 mt-5">
                                                <Link to={`/single_beauty/` + value.id} style={{ textDecoration: 'none' }}>
                                                    <div className="product-grid">
                                                        <div className="product-image">
                                                            <a href="#" className="image">
                                                                <img className="img-1" src={value.url} />
                                                                <img className="img-2" src={value.BeautySecimg} />
                                                            </a>
                                                            <ul className="product-links">
                                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                                <li><a href="#"><i className="fa fa-random" /></a></li>
                                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                            </ul>
                                                            <a href="#" className="product-view"><i className="fa fa-search" /></a>
                                                        </div>
                                                        <div className="product-content">
                                                            <ul className="rating">
                                                                <li className="fas fa-star" />
                                                                <li className="fas fa-star" />
                                                                <li className="fas fa-star" />
                                                                <li className="fas fa-star" />
                                                                <li className="fas fa-star disable" />
                                                                <li className="disable">(100+ reviews)</li>
                                                            </ul>
                                                            <h3 className="title product_na"><a href="#">{value.Prod_name}</a></h3>
                                                            <div className="price">RS.{value.price}</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                        )
                                    })
                                }


                                <div className="col-12 pb-1">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-center mb-3">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Shop Product End */}
                </div>
            </div>
            {/* Shop End */}
            <Footer />




        </div>






    )
}

export default Beauty_product

































