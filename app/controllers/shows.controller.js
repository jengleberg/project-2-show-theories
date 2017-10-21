const request = require('request');

//requiring our shows Model and giving it a constant to use in the controller functions below
const Show = require('../models/shows');





function popularShows(req, response) {
	//console.log('Name: ${req.body.name}');
	let options = {
		url: "https://www.episodate.com/api/most-popular?page=1",
	};
	request(options, function(err, res, body) {
		if (err) console.log("ERROR: " + err);
		let shows = JSON.parse(body);
		let name = shows.name;
		console.log(req.body);
		response.render('pages/shows', {shows});

	});

}
module.exports = {popularShows: popularShows};


	
