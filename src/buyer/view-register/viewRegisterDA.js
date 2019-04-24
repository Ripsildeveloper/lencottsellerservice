'use strict';
var BuyerDetail = require ('../../model/userDetail.model');

exports.findRegistration  = function (req, res) {
    BuyerDetail.find({}).select().exec(function (err, details) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(details);
        }
    }); 
}

exports.showUserTypeDetail = function (req, res) {
    BuyerDetail.find({
        'userType': req.params.userType
    }, function (err, user) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.send(user);
        }
    });

};


