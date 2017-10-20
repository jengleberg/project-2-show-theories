var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
	local : {
		email: String,
		password: String,
	}
});

// Methods to use the bcrypt npm ===========================
// generating a hash and salting it 8 times.
User.methods.encrypt = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid.  
User.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', User);