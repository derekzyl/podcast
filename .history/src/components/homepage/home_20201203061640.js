import React from "react";

import Header from "../components/header/header";
import Radio from "../components/radio/radio";
import Article from "../components/articles/article";
import Trending from "../components/trending/trending";

function Home() {
  return (
    <div class="home">
      <Header />
      <Radio />
      <Article />
      <Trending />
    </div>
  );
}

export default Home;
