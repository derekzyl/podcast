import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./trending.css";
import useStyles from './style'

function Trending() {
    const classes = useStyles();
    return (
    <div class="trending">
      <h4>Trending</h4>
          
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Articles
      </Typography>
    </div>
  );
}

export default Trending;
