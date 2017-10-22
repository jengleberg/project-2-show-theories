const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const Show = new Schema ({
	id: String,
	name: String,
	permalink: String,
	description: String,
	network: String,
	image_thumbnail_path: String
});



//exports our model
module.exports = mongoose.model('Show', Show);