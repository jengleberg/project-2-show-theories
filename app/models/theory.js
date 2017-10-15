const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// create schema
const  theorySchema = new Schema({
	title: String,
	description: String
});

// middleware -----
// make sure the slug is created from the name
//theorySchema.pre('save', function(next) {
	//this.slug = slugify(this.name);
//});



// create model
const theoryModel = mongoose.model('Theory', theorySchema);


// export the model
module.exports = theoryModel;

// function to slugify a name that i pulled off of a scotch.io post
//function slugify(text) {
 //return text.toString().toLowerCase().trim()
   // .replace(/\s+/g, '-')           // Replace spaces with -
    //.replace(/&/g, '-and-')         // Replace & with 'and'
    //.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    //.replace(/\-\-+/g, '-');        // Replace multiple - with single -
    //}