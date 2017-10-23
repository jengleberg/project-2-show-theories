//requiring our theoryModel and giving it a constant to use in the controller functions below
const Theory = 	require('../models/theory');

// Played around with both and used axios for the api call.
const axios = 	require('axios');
const request = require('request');

//exporting our controller functions to be used in routes.js
module.exports = {
	popularShows: popularShows,
  	getShow: getShow,
	showTheories: showTheories,
	showCreate: showCreate,
	processCreate: processCreate,
	showEdit: showEdit,
	processEdit: processEdit,
	deleteTheory: deleteTheory,
	seedTheories: seedTheories,
	};

// Loads popular shows into shows page. This is called via the app.js
	function popularShows(req, res, next) {
  		res.render('pages/shows');
	}

// Single show page.  Used axios to call the api and return the single show.  
	function getShow(req, res, next) {
  		let showId = req.query;
  		axios.get('https://api.themoviedb.org/3/tv/' + showId.id + '?api_key=6c9ee9c307b42ea4d152062ce4a5e1eb&language=en-US')
  		.then(function(response) {  
  		res.render('pages/single', {response});
  	});
 	}

//show all theories
	function showTheories(req, res) {
	Theory.find({}, function(err, theories) {
		if (err) {
		res.status(404);
		res.send('Something is wrong, look at the theories.controller.');
	}
// return an ejs view of the theories page with theories data
		res.render('pages/theories', { 
		theories: theories,
		success: req.flash('success')
	});
	});
	}
	
// Show the create theory form from the ejs view
	function showCreate(req, res) {
		res.render('pages/create', {
		errors: req.flash('errors')
	});
	}

// process the creation form
	function processCreate(req, res) {
// validate information being submitted includes title and description
		req.checkBody('title', 'Title is required.' ).notEmpty();
		req.checkBody('description', 'Description is required.').notEmpty();
// if errors, redirect and save errors to the flash message on the ejs page
		const errors = req.validationErrors();
		if (errors) {
		req.flash('errors', errors.map(err => err.msg));
		return res.redirect('/theories/create');
		}
// if no errors create a new Theory
		const newTheory = new Theory({
		title: req.body.title,
		description: req.body.description,
		});

// save theory to db
		newTheory.save(function(err) {
		if (err) {
		return console.log("save error: " + err);
		}
//set a successful flash message
		req.flash('success', "successfully created theory!");
// redirect to the newly created theory. 
		res.redirect('/theories');
	});
	}

//show the edit form
	function showEdit(req, res) {
		Theory.findOne({ _id: req.params.id }, function (err, theory) {
		res.render('pages/edit', {
		theory: theory,
		errors: req.flash('errors')
		});
	});
	}

// process the edit form
	function processEdit(req, res) {
		req.checkBody('title', 'Title is required.' ).notEmpty();
		req.checkBody('description', 'Description is required.').notEmpty();
// if errors, redirect and save errors to flash
		const errors = req.validationErrors();
		if (errors) {
		req.flash('errors', errors.map(err => err.msg));
		return res.redirect('/theories/${req.params.id}/edit');
		}
//finding the theory that is being edited
		Theory.findOne({ _id: req.params.id }, function(err, theory) {
//updating that theory
		theory.title = req.body.title;
		theory.description = req.body.description;
		theory.save(function(err) {
		if (err) {
		return console.log("save error: " + err);
		}
// flash message
		req.flash('success', "Successfully updated theory.");
// redirect the user back tot he theories page
		res.redirect('/theories');
		});
	});
	}

// delete a theory using the remove method
	function deleteTheory(req, res) {
		Theory.remove({_id: req.params.id}, function(err) {
// set flash data
// redirect to the theories page
		req.flash('success', "Theory Deleted");
		res.redirect('/theories');
	});
	}

// seed our database
	function seedTheories(req, res) {
// create dummy theories
		const theories = [
		 	{ title: 'Theory1', description: 'Jon Snow is a Targariyn.', show: 'This is one comment'},
		 	{ title: 'Theory2', description: 'Sheldon is dreaming', show: '1418'},
		 	{ title: 'Theory3', description: 'Kristen shot J.R.', show: 'This is one comment'}
			];
//use the Theory model to insert/save
		Theory.remove({}, function() {
		for (theory of theories) {
		var newTheory = new Theory(theory);
		newTheory.save();
		}
	});
// seeded
		res.send('Database seeded!');
	}
