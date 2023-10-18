import React, { Component } from "react";
import Slider from "react-slick";
import "./Style-HomeCarousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: false, 
      cssEase: "linear",
      centerMode: true, // Enable center mode
      centerPadding: "0",
    };
    return (
      <div >
        <Slider {...settings} className="over">
          <div >
            <img src="images/Hero1.jpg" className="img-fluid carousel-container" alt="Om sai trading"/>
          </div>
          <div className="carousel-content">
          <img src="images/Hero2.jpg" className="img-fluid carousel-container" alt="Om sai trading"/>
          </div>
          <div className="carousel-content">
          <img src="images/Hero3.jpg" className="img-fluid carousel-container" alt="Om sai trading"/>
          </div>
         
        </Slider>
      </div>
    );
  }
}