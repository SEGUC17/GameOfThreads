var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var customerSchema = mongoose.Schema({
  
    Name:String,
    Address:String,
    PhoneNumber: Number,
    email: String,
    password: String,
});

customerSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

customerSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
var Customer = mongoose.model('Customer', customerSchema);


module.exports = Customer;
