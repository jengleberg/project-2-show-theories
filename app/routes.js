// create a new express router

const express = require('express'),
	router = express.Router();
	mainController = require('./controllers/main.controller');
	theoriesController = require('./controllers/theories.controller');
	usersController = require('./controllers/users.controller');

function authenticatedUser(req, res, next) {
	//If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();

	// Otherwise the request is always redirected to the home page
    res.redirect('/');
  }

	//Shows Controller???

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
//router.get('/secret', authenticatedUser, usersController.secret);

// logout route
router.get('/logout', usersController.getLogout);



// ===============================
// THEORY ROUTES =================
// ===============================

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
router.get('/theories/:id/delete', theoriesController.deleteTheory);

//show a single theory
router.get('/theories/:id', theoriesController.showSingle);  // This might need to be changed to be a shows route???

