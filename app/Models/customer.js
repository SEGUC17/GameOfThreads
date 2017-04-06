var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var customerSchema = mongoose.Schema({
  local: {
    Name:String,
    Address:String,
    PhoneNumber: Number,
    email: String,
    password: String,
  },
facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
});

customerSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

customerSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};
var Customer = mongoose.model('Customer', customerSchema);


module.exports = Customer;
