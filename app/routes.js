// create a new express router

const express = require('express'),
	router = express.Router();
	mainController = require('./controllers/main.controller');
	theoriesController = require('./controllers/theories.controller');

	//Shows Controller???

// export router
module.exports = router;

// define routes
// main routes
router.get('/', mainController.showHome);

// theory route
router.get('/theories', theoriesController.showTheories); // This might need to be changed to be the shows route. As I should display the shows first.

// seed theories
router.get('/theories/seed', theoriesController.seedTheories);



// create theories
router.get('/theories/create', theoriesController.showCreate); // routes us and shows our created theory.  
router.post('/theories/create', theoriesController.processCreate); // routes us and creates the theory in the db.  
// edit theories
// delete theories



//show a single theory
router.get('/theories/:id', theoriesController.showSingle);  // This might need to be changed to be a shows route???

