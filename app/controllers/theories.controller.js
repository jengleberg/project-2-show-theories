const Theory = require('../models/theory');

module.exports = {
	showTheories: showTheories,
	showSingle: showSingle,
	seeTheories: seedTheories
};

	//show all theories
		function showTheories(req, res) {
		// get all theories
		Theory.find({}, function(err, theories) {
			if (err) {
				res.status(404);
				res.send('Theories not found');

			}
		
		// return a view with data
		res.render('pages/theories', {theories: theories});
	   });
	}
	
	// show a single theory
		function showSingle(req, res) {
		// get a single theory
		const theory = { name: 'Theory1', description: 'Jon Snow is a Targariyn.'};
		res.render('pages/single', {theory: theory });
	}

	// seed our database
		function seedTheories(req, res) {
		// create some theories
		// create dummy theories
		const theories = [
		 { title: 'Theory1', description: 'Jon Snow is a Targariyn.'},
		 { title: 'Theory2', description: 'Sheldon is dreaming'},
		 { title: 'Theory3', description: 'Kristen shot J.R.'}
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



