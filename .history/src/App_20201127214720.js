import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Radio from "./components/radio/radio";
import Article from "./components/articles/article";
import Trending from "./components/articles/trending";

function App() {
  return (
    <div className="App">
      <Header />
      <Radio />
      <Article />
      <Trending />
    </div>
  );
}

export default App;
