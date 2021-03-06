import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import "./slideshow.css";

function Slideshow({ title, imgUrl, content }) {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    transition: 10,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img src={imgUrl} alt="Credit to Joshua Earle on Unsplash" />
          <p class="slide-content">
            <h5 className="slide-title">{title}</h5>
            {content}
          </p>
          <div className="icons">
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1606630987275-5b005f4421ac?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8QkpKTXR0ZURKQTR8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Credit to Igor Ovsyannykov on Unsplash"
          />
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
          <img
            src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHNvY2NlcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
