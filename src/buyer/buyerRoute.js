var viewRegisterMgr = require('./view-register/viewRegisterMgr');

module.exports = function (app) {
        app.route('/buyer')
                .get(viewRegisterMgr.findRegistration);
        app.route('/buyer/:userType')
                .get(viewRegisterMgr.showUserTypeDetail);
}