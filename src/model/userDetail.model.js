var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    location: String,
    userType: String,
    mobileNumber: Number,
});

const User = mongoose.model('User', UserSchema);
module.exports = User;