var mainCategoryDA = require('../../category/mainCategory/mainCategoryDA')
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/configure');

exports.mainCategoryInsert = function (req, res) {
    try {
        mainCategoryDA.mainCategoryInsert(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.mainCategoryDelete = function (req, res) {
    try {
        mainCategoryDA.mainCategoryDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.createMainCategoryImage = function (req, res) {
    try {

        const DIR = appSetting.categoryUploadPath;
        const PATH = DIR + '/' + req.params.name;
        mkdirp(PATH);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                mainCategoryDA.createMainCategoryImage(req, file, res);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });

        let upload = multer({
            storage: storage
        }).array('uploads[]', 20); //only 20 images can be uploaded
        upload(req, res, function (err, result) {
            if (err) {
                return res.status(501).json({
                    error: err
                });
            } else {
                res.status(200).json(result);
            }
        });



    } catch (error) {
        console.log(error);
    }
}

exports.showSuperCategory = function (req, res) {
    try {
        mainCategoryDA.showSuperCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.mainCategoryUpdate = function (req, res) {
    try {
        mainCategoryDA.mainCategoryUpdate(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.getMainCategory = function (req, res) {
    try {
        mainCategoryDA.getMainCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getAllMainCategory = function (req, res) {
    try {
        mainCategoryDA.getAllMainCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}
