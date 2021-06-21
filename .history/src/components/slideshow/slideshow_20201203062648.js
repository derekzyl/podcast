import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slideshow() {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="trending">
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1606787503890-e23f7f79b299?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Credit to Joshua Earle on Unsplash"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1602526211905-6adc54adb8d2?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Credit to Alisa Anton on Unsplash"
            />
          </div>
          <div>
            <img src="" alt="Credit to Igor Ovsyannykov on Unsplash" />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1606851181064-b7507b24377c?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Credit to Pierre Châtel-Innocenti on Unsplash"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1606757389929-2045c644233b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8X2hiLWRsNFEtNFV8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Credit to Richard Nolan on Unsplash"
            />
          </div>
          <div>
            <img src="" alt="Credit to Cristina Gottardi on Unsplash" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slideshow;
