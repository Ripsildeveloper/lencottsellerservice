var mongoose = require('mongoose');

const MoqSchema  = new mongoose.Schema({
    moqName: String,
    moqDescription: String,
    products: [String],
    moqQuantity: Number
});


const MOQ = mongoose.model('moq', MoqSchema);
module.exports = MOQ;