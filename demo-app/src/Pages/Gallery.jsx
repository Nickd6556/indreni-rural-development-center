import React from 'react';

const Gallery = () => {
  return (
    <>
      <div className="Gallery-container">
        <div className="content">
          <h1>Gallery</h1>
          <nav>
            <a href="/">Home</a>
            <span> / Gallery </span>
          </nav>
        </div>
      </div>
      <div className="container-fluid">
    <div className="row mt-5">
      <div className="col-md-1 offset-md-1">
        <button className="btn btn-outline-primary btn-custom">All</button>
      </div>
      <div className="col-md-2">
        <button className="btn btn-outline-secondary btn-custom">Rehabilitation of ponds</button>
      </div>
      <div className="col-md-2">
        <button className="btn btn-outline-success btn-custom">Covid awareness program</button>
      </div>
      <div className="col-md-3">
        <button className="btn btn-outline-warning btn-custom">Indreni Rural Development Center Nepal (IRDC)</button>
      </div>
      <div className="col-md-3">
        <button className="btn btn-outline-danger btn-custom">Women Empowerment Programs</button>
      </div>
      <div className="col-md-1 offset-md-1">
      </div>
    </div>
    </div>

      <div className='row'>
      <div className="col-md-4">
          <div className="gallery-card">
            <div className="gallery-image-container">
              <img src="images/g.jpeg" className="card-img" alt="..."/>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="gallery-card">
            <div className="gallery-image-container">
              <img src="images/p3.jpeg" className="card-img" alt="..."/>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="gallery-card">
            <div className="gallery-image-container">
              <img src="images/g2.jpeg" className="card-img" alt="..."/>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="gallery-card">
            <div className="gallery-image-container">
              <img src="images/g3.jpeg" className="card-img" alt="..."/>
            </div>
            </div>
          </div>

      </div>
        
    </>
  );
};

export default Gallery;