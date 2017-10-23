// create a new express router

const express = require('express'),
	router = express.Router();
	mainController = require('./controllers/main.controller');
	theoriesController = require('./controllers/theories.controller');
	usersController = require('./controllers/users.controller');
	//showsController = require('./controllers/shows.controller');

function authenticatedUser(req, res, next) {
	//If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();

	// Otherwise the request is always redirected to the home page
    res.redirect('/shows');
  }

// export router
module.exports = router;


// define routes

// main route
router.get('/', mainController.showHome);

// ===============================
// SIGNUP, LOGIN and LOGOUT ROUTES
// ===============================

//login routes
router.get('/login', usersController.getLogin);
router.post('/login', usersController.postLogin);

// signup routes
router.get('/signup', usersController.getSignup);
router.post('/signup', usersController.postSignup);

// secret route
router.get('/secret', authenticatedUser, usersController.secret);

// logout route
router.get('/logout', usersController.getLogout);

// ===============================
// SHOWS ROUTES =================
// ===============================

// shows route / popular shows page 1 for now
router.get('/shows', theoriesController.popularShows);

// single shows route / taking over the singles theory page for now.
router.get('/single', theoriesController. getShow);

// ===============================
// THEORY ROUTES =================
// ===============================

// theory route
router.get('/theories', theoriesController.showTheories); // 

// seed theories
router.get('/theories/seed', theoriesController.seedTheories);

// create theories
router.get('/theories/create', theoriesController.showCreate); // routes us to the create theory form.  
router.post('/theories/create', theoriesController.processCreate); // posts the new theory to the DB.  

// edit theories
router.get('/theories/:id/edit', theoriesController.showEdit); // routes us to the edit theory form
router.post('/theories/:id', theoriesController.processEdit); // posts the edited Theory to the DB

// delete theories
router.get('/theories/:id/delete', theoriesController.deleteTheory); // route to delete the Theory

//show a single theory
//router.get('/theories/:id', theoriesController.showSingle);  // This might need to be changed to be a shows route???

