import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./Pages/HomePage"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Programs from "./Pages/Programs"
import Publication from "./Pages/Publication"
import AboutUs from "./Pages/AboutUs"
import Careers from "./Pages/Career"
import Gallery from "./Pages/Gallery"




const MyRoute = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="register"element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='programs' element={<Programs/>}/>
          <Route path='publication' element={<Publication/>}/>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='career' element={<Careers/>}/>
          <Route path='gallery' element={<Gallery/>}/>
    
          

          
        </Route>
           
      </Routes>
    </Router>
  );
};

export default MyRoute
