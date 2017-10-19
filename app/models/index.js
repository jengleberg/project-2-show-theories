var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/show_theories");
var Theory = require('./theory');


module.exports.Theory = require("./theory.js");


