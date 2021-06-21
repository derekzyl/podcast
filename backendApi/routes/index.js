var express = require('express');
var router = express.Router();
var axios = require('axios')
var {parseString} = require('xml2js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', async(req, res, next) => {
  const url = 'https://itunes.apple.com/search?term=sports&country=US&media=podcast' 
const {data} = await axios({
  url,
  method:'get',
  options: {
    headers:{Accept:  'application/json'}
  }
})
 
  
const {results} = data
const podcasts = results.map(podcast =>{
  return {
    name : podcast.artistName,
    trackName: podcast.trackName,
    icon: podcast.artworkUrl600,
    genres: podcast.genres,
    feed: podcast.feedUrl
  }
} )
res.json({
  podcasts})
});
 


router.post('/search', async(req, res, next) => {
  const searchTerm = req.body.term
  const url = `https://itunes.apple.com/search?term=${searchTerm}&country=US&media=podcast` 
const {data} = await axios({
  url,
  method:'get',
  options: {
    headers:{Accept:  'application/json'}
  }
})
 
  
const {results} = data
const podcasts = results.map((podcast, idx) =>{
  return {
    name : podcast.artistName,
    trackName: podcast.trackName,
    image: podcast.artworkUrl600,
    cetegory: podcast.genres,
    feed: podcast.feedUrl,
    id: idx
  }
} )
res.json({
  podcasts})
});
 
router.get('/feed', async(req, res, next) =>{
  const url = req.query.url
  const {data} = await axios({
    url,
    method: 'get'
  })
  parseString(data, (err, json)=>{
    if (err) {
      return
    }
    const {rss} = json
    const {channel} = rss
    const payload = channel[0]
    res.json(payload)
  })
 

//  res.json({
//    data:'this is it',
//    url

//  })
 
})

module.exports = router;


