// load environment variables
require('dotenv').config();

// grab our dependencies
const express = require('express');
	app = express();
	port = process.env.PORT || 8080;
	expressLayouts = require('express-ejs-layouts');
	mongoose = require('mongoose');
	bodyParser = require('body-parser');
	session = require('express-session');
	cookieParser = require('cookie-parser');
	flash = require('connect-flash');
	expressValidator = require('express-validator');

// configure our application ==================
//set sessions in cookie parser
app.use(cookieParser());
app.use(session({
	secret: process.env.SECRET,
	cookie: {maxAge: 60000},
	resave: false, // forces the session to be saved back to the store
	saveUninitialized: false // don't save unmodified
}));
app.use(flash());

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


// set the routes ==========================
app.use(require('./app/routes'));

// start our server ========================
app.listen(8080, function() {
	console.log('Listening on port 8080');
});
