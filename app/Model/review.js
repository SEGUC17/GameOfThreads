var mongoose = require('mongoose');

var reviewSchema = mongoose.Schema({
    Buissnes_Name:String,
    Review:String,
})


var Reviews = mongoose.model('review', reviewSchema );

module.exports = Reviews;
