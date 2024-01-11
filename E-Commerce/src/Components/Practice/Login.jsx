import React from 'react'
// import { Carousel } from 'react-responsive-carousel';

import './Login.css'

const Login = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div classNameName="carousel-inner">
          <div className="carousel-item active">
            <div  className="slide d-block " 
            src="" 
            alt="" />
          </div>
          <div className="carousel-item">
            <div className=" slide1 d-block " 
            src="" 
            alt="" />
          </div>
          <div className="carousel-item">
            <div className="slide2 d-block " 
            src=""
             alt="" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Login