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
                src={require("./images/001.PNG")}
                alt="Credit to Joshua Earle on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("./images/002.PNG")}
                alt="Credit to Alisa Anton on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("./images/003.PNG")}
                alt="Credit to Igor Ovsyannykov on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("./images/004.PNG")}
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("./images/005.PNG")}
                alt="Credit to Richard Nolan on Unsplash"
              />
            </div>
            <div>
              <img
                src={require("./images/006.PNG")}
                alt="Credit to Cristina Gottardi on Unsplash"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
}

export default Slideshow;
