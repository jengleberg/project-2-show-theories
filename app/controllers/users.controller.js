var passport = require('passport');

// GET /signup
function getSignup(request, response, next) {
	response.render('signup', {message : request.flash('signupMessage')});
}

// POST /signup
function postSignup(request, response, next) {
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	});
}

//GET /login
function getLogin(request, response) {
	res.render('pages/login', {message: req.flash('loginMessage')});
}

// POST /login
function postLogin(request, response, next) {
	let loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	});

	return loginStrategy(request, response, next);
}

// GET / logout
function getLogout(request, response, next) {
	request.logout();
	response.redirect('/');
}

// Restricted page
function secret(request, response, next) {
	response.json("This is my secret page");
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
};