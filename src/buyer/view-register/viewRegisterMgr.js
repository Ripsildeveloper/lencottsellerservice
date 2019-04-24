var viewRegisterDA = require('./viewRegisterDA');

exports.findRegistration = function (req, res) {
    try {
        viewRegisterDA.findRegistration(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.showUserTypeDetail = function (req, res) {
    try {
        viewRegisterDA.showUserTypeDetail(req, res);
    } catch (error) {
        console.log(error);
    }
}
