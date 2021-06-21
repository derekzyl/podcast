import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme)=>({
  root: {
      float: 'left',
    maxWidth: 'auto',
    width: '100%'
  },
  avat: {
      float:'left',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const  Media=({name, image, category, onSelect})=> {
  const classes = useStyles();
  

  return (
    <a href ='#'  onClick={onSelect}>
    <Card className={classes.root} onClick={onSelect} >
      <CardActionArea onClick={onSelect}>
        <CardMedia onClick={onSelect}
        height = '100%'>
        <div className={classes.avat}>
        <Avatar alt="Cindy Baker" src={image} />
            </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
           {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     
      </CardActions>
    </Card>
    </a>
  );
}
export default Media

//itunes.apple.com/search?term=sports&country=US&media=podcast