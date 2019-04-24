var mongoose = require('mongoose');

const HeaderSchema = new mongoose.Schema({
    logoImageName: String,
    status: Number


});

const Header = mongoose.model('header', HeaderSchema);
module.exports = Header;