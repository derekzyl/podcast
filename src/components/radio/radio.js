import React, { Component } from "react";
import Slider from "react-slick";
import "./radio.css";
export default class Radio extends Component {
  render() {
    return (
      <Slider
        dots={true}
        infinite={true}
        speed={1000}
        slidesToScroll={1}
        arrows={true}
        slidesToShow={1}
      >
        <div className="live-radio"></div>
        <div className="live-radio"></div>
        <div className="live-radio"></div>
        <div className="live-radio"></div>
        <div className="live-radio"></div>
      </Slider>
    );
  }
}
