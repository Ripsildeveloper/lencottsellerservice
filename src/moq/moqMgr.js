var moqDA = require('./moqDA');

exports.createMoq = function (req, res) {
    try {
        moqDA.createMoq(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.viewMoq = function (req, res) {
    try {
        moqDA.viewMoq(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.addProducts = function (req, res) {
    try {
        moqDA.addProducts(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteMoq = function (req, res) {
    try {
        moqDA.deleteMoq(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getProducts = function (req, res) {
    try {
        moqDA.getProducts(req, res);
    } catch (error) {
        console.log(error);
    }
}




