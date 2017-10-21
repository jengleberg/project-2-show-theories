const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const Show = new Schema ({
	name: String,
	permalink: String,
	description: String,
	network: String,
	image_path: String
});



//exports our model
module.exports = mongoose.model('Show', Show);