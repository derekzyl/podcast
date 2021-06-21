import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/home";
import Podcast from './components/podcasts/podcast'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path ='/podcast' component={Podcast}/>
      </Switch>
    </div>
  );
}

export default App;
