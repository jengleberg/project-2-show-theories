var Theory = require('../models/theory');
const axios = require('axios');
const request = require('request');


function popularShows(req, res, next) {
  res.render('pages/shows');
}

// show details
function getShow(req, res, next) {
  let showId = req.query;
  axios.get('https://api.themoviedb.org/3/tv/' + showId.id + '?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US')
  .then(function(response) {  
  res.render('pages/single', {response});
  });
}




module.exports = {
  popularShows: popularShows,
  getShow: getShow,
  };