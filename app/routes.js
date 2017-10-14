// create a new express router

const express = require('express'),
	router = express.Router();
	mainController = require('./controllers/main.controller');
	theoriesController = require('./controllers/theories.controller');

// export router
module.exports = router;

// define routes
// main routes
router.get('/', mainController.showHome);

// theory route
router.get('/theories',    theoriesController.showTheories);
router.get('/theories/:slug', theoriesController.showSingle); 

// create theories
// edit theories
// delete theories



