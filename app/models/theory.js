const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// create schemas
// schema for each individual theory comment.
const commentSchema = new Schema({
comment: String
});

// schema for each theory.
const  theorySchema = new Schema({
	title: String,
	description: String,
	comments: [commentSchema]
});

// create model
const theoryModel = mongoose.model('Theory', theorySchema);


// export the model
module.exports = theoryModel;

