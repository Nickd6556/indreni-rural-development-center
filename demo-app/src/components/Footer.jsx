import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light pt-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <img src="path/to/indren/logo.png" alt="Indren Logo" className="mb-3" />
            <p className="mb-1">Indreni Rural Development Centre (IRDC)</p>
            <p className="mb-0">Nepal is a non-governmental organization (NGO) established in 1994, with the ultimate aim of sustainable development.</p>
            <ul className="list-inline mt-3">
              <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg"></i></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg"></i></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></a></li>
              <li className="list-inline-item"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-lg"></i></a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><a href="/programs">Programs</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/publications">Publications</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="/career">Career</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <h5 className="mb-3">Address</h5>
          <ul className="list-unstyled">
            <li><i className="fas fa-map-marker-alt"></i> Butwal Sub Metropolitan City, Lumbini Province, Butwal-2, Ujirsingh Path Rupandehi, Nepal</li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:info@irdcnepal.org.np">info@irdcnepal.org.np</a></li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:irdcnepal@gmail.com">irdcnepal@gmail.com</a></li>
            <li><i className="fas fa-phone-alt"></i> <a href="tel:+9857021233">+9857021233</a></li>
            <li><i className="fas fa-phone-alt"></i> <a href="tel:+071591682">+071591682</a></li>
          </ul>
        </div>
      </div>
    </div>
        <div className="row mt-5 p-3 text-white" style={{ backgroundColor: '#0C173E' }}>
          <div className="col-12 text-center">
            <p className="mb-0">Copyright © 2021.All rights reserved | Designed By : <span className='text-primary' >Verve Innovation</span></p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;