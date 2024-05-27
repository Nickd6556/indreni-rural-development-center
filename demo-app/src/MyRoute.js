import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./Pages/HomePage"
import Products from "./Pages/Products"
import ProductDetails from "./Pages/ProductDetails"
import Cart from "./Pages/Cart"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Show from "./Context/Show"
import CartItems from "./Redux/CartItems"



const MyRoute = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path='productdetails/:productId'element={<ProductDetails/>}/>
          <Route path="cart" element={<Cart/>}/>

          <Route path="register"element={<Register/>}/>

          <Route path='login' element={<Login/>}/>

          <Route path="context" element={<Show/>}/>
          <Route path="redux/cart" element={<CartItems/>}/>

    

        </Route>
           
      </Routes>
    </Router>
  );
};

export default MyRoute
