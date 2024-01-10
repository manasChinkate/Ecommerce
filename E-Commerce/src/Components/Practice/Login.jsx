import React from 'react'
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import './Login.css'

const Login = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div classNameName="carousel-inner">
          <div className="carousel-item active">
            <img  className="slide d-block " src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/Jupiter/head/WhatsApp_Image_2024-01-06_at_23.40.38_1._CB585675433_.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className=" slide d-block " src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/D92807365-_1_Tallhero_2xx._CB598669664_.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="slide d-block " src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/jan24atf/unrec/hsbc/WA_WW_3000._CB585877492_.jpg" alt="Third slide" />
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