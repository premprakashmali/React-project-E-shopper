import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Website/Pages/Home'
import Shop_details from './Website/Pages/Shop_details'
import Shopping_cart from './Website/Pages/Shopping_cart'
import Checkout_1 from './Website/Pages/Checkout_1'
import Contact from './Website/Pages/Contact'
import Dashboard from './Admin/pages/Dashboard'
import Calender from './Admin/pages/Calender'
import Customer from './Admin/pages/Customer'
import Order_list from './Admin/pages/Order_list'
import Admin_contact from './Admin/pages/Admin_contact'
import Admin_Login from './Admin/pages/Admin_login'
import Admin_404 from './Admin/pages/Admin_404'
import Admin_order from './Admin/pages/Admin_order'




import Admin_gallary from './Admin/pages/Admin_gallary'
import Admin_employee from './Admin/pages/Admin_employee'
import Login_1 from './Website/Pages/Login_1'
import Sign_up from './Website/Pages/Sign_up'

import Add_customer from './Admin/pages/Add_customer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Admin_profile from './Admin/pages/Admin_profile'
import Web_profile from './Website/Pages/Web_profile'
import Edit_profile from './Website/Pages/Edit_profile'
import Admin_edit_prf from './Admin/pages/Admin_edit_prf'
import Manage_custo from './Admin/pages/Manage_custo'
import Catgories_manage from './Admin/pages/Catgories_manage'
import Manage_prodct from './Admin/pages/Manage_prodct'
import Add_prodct from './Admin/pages/Add_prodct'
import Add_categories from './Admin/pages/Add_categories'
import View_shop from './Website/Pages/View_shop'
import  Shop  from './Website/Pages/Shop'
import Add_employee from './Admin/pages/Add_employee'
import View_product from './Website/Pages/View_product'
import Add_cart from './Website/Pages/Add_cart'
import Beauty_product from './Website/Pages/Beauty_product'
import Beauty from './Admin/pages/Beauty'
import Add_beauty from './Admin/pages/Add_beauty'
import Single_beauty from './Website/Pages/Single_beauty'
import Payment from './Website/Pages/Payment'
import Order_placed from './Website/Pages/Order_placed'
import Filter from './Website/Pages/Filter'
// import Forgot_password from './Website/Pages/Forgot_password'

// import View_product from './Website/Pages/View_product'









function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/web_profile' element={<Web_profile />} />
          <Route path='/view_shop/:Cate_id' element={<View_shop />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop_details' element={<Shop_details />} />
          <Route path='/shopping_cart' element={<Shopping_cart />} />
          <Route path='/checkout_1' element={<Checkout_1 />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login_1 />} />
          <Route path='/signup' element={<Sign_up />} />
          <Route path='/edit_profile/:id' element={<Edit_profile />} />
          <Route path='/view_product/:ne_id' element={<View_product />} />
          <Route path='/add_to_cart/:neww_id' element={<Add_cart/>} />
          <Route path='/Beauty_pages' element={<Beauty_product />} />
          <Route path='/single_beauty/:new_id' element={<Single_beauty />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/Placed_order' element={<Order_placed />} />
          {/* <Route path='/forget_pass' element={<Forgot_password />} /> */}
         



          <Route path='/filter' element={<Filter />} />



          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add_categories' element={<Add_categories />} />
          <Route path='/add_prod' element={<Add_prodct />} />
          <Route path='/calendar' element={<Calender />} />
          <Route path='/clients' element={<Customer />} />
          <Route path='/manage_custom' element={<Manage_custo />} />
          <Route path='/order list' element={<Order_list />} />
          <Route path='/contact_1' element={<Admin_contact />} />
          <Route path='/admin_login' element={<Admin_Login />} />
          <Route path='*' element={<Admin_404 />} />
          <Route path='/Admin_order' element={<Admin_order />} />
          <Route path='/categories_manage' element={<Catgories_manage />} />
           <Route path='/manage_prodct' element={<Manage_prodct/>} />
          <Route path='/admin_gallary' element={<Admin_gallary />} />
          <Route path='/employee' element={<Admin_employee />} />
          <Route path='/add_customer' element={<Add_customer />} />
          <Route path='/Admin_profile' element={<Admin_profile />} />
          <Route path='/admin_edit_profile/:id' element={<Admin_edit_prf />} />
          <Route path='/add_employee' element={<Add_employee />} />
          <Route path='/beauty_page' element={<Beauty />} />
          <Route path='/beauty_prod' element={<Add_beauty />} />
          






        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App