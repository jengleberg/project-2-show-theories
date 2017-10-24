// create a new express router

const 	express = require('express'),
		router = express.Router();
		mainController = require('./controllers/main.controller');
		theoriesController = require('./controllers/theories.controller');
		usersController = require('./controllers/users.controller');

// Authentication function		

function authenticatedUser(req, res, next) {
	//If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next();
	// Otherwise the request is always redirected to the home page
    res.redirect('/');
}

// export our router to the server where it is required
module.exports = router;

//====================
// DEFINING OUR ROUTES
//====================

// Main Route
router.get('/', mainController.showHome);

// ===============================
// SIGNUP, LOGIN and LOGOUT ROUTES
// ===============================


// Signup Routes
router.get('/signup', usersController.getSignup);
router.post('/signup', usersController.postSignup);

//Login Routes
router.get('/login', usersController.getLogin);
router.post('/login', usersController.postLogin);

// Logout Route
router.get('/logout', usersController.getLogout);

// Secret Route
router.get('/secret', authenticatedUser, usersController.secret);

// ===============================
// SHOWS ROUTES =================
// ===============================

// Popular Shows.  Main Page
router.get('/shows', theoriesController.popularShows);

// Single Show Route
router.get('/single', theoriesController. getShow);

// ===============================
// THEORY ROUTES =================
// ===============================

// Show Theory Route
router.get('/theories', theoriesController.showTheories); 

// Create Theories Routes
router.get('/theories/create', theoriesController.showCreate); // routes us to the create theory form.  
router.post('/theories/create', theoriesController.processCreate); // posts the new theory to the DB.  

// Edit Theories Routes
router.get('/theories/:id/edit', theoriesController.showEdit); // routes us to the edit theory form
router.post('/theories/:id', theoriesController.processEdit); // posts the edited Theory to the DB

// Delete Theory Route
router.get('/theories/:id/delete', theoriesController.deleteTheory); // route to delete the Theory

// Seed Theory Route
router.get('/theories/seed', theoriesController.seedTheories);
