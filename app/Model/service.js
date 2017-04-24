var mongoose = require('mongoose');
  //  Schema = mongoose.Schema,
    //autoIncrement = require('mongoose-auto-increment');


var serviceSchema = mongoose.Schema({
    Service_Name:{
        type:String,
        unique:true,
    },
    Service_Description:String,
    Price: Number,
    Service_id:Number,

    email :String,

})


var Services = mongoose.model('service', serviceSchema);

module.exports = Services;
