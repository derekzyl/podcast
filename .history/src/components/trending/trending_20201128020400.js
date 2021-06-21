import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./trending.css";

function Trending() {
  return (
    <div class="trending">
      <h4>Trending</h4>
      <Carousel showArrows={true}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1606486746458-e44951581ade?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1606471970374-ba8d5ce8f3c0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="" alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="" alt="" />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Trending;
