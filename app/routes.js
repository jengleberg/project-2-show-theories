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
router.get('/theories/create', theoriesController.showCreate); // routes us to the create theory form.  
router.post('/theories/create', theoriesController.processCreate); // posts the new theory to the DB.  

// edit theories
router.get('/theories/:id/edit', theoriesController.showEdit);
router.post('/theories/:id', theoriesController.processEdit);
// delete theories



//show a single theory
router.get('/theories/:id', theoriesController.showSingle);  // This might need to be changed to be a shows route???

