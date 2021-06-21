import React from "react";

import Header from "../header/header";
import Article from "../articles/article";
import Trending from "../trending/trending";

function Home() {
  return (
    <div class="home">
      <Header />
      <Article />
      <Trending />
    </div>
  );
}

export default Home;
