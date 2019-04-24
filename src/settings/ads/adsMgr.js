var adsDA = require('./adsDA');
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/appSetting');


exports.createAds = function (req, res) {
    try {
        const PATH = appSetting.adsUploadPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                adsDA.createAds(req,file,res);
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

exports.deleteAds = function (req, res) {
    try {
        adsDA.deleteAds(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getAds = function (req, res) {
    try {
        adsDA.getAds(req, res);
    } catch (error) {
        console.log(error);
    }
}
