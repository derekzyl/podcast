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
            <img src={} alt="Credit to Joshua Earle on Unsplash" />
          </div>
          <div>
            <img src={} alt="Credit to Alisa Anton on Unsplash" />
          </div>
          <div>
            <img src={} alt="Credit to Igor Ovsyannykov on Unsplash" />
          </div>
          <div>
            <img src={} alt="Credit to Pierre Châtel-Innocenti on Unsplash" />
          </div>
          <div>
            <img src={} alt="Credit to Richard Nolan on Unsplash" />
          </div>
          <div>
            <img src={} alt="Credit to Cristina Gottardi on Unsplash" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Slideshow;
