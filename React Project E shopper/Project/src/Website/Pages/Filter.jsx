// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet'
// import { Link } from 'react-router-dom'

// function Filter() {

//     useEffect(() => {
//         fetch()
//     })

//     const [dataa, setData] = useState([])

//     const fetch = async () => {
//         const res = await axios.get(`http://localhost:3000/Products?Cate_id=1714191085453`)
//         console.log(res)
//         setData(res.data)
//     }


//     const [minprice, setMinprice] = useState(0)
//     const [maxprice, setMaxprice] = useState(1000)

//     const handelpricechnge = (e) => {
//         const { value } = e.target;
//         setMaxprice(value)

//     }


//     const filterproduct = dataa.filter(
//         (item) => item.price >= minprice && item.price <= maxprice
//     )


//     return (
//         <div>

//             <div className='container py-5'>
//                 <div className='w-25 shadow p-3 mx-auto'>
//                     <h3 className='fw-bold'>All product list</h3>
//                     <label htmlFor="" className='form-label'>filter by price : {minprice} - {maxprice}</label>
//                     <input type="range" className='form-range' id="customRange1" min="0" max="1000" value={maxprice} onChange={handelpricechnge} />
//                 </div>

//             </div>





//             <div className='row'>

//                 {
//                     filterproduct.map((value) => {
//                         return (

//                             <div className="col-md-3 col-sm-6 mt-5">
//                                 {/* <Link to={`/view_product/`+ value.id} style={{textDecoration:'none'}}> */}
//                                 <div className="product-grid">
//                                     <div className="product-image">
//                                         <a href="#" className="image">
//                                             <img className="img-1" src={value.url} />
//                                             <img className="img-2" src={value.secndIMG} />
//                                         </a>
//                                         <ul className="product-links">
//                                             <li><a href="#"><i className="fa fa-heart" /></a></li>
//                                             <li><a href="#"><i className="fa fa-random" /></a></li>
//                                             <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
//                                         </ul>
//                                         <a href="#" className="product-view"><i className="fa fa-search" /></a>
//                                     </div>
//                                     <div className="product-content">
//                                         <ul className="rating">
//                                             <li className="fas fa-star" />
//                                             <li className="fas fa-star" />
//                                             <li className="fas fa-star" />
//                                             <li className="fas fa-star" />
//                                             <li className="fas fa-star disable" />
//                                             <li className="disable">(100+ reviews)</li>
//                                         </ul>
//                                         <h3 className="title product_na"><a href="#">{value.Prod_name}</a></h3>
//                                         <div className="price">Rs.{value.price}</div>
//                                     </div>
//                                 </div>
//                                 {/* </Link> */}
//                             </div>


//                         )

//                     })
//                 }
//             </div>



//         </div>
//     )
// }

// export default Filter


import React, { useState } from 'react';

const CartItem = ({ item, onIncrement, onDecrement }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <div>
        <button onClick={() => onDecrement(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrement(item.id)}>+</button>
      </div>
      <p>Unit Price: ${item.price.toFixed(2)}</p>
      <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10.00, quantity: 1 },
    { id: 2, name: 'Item 2', price: 15.50, quantity: 1 },
    // Add more items as needed
  ]);

  const increment = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (id) => {
    setItems(items.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {items.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onIncrement={increment} 
          onDecrement={decrement} 
        />
      ))}
      <h2>Total Cart Value: ${calculateTotal().toFixed(2)}</h2>
    </div>
  );
};
export default Cart;
