var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  local: {
    Buisness_name:String,
    Buisness_location:String,
    Buisness_website: String,
    created_at: Date,
    Flag : false,
    email: String,
    password: String,
  },
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};
var User = mongoose.model('user', userSchema);


module.exports = User;
