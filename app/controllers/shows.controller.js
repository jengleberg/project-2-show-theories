var Show = require('../models/shows');
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

// Add movie controller
function addShowtoList(req, res, next) {
  console.log("route hit");
  let showId = req.query;
  axios.get('https://api.themoviedb.org/3/tv/' + showId.id + '?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US')
  .then(function(response) {
  db.User.findOne({'local.email' : req.user.local.email}, function(err, data) {
    let shows = data.queuedShows;
    let showId = JSON.stringify(response.data.id);
    let newShow = new db.Shows ({
          id: response.data.id,
          title: response.data.title,
          poster_path: response.data.poster_path,
    });
    console.log(newShow);
    let results = shows.filter(function(show) {
      if (show.id.includes(showId)) {
        return true;
      }
       return false;
    });
    console.log(results);
    if(results.length == 0) {
      req.user.queuedShows.push(newShow);
      req.user.save();
    }
    });
  });
}


function queuedShows(req, res, next) {
  console.log(req.user.local.email);
  db.User.findOne({'local.email' : req.user.local.email}, function(err, data){
  if (err) throw err;
  res.render('queued-shows', {data});
});
}


module.exports = {
  popularShows: popularShows,
  getShow: getShow,
  addShowtoList: addShowtoList,
  queuedShows: queuedShows,
};