var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/show_theories");



module.exports.Theory = require("./theory.js");
module.exports.User = require("/user.js");


