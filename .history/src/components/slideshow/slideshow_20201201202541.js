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
    <Slider {...settings}>
      <div className="card-wrapper">
        <div className="card card-image">
          <img src="" alt="" />
        </div>
        <ul class="social-icons">
          <li>
            <a href="#">Share</a>
          </li>
        </ul>
        <div className="details">
          <h5>
            John Doe <span className="job-title">UI</span>
          </h5>
        </div>
      </div>
    </Slider>
  );
}

export default Slideshow;
