import React, { Component } from "react";
import Slider from "react-slick";
import "./radio.css";
export default class Radio extends Component {
  render() {
    return (
      <Slider dots={true} infinite={true} speed={1000} slidesToScroll={1} arrows={true} slidesToShow={1} className={classes.slider}>
    <img src={imageUrl1} width="100%" />
    <img src={imageUrl2} width="100%" />
    <img src={imageUrl3} width="100%" />
    <img src={imageUrl4} width="100%" />
</Slider>
    )
  }