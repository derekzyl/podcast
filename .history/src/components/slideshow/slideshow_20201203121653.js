import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

function Slideshow() {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      maxHeight: 200,
    },
  });

  const classes = useStyles();
  return (
    <div className="container">
      <Slider {...settings}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGl6YXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <div>
          <img
            src="https://images.unsplash.com/photo-1602526211905-6adc54adb8d2?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Credit to Alisa Anton on Unsplash"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1606630987275-5b005f4421ac?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8QkpKTXR0ZURKQTR8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Credit to Igor Ovsyannykov on Unsplash"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1606851181064-b7507b24377c?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Credit to Pierre Châtel-Innocenti on Unsplash"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1606757389929-2045c644233b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8X2hiLWRsNFEtNFV8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Credit to Richard Nolan on Unsplash"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHNvY2NlcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Credit to Cristina Gottardi on Unsplash"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
