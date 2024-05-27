import React from 'react';

const Programs = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Our Programs</h1>
          <p>The Programs & Projects run by Indreni Rural Development Centre Nepal</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="image-container">
              <img src="images/p1.jpeg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <h5 className="card-title">Essential Health Project (EHP)</h5>
              <p className="card-text">The Essential Health Project (EHP) is one of the programs run by Indreni Rural Development Centre Ne...</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="image-container">
              <img src="images/p2.jpeg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <h5 className="card-title">Conduction of Trainings and Consultancy Services</h5>
              <p className="card-text">Indreni Rural Development Centre (IRDC) Nepal also offers trainings and consultancy services to indi...</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="image-container">
              <img src="images/p3.jpeg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
              <h5 className="card-title">Livelihood Improvement of Tharu Community</h5>
              <p className="card-text">Indreni Rural Development Centre (IRDC) Nepal runs a Rural Water Supply and Sanitation program aimed...</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;