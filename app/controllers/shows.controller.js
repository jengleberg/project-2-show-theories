var Show = require('../models/shows');
const axios = require('axios');
const request = require('request');


function popularShows(req, res, next) {
	res.render('pages/shows', req.user);
}

// Movie profile controller
function showDetail(req, res, next) {
	let showId = req.query;
	axios.get('https://www.episodate.com/api/search?q=&id=' + mediaId.id)
	.then(function(response) {	
	res.render('single', {response});
	});
}








module.exports = {
	popularShows: popularShows,
	showDetail: showDetail,
};