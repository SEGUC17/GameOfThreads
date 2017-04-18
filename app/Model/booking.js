var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
    title:{
        date:Date,
        username:String, 
        packageID:Number,
        status:String
    }
    
})

var booking = mongoose.model("booking", bookingSchema);

module.exports = booking;