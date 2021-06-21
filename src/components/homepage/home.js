import React from "react";

import Header from "../header/header";
import Radio from "../radio/radio";
import Article from "../articles/article";
import Trending from "../trending/trending";
import Footer from "../footer/footer";

function Home() {
  return (
    <div class="home">
      <Header />
      <Article />
      <Trending />
      <Radio />
      <Footer />
    </div>
  );
}

export default Home;
