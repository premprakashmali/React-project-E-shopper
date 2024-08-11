import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from '../Componets/Header';
import Footer from '../Componets/Footer';
import { Navbar } from 'react-bootstrap';

function Add_cart() {


    useEffect(() => {
        fetchData();
        fetchCart();
        
    }, []);

    const { neww_id } = useParams();
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:3000/Products?id=${neww_id}`);
        setData(res.data);
    }
    const [Price, setPrice] = useState({});
    const [data, setData] = useState([]);
    const fetchCart = async () => {
        const user_id = localStorage.getItem('uid');
        if (user_id) {
            const res = await axios.get(`http://localhost:3000/Addtocart?user_id=${user_id}`);
            setdata(res.data);

            const id_Counts = {};
            const id_Price = {};
            res.data.map((item) => {
                id_Counts[item.id] = 1;
                id_Price[item.id] = [item.price]
            })

            setCount(id_Counts);
            setPrice(id_Price);
        }
    }

    const [dataa, setdata] = useState([]);

    const updateCart = async (id, newCount, newPrice) => {
        const data = dataa.find((data) => data.id === id);
        if (data) {
            await axios.patch(`http://localhost:3000/Addtocart/${id}`, {
                ...data,
                count: newCount,
                Price: newPrice
            });
        }
    }

    const [count, setCount] = useState({});
    const plushandel = (id, unitPrice) => {
        setCount((prevCounts) => {
            if (prevCounts[id] < 10) {
                const newCount = prevCounts[id] + 1;
                updateCart(id, newCount, (parseFloat(unitPrice) * newCount).toFixed(2));
                return {
                    ...prevCounts,
                    [id]: newCount
                };
            } else {
                toast.error("Maximum limit reached (10)");
            }
            return prevCounts;
        });

        setPrice((prevPrice) => {
            const price = { ...prevPrice, [id]: (parseFloat(unitPrice) * (count[id] + 1)).toFixed(2) };
            return price;
        });
    }

    const minushandel = (id, unitPrice) => {
        setCount((prevCounts) => {
            if (prevCounts[id] > 1) {
                const newCount = prevCounts[id] - 1;
                updateCart(id, newCount, (parseFloat(unitPrice) * newCount).toFixed(2));
                return {
                    ...prevCounts,
                    [id]: newCount
                };
            }
            return prevCounts;
        });

        setPrice((prevPrice) => {
            if (prevPrice[id] > 0) {
                const price = { ...prevPrice, [id]: (parseFloat(unitPrice) * (count[id] - 1)).toFixed(2) };
                return price;
            }
            return prevPrice;
        });
    }

    const calculateTotal = () => {
        return Object.values(Price).reduce((total, price) => total + parseFloat(price), 0).toFixed(2);
    }

    const cartdelete = async (id) => {
        await axios.delete(`http://localhost:3000/Addtocart/${id}`);
        toast.success("Item deleted successfully");
        fetchCart();
    }

    return (
        <div>
            <Header />
            <Navbar />
            <div className="container-fluid bg-secondary mb-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%' }}>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "300px" }}>
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
                    <div className="d-inline-flex">
                        <p className="m-0"><Link to="/">Home</Link></p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shopping Cart</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-5" data-aos="fade-up">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-hover table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Size</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {
                                    dataa.map((value) => (
                                        <tr key={value.id}>
                                            <td className="align-middle mx-auto"><img src={value.url} style={{ width: "50px" }} alt="Product" /></td>
                                            <td>{value.Prod_name}</td>
                                            <td className="align-middle">{value.price}</td>
                                            <td className="align-middle">{value.size}</td>
                                            <td className="align-middle">
                                                <div className="input-group quantity mx-auto" style={{ width: "100px" }}>
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-dark btn-minus" onClick={() => minushandel(value.id, value.price)}>
                                                            <i className="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value={count[value.id]} readOnly />
                                                    <div className="input-group-btn">
                                                        <button className="btn btn-sm btn-dark btn-plus" onClick={() => plushandel(value.id, value.price)}>
                                                            <i className="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">RS-/{Price[value.id]}</td>
                                            <td className="align-middle"><button className="btn btn-sm btn-dark" onClick={() => cartdelete(value.id)}><i className="fa-solid fa-trash" style={{ color: "white" }}></i></button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-5" action="">
                            <div className="input-group">
                                <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-dark">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">Subtotal</h6>
                                    <h6 className="font-weight-medium">{calculateTotal()}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">$10</h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Total</h5>
                                    <h5 className="font-weight-bold">RS/ {calculateTotal()}</h5>
                                </div>
                                <Link to='/payment' className="btn btn-block btn-dark my-3 py-3">Proceed To Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Add_cart;
