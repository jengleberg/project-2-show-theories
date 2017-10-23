const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const Show = new Schema ({
	id: String,
	name: String,
});



//exports our model
module.exports = mongoose.model('Show', Show);