var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
    title:{
        rate:Number,
        username:String, 
        serviceProviderID:Number
    }
    
})

var rating = mongoose.model("rating", ratingSchema);

module.exports = rating;