// load environment variables
require('dotenv').config();
 	
// grab our dependencies
var express = require('express');
var	app = express();
var	port = process.env.PORT || 8080;
var	expressLayouts = require('express-ejs-layouts');
var	mongoose = require('mongoose');
var	bodyParser = require('body-parser');
var	session = require('express-session');
var	cookieParser = require('cookie-parser');
var	flash = require('connect-flash');
var	expressValidator = require('express-validator');
var	morgan = require('morgan');
var passport = require('passport');


// configure our application ==================
//set sessions in cookie parser
app.use(cookieParser());
//app.use(session({
	//secret: process.env.SECRET,
	//cookie: {maxAge: 60000},
	//resave: false, // forces the session to be saved back to the store
	//saveUninitialized: false // don't save unmodified
//}));
app.use(flash()); // used to display flash messages stored in session

// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

//set ejs as our template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// connect to our database
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/show_theories" );


// use body parser to grab the data entered into the create theory form.
app.use(bodyParser.urlencoded({ extended: true}));
app.use(expressValidator());

// require passport
require('./config/passport')(passport);

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

// required for passport
app.use(session({ secret: 'SHOW-THEORIES' })); // session secret
app.use(passport.initialize()); // initializes passport module
app.use(passport.session()); // used for persistent login sessions

app.use(morgan('dev')); 


// set the routes ==========================
app.use(require('./app/routes'));

// start our server ========================
app.listen(port);