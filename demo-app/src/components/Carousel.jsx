import React from 'react';

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./Images/c7.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Images/c2.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Images/c3.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Images/c4.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Images/c5.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Images/c6.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Images/c8.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
