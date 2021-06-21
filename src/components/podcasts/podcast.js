import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import axios from 'axios'



import PodcastContent from '../podcasts/podcastProps/PodcastContents'
import PodcastList from '../podcasts/podcastProps/PodcastList'
import Img1 from '../../images/dummy/hey.jpg'
import Img2 from '../../images/dummy/hey1.jpg'
import Img3 from '../../images/dummy/hey2.jpg'
import Img4 from '../../images/dummy/hey3.jpg'

import Imagine from '../../images/dummy/imagine.mp3'


const drawerWidth = 240;
// const pods = [
//   {id:0, name : 'podcast 1', image:Img1, category:['music', 'games']},
//   {id:1, name : 'podcast 2', image:Img2, category:['dance', 'science']},
//   {id:2, name : 'podcast 3', image:Img3, category:['tech', 'motion']},
//   {id:3, name : 'podcast 4', image:Img4, category:['dance', 'fly']},
// ]

//  export const episodes = [
 

// ]





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const PermanentDrawerLeft =()=> {
  const [searchTerm, setSearchTerm] = useState('')
  const [podcasts, setPodcasts]= useState([])
  const [episodes, setEpisodes] = useState([
    {id:0, title:'solar', image: Img1, trackUrl:Imagine},
    {id:1, title:'time', image: Img2, trackUrl:Imagine},
    {id:2, title:'lover', image: Img3, trackUrl:Imagine},
    {id:3, title:'giver', image: Img4, trackUrl:Imagine}
  ])
  const [selectedPodcast, setSelectedPodcast] = useState(null)
  const classes = useStyles();



  const onInputTyped = (e) =>{
    //console.log('on input typed :'+ e.target.value)
setSearchTerm(e.target.value)
  }


const onSearchBtnClk =  (e) =>{

 axios({
  url: 'http://localhost:9000/search',
  method: 'post',
  data: {
    term: searchTerm.trim().toLocaleLowerCase()},
options:{
  headers:{Accept:'application/json'}
}
})
.then(({data}) =>{
  console.log('PODCAST:' + JSON.stringify(data))
 setPodcasts(data.podcasts)
})
.catch(err=>{

})

}

const selectPodcast = (podcast, event) =>{
event.preventDefault()

setSelectedPodcast(podcast)
}

useEffect(() =>{
  if (!selectedPodcast)
  return
  const url = `http://localhost:9000/feed?url=${selectedPodcast.feed}`
  axios({
    url,
    method: 'get'
  })
  .then(({data}) =>{

  

    const {item} = data
    console.log('track' +JSON.stringify(item))
    const track = item.map((episode, index)=>{
      return {
        id:index, 
        title:episode.title[0], 
        image: selectedPodcast.image,
        trackUrl:episode.enclosure[0]['$'].url}
      }
     
    )
    setEpisodes(track)

  })  

  .catch(err=>{
  
  })
},[selectedPodcast])
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
         <div>
                <h3>Search podcast</h3>
                <input onChange ={onInputTyped} type='text'></input>
                <button onClick = {onSearchBtnClk}>go</button>
            </div>
        
        <div className={classes.toolbar} />
        <Divider />
        <List>
        { podcasts.map(podcast=>{
         return <PodcastList key={podcast.id}  {...podcast} onSelect ={(e) => selectPodcast(podcast, e )}/>
       })}
        </List>
    
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {episodes.map(episode =>{
          return <PodcastContent key = {episode.id} {...episode} />
        })}
      </main>
    </div>
  );
}
export default  PermanentDrawerLeft










