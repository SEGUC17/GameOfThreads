var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    BuiName:String,
    Review:String,
})


var Reviews = mongoose.model('review', reviewSchema);

module.exports = Reviews;
