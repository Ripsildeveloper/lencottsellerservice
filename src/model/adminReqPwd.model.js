var mongoose = require('mongoose');

const AdminForgotPwdSchema  = new mongoose.Schema({
    Key: String,
    ExpiryDate: Date,
    isActive: Boolean
});

const AdminForgotPwd = mongoose.model('adminForgotPwd', AdminForgotPwdSchema);
module.exports = AdminForgotPwd;