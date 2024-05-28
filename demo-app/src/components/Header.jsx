import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container-fluid p-0 text-light" style={{ backgroundColor: '#0C173E' }}>
      <div className="row pt-2 pb-2 p-3">
        <div className="col-md-12 d-flex justify-content-end align-items-center">
          <a href="/" className="text-light text-decoration-none me-3">
            <i className="fas fa-home me-2"></i> Butwal Sub Metropolitan City
          </a>
          <a href="tel:+9779857021233" className="text-light text-decoration-none me-3">
            <i className="fas fa-phone me-2"></i> 9857021233
          </a>
          <a href="mailto:info@irdcnepal.org.np" className="text-light text-decoration-none me-3">
            <i className="fas fa-envelope me-2"></i> info@irdcnepal.org.np
          </a>
          <a href="/login" className="text-light text-decoration-none">
            <i className="fas fa-user me-2"></i> Login
          </a>
        </div>
      </div>
  
      <div className="bg-white p-3 ">
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-4 justify-content-center mb-md-0">
      <div className="col-md-4">
          <a href="/" className="text-light text-decoration-none">
            <img src="/images/logo.png" alt="Indren Logo" className="img-fluid" width="150" />
          </a>
        </div>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/programs" className="nav-link">Programs</Link>
          <Link to="/publication" className="nav-link">Publication</Link>
          <Link to="/career" className="nav-link">Career</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/about" className="nav-link">About Us</Link>
      
        </ul>
      </div>   
    </header>
  );
}

export default Header;