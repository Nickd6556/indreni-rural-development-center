import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (window.pageYOffset > 300 || scrollPosition >= footerPosition) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <footer className="bg-light pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <img src="images/logo.png" alt="Indren Logo" className="mb-1" width="230" />
            <p className="mb-1">Indreni Rural Development Centre (IRDC)</p>
            <p className="mb-0">Nepal is a non-governmental organization (NGO) established in 1994, with the ultimate aim of sustainable development.</p>
            <ul className="list-inline mt-2">
              <li className="list-inline-item"><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f fa-lg blue-icon"></i></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram fa-lg blue-icon"></i></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin-in fa-lg blue-icon"></i></a></li>
              <li className="list-inline-item"><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter fa-lg blue-icon"></i></a></li>
            </ul>
          </div>
          <div className="col-md-2 mx-auto">
            <h5 className="mb-3 underline">Services</h5>
            <ul className="list-unstyled custom-list">
              <li className="mb-2 blue-bullet"><a href="/programs">Programs</a></li>
              <li className="mb-2 blue-bullet"><a href="/services">Services</a></li>
              <li className="mb-2 blue-bullet"><a href="/publications">Publications</a></li>
            </ul>
          </div>
          <div className="col-md-2 mx-auto">
            <h5 className="mb-3 underline">Company</h5>
            <ul className="list-unstyled custom-list">
              <li className="mb-2 blue-bullet"><a href="/career">Career</a></li>
              <li className="mb-2 blue-bullet"><a href="/gallery">Gallery</a></li>
              <li className="mb-2 blue-bullet"><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3 mx-auto">
            <h5 className="mb-3 underline">Address</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-2">
                <i className="fas fa-map-marker-alt icon-spacing blue-icon"></i>
                <div>
                  Butwal Sub Metropolitan City
                  <p className="mb-1 ml-4">Lumbini Province, Butwal-2, Ujirsingh </p>
                  <p className="mb-1 ml-4">Path Rupendhi, Nepal</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-2">
                <i className="fas fa-envelope icon-spacing blue-icon"></i>
                <div>
                  <a href="mailto:info@irdcnepal.org.np">info@irdcnepal.org.np</a>
                  <p className="ml-4">irdcnepal@gmail.com</p>
                </div>
              </li>
              <li className="d-flex align-items-start mb-2">
                <i className="fas fa-phone-alt icon-spacing blue-icon"></i>
                <div>
                  <a href="tel:+9857021233">+9857021233</a>
                  <p className="">+071591682</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 p-3 text-white" style={{ backgroundColor: '#0C173E' }}>
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">Copyright © 2021. All rights reserved | Designed By: <span className="text-primary">Verve Innovation</span></p>
          </div>
        </div>
      </div>
      <div className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
        <i className="fa fa-chevron-up"></i>
        <i className="fa fa-chevron-up"></i>
      </div>
    </footer>
  );
};

export default Footer;
