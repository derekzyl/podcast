import React from "react";

import Header from "../header/header";
import Radio from "../radio/radio";
import Article from "../articles/article";
import Trending from "../trending/trending";

function Home() {
  return (
    <div class="home">
      <Header />
      <Article />
      <Trending />
      <Radio />
    </div>
  );
}

export default Home;
