import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./Pages/HomePage"
import Register from "./Pages/Register"
import Login from "./Pages/Login"




const MyRoute = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="register"element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
           
      </Routes>
    </Router>
  );
};

export default MyRoute
