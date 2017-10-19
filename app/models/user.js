var mongoose = require('mongoose');
var bcrypt = require('becrypt');

var User = mongoose.Schema({
	local : {
		email: String,
		password: String,
	}
});

module.exports = mongoose.model('User', User);