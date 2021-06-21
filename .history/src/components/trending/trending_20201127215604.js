import React from "react";import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import "./trending.css";
import useStyles from './style'

function Trending() {
    const classes = useStyles();
    return (
    <div class="trending"></div>
    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Trending
      </Typography>
    </div>
  );
}

export default Trending;
