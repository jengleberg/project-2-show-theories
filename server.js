// grab our dependencies

const express = require('express');
	app = express();
	port = process.env.PORT || 8080;
	expressLayouts = require('express-ejs-layouts');
	mongoose = require('mongoose');

// configure our application ==================
// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

//set ejs as our template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// connect to our database
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/show-theories");

// set the routes ==========================
app.use(require('./app/routes'));



// start our server ========================
app.listen(8080, function() {
	console.log('Listening on port 8080');
});
