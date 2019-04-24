var footerDA = require('./footerDA');
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/appSetting');

exports.createFooter = function (req, res) {
    try {
        footerDA.createFooter(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.createLogoImage = function (req, res) {
    try {
        const PATH = appSetting.logoUploadPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                footerDA.createLogoImage(req,file,res);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });

        let upload = multer({
            storage: storage
        }).array('uploads[]', 20); //only 20 images can be uploaded
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                return res.status(501).json({
                    error: err
                });
            }
        });

    } catch (error) {
        console.log(error);
    }
}



exports.getFooterDetails = function (req, res) {
    try {
        footerDA.getFooterDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}


exports.updateFooterDetails = function (req, res) {
    try {
        footerDA.updateFooterDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}



