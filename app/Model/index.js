var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/sprint2");

mongoose.set("debug", true);

module.exports.User = require("./user");
module.exports.Customer = require("./customer");
