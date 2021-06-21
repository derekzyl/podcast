import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./trending.css";

function Trending() {
  return (
    <div class="trending">
      <h4>Trending</h4>
      <div className="trending-container"></div>
    </div>
  );
}

export default Trending;
