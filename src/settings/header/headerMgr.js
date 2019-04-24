
var headerDA = require('./headerDA');
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/appSetting');

exports.createLogoImage = function (req, res) {
    try {
        const PATH = appSetting.headerUploadPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                headerDA.createLogoImage(req,file,res);
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

exports.getHeaderDetails = function (req, res) {
    try {
        headerDA.getHeaderDetails(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteHeaderDetails = function (req, res) {
    try {
        headerDA.deleteHeaderDetails(req, res);
    } catch (error) {
        console.log(error);
    }
}
/* 
exports.getUnApprovedHeader = function (req, res) {
    try {
        headerDA.getUnApprovedHeader(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.approveHeader = function (req, res) {
    try {
        headerDA.approveHeader(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getApprovedHeader = function (req, res) {
    try {
        headerDA.getApprovedHeader(req, res);
    } catch (error) {
        console.log(error);
    }
} */
