import React from 'react';

const Publication = () => {
  return (
    <div>
      <div className="publication-container">
        <div className="content">
          <h1>Publications</h1>
          <nav>
            <a href="/">Home</a>
            <span> / Publication</span>
          </nav>
        </div>
      </div>
      <div className="col-md-4">
          <div className="card">
            <div className="image-container">
              <img src="images/publication.jpeg" className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
            <div className="card-date">
            <i className="fas fa-calendar-alt text-primary">&nbsp;&nbsp;&nbsp;2022-07-07 04:51:18</i> 
          </div>
          <div className="card-text">
            <a href="/">Know the best part of Life</a>
          </div>
            </div>
          </div>
        </div>
  
      </div>
  );
};

export default Publication;
