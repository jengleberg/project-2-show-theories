const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// create schema

const commentSchema = new Schema({
comment: String
});


const  theorySchema = new Schema({
	title: String,
	description: String,
	comments: [commentSchema]
});





// create model
const theoryModel = mongoose.model('Theory', theorySchema);


// export the model
module.exports = theoryModel;

