module.exports = {

	//show all theories
	showTheories: function(req, res) {
		// create dummy theories
		const theories = [
		 { name: 'Theory1', slug: 'theory1', description: 'Jon Snow is a Targariyn.'},
		 { name: 'Theory2', slug: 'theory2', description: 'Sheldon is dreaming'},
		 { name: 'Theory3', slug: 'theory3', description: 'Kristen shot J.R.'}
		];

		// return a view with data
		res.render('pages/theories', {theories: theories});
	}, 

	// show a single theory
	showSingle: function(req, res) {
		// get a single theory
		const theory = { name: 'Theory1', slug: 'theory1', description: 'Jon Snow is a Targariyn.'}
		res.render('pages/single', {theory: theory });
	}


};