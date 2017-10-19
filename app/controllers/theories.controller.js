//requiring our theoryModel and giving it a constant to use in the controller functions below
const Theory = require('../models/theory');

//exporting our controller functions to be used in theory routes
module.exports = {
	showTheories: showTheories,
	showSingle: showSingle,
	seedTheories: seedTheories
};

	//show all theories
		function showTheories(req, res) {
		// get all theories
		Theory.find({}, function(err, theories) {
			if (err) {
				res.status(404);
				res.send('Something is wrong, look at the theories.controller.');

			}
		
		// return a view with data
		res.render('pages/theories', { theories: theories });
	   });
	}
	
	// show a single theory
		function showSingle(req, res) {
		// get a single theory
		Theory.findOne({_id: req.params.id}, function(err,theory) {
			if (err) {
				res.status(404);
				res.send('Something is wrong, look at the theories.controller.');
			}

			res.render('pages/single', {theory: theory }); //This is being rendered to the ejs file.  Change to be Shows?
		});
	}

	// seed our database
		function seedTheories(req, res) {
		// create some theories
		// create dummy theories
		const theories = [
		 { title: 'Theory1', description: 'Jon Snow is a Targariyn.', comments: 'This is one comment'},
		 { title: 'Theory2', description: 'Sheldon is dreaming', comments: 'This is one comment'},
		 { title: 'Theory3', description: 'Kristen shot J.R.', comments: 'This is one comment'}
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



