var mongoose = require('mongoose');

var serviceSchema = mongoose.Schema({
    Service_Name:{
        type:String,
        unique:true,
    },
    Service_Description:String,
    Price: Number,
})


var Services = mongoose.model('service', serviceSchema);

module.exports = Services;
