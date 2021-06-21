import React,{Component, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
    padding: '5px',
    margin: '20px',
    height : '200px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

interface PlaylistState {
  currentMusicIndex: number
}


const MediaControlCard =({title, image, trackUrl, id})=>{


  
  const [currentMusicIndex, setCurrentMusicIndex]  = useState(0)


 const handleClickPrevious = (): void =>{
  setCurrentMusicIndex((prevState)=>({
    currentMusicIndex: prevState.currentMusicIndex ===0 ? id.length- 1 : prevState.currentMusicIndex - 1
  }))
}

const handleClickNext = (): void =>{
  setCurrentMusicIndex((prevState)=>({
    currentMusicIndex: prevState.currentMusicIndex < id.length - 1 ? prevState.currentMusicIndex + 1: 0
  }))
}

 

     const classes = useStyles();
     const theme = useTheme();


  return (
    <Card className={classes.root} style= {{backgroundImage: `url(${image})`}}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
         
        </CardContent>
        <div className={classes.controls}>
      
   
        </div>
      </div>
    
      
      <AudioPlayer
      style = {{background: 'transparent' }}
      src ={trackUrl}
      showSkipControls = {true}
    onClickNext={handleClickNext}
    onPlay
    onClickPrevious ={handleClickPrevious}
      
      />
    </Card>
  );
}




export default MediaControlCard
