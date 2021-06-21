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
          <div className="item-container">
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
        </div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="assets/4.jpeg" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="assets/5.jpeg" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="assets/6.jpeg" />
          <p className="legend">Legend 6</p>
        </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Trending;
