var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
	local : {
		email: String,
		password: String,
	}
});

User.methods.encrypt = function(password) {
	return becrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.method.validPassword = function(password) {
	return becrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', User);