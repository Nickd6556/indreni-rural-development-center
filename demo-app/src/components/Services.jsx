import React from 'react';

const Services = () => {
  return (
    <div className="container-fluid mt-5 pb-5" style={{ backgroundImage: `url(images/back1.jpeg)`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
      <h6 className="text-center pt-3">Our Services</h6>
      <h2 className="text-center">What We Do</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <i className="fas fa-hand-holding-water fa-2x text-primary"></i>
              <h5 className="card-title mt-3">Livelihoods Promotion</h5>
              <p className="card-text">
                Livelihood strategies are the combination of
                activities that people choose to undertake in order
                to achieve their livelihood goals. They include
                productive activities, investment strategies and
                reproductive choices.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <i className="fas fa-recycle fa-2x text-primary"></i>
              <h5 className="card-title mt-3">WASH</h5>
              <p className="card-text">
                WASH program works on long-term prevention
                and control measures for improving health,
                reducing poverty, and improving socio-economic
                development as well as responding to global
                emergencies and outbreaks of life-threatening
                illnesses.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <i className="fas fa-leaf fa-2x text-primary"></i>
              <h5 className="card-title mt-3">
                Disaster Risk Management & Environment
              </h5>
              <p className="card-text">
                The impacts of disasters, whether natural or man-
                made, not only have human dimensions, but
                environmental ones as well. Environmental
                conditions may exacerbate the impact of a
                disaster, and vice versa, disasters have an impact
                on the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;