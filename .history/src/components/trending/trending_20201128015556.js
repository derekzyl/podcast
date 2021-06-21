import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";

import "./trending.css";

function Trending() {
  return (
    <div class="trending">
      <h4>Trending</h4>
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      ></Carousel>
    </div>
  );
}

export default Trending;
