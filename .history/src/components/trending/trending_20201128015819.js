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
      >
        <div>
          <img src="https://images.unsplash.com/photo-1606486746458-e44951581ade?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Trending;
