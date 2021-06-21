import React from "react";
import "./radio.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import radio from "../../images/radio.jpg";

function Radio() {
  return (
    <div className="radio">
      <div className="radio-left">
        <img src={radio} alt="" />
      </div>
      <div className="radio-center">
        <h3>Listen to our live radio programs</h3>
      </div>
      <div className="radio-right">
        <PlayCircleFilledWhiteIcon />
      </div>
    </div>
  );
}

export default Radio;
