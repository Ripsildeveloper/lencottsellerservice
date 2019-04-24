var Footer = require('../../model/footer.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');


exports.createFooter = function (req,  res) {

    Footer.find({}).select().exec(function (err, footerData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var footer = new Footer(req.body);
            if (footerData.length == 0) {
                
                    footer.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            Footer.find({}).select().exec(function (err, footerData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(footerData);
                                }
                            })
                        }
                    })
                

            } else {
                footerData[0].address = req.body.address;
                footerData[0].instagramLink = req.body.instagramLink;
                footerData[0].facebookLink = req.body.facebookLink;
                footerData[0].pintrestLink = req.body.pintrestLink;
                footerData[0].googlePlusLink = req.body.googlePlusLink;
                footerData[0].twitterLink = req.body.twitterLink;
                footerData[0].map = req.body.map;
                footerData[0].contactNo = req.body.contactNo;
                footerData[0].alternativeContactNo = req.body.alternativeContactNo;
                footerData[0].mailId = req.body.mailId;
               
                footerData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        Footer.find({}).select().exec(function (err, footerData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(footerData);
                            }
                        })
                    }
                })

            }
        }
    });
}


exports.createLogoImage = function (req, file, res) {
    Footer.find({
        '_id': req.params.id,
    }, function (err, footerDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            footerDetail[0].logoImageName = file.originalname;
            footerDetail[0].save({}, function (err, footerData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    Footer.find({}).select().exec(function (err, footerData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
                            res.status(200).json(footerData);
                        }
                    })
                }
            })
        }
    });
}

exports.getFooterDetails = function (req, res) {
    Footer.find({}).select().exec(function (err, footerData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            if(footerData.length !== 0) {
                footerData[0].logoImageName = appSetting.logoServerPath + footerData[0].logoImageName;
            }
            res.status(200).json(footerData);
        }
    })
}

exports.updateFooterDetails = function (req, res) {
    Footer.find({
        '_id': req.params.id,
    }, function (err, footerData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            footerData[0].address = req.body.address;
                footerData[0].instagramLink = req.body.instagramLink;
                footerData[0].facebookLink = req.body.facebookLink;
                footerData[0].pintrestLink = req.body.pintrestLink;
                footerData[0].googlePlusLink = req.body.googlePlusLink;
                footerData[0].twitterLink = req.body.twitterLink;
                footerData[0].map = req.body.map;
                footerData[0].contactNo = req.body.contactNo;
                footerData[0].alternativeContactNo = req.body.alternativeContactNo;
                footerData[0].mailId = req.body.mailId;
                footerData[0].logoImageName = req.body.logoImageName;
                footerData[0].save({}, function (err, footerData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    Footer.find({}).select().exec(function (err, footerData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
                            footerData[0].logoImageName = appSetting.logoServerPath + footerData[0].logoImageName;
            res.status(200).json(footerData);
                        }
                    })
                }
            })
        }
    });
}