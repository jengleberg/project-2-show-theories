var passport = require('passport');

// GET /signup
function getSignup(request, response, next) {
	response.render('pages/signup', {message : request.flash('signupMessage')});
}

// POST /signup
function postSignup(request, response, next) {
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/theories',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return signupStrategy(request, response, next);
}

//GET /login
function getLogin(request, response) {
	response.render('pages/login', {message: request.flash('loginMessage')});
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