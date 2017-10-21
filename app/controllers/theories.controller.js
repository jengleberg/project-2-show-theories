//requiring our theoryModel and giving it a constant to use in the controller functions below
const Theory = require('../models/theory');

//exporting our controller functions to be used in theory routes
module.exports = {
	showTheories: showTheories,
	showSingle: showSingle,
	seedTheories: seedTheories,
	showCreate: showCreate,
	processCreate: processCreate,
	showEdit: showEdit,
	processEdit: processEdit,
	deleteTheory: deleteTheory
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
		res.render('pages/theories', { 
			theories: theories,
			success: req.flash('success')
			 });
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
			//This is being rendered to the ejs file.  Change to be Shows?
			res.render('pages/single', {
			theory: theory, 
			success: req.flash('success')
			}); 
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

	// Show the create form
	function showCreate(req, res) {
		res.render('pages/create', {
			errors: req.flash('errors')
		});
	}

	// process the creation form
	function processCreate(req, res) {
		// validate information being submitted
		req.checkBody('title', 'Title is required.' ).notEmpty();
		req.checkBody('description', 'Description is required.').notEmpty();

		// if errors, redirect and save errors to flash
		const errors = req.validationErrors();
		if (errors) {
			req.flash('errors', errors.map(err => err.msg));
			return res.redirect('/theories/create');
		}

		// create a new Theory
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

			// redirect to the newly created theory. SHOW PAGE????
			res.redirect('back');
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


		//finding a current theory
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

	// delete a theory
	function deleteTheory(req, res) {
		Theory.remove({_id: req.params.id}, function(err) {
			// set flash data
			// redirect to the theories page
			req.flash('success', "Theory Deleted");
			res.redirect('/theories');
		});
	}

