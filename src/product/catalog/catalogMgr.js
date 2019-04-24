'use strict';
var catalogDA = require('./catalogDA');
const multer = require('multer');
var appSetting = require('../../config/appSetting');
var mkdirp = require('mkdirp');

exports.createCatalog = function (req, res) {
    try {
        const DIR = appSetting.imageUploadPath;

        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, DIR);
            },
            filename: (req, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);
            }
        });
        let upload = multer({
            storage: storage
        });
        catalogDA.createCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.createCatalogImage = function (req, res) {
    try {
        const DIR = appSetting.imageUploadPath;

        mkdirp(DIR);

        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, DIR);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
        let upload = multer({
            storage: storage
        }).single('file');
        upload(req,res,function(err){
            if(err){
                console.log(err);
                return res.status(501).json({error:err});
            }
            //do all database record saving activity
            return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
        });
       
    } catch (error) {
        console.log(error);
    }
}


exports.getCatalog = function (req, res) {
    try {
        catalogDA.getCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}




exports.updateCatalog = function (req, res) {
    try {

        const DIR = './uploads';
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, DIR);
            },
            filename: (req, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);
            }
        });
        let upload = multer({
            storage: storage
        });
        catalogDA.updateCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.deleteCatalog = function (req, res) {
    try {
        catalogDA.deleteCatalog(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.getCatalogById = function (req, res) {
    try {
        catalogDA.getCatalogById(req, res);
    } catch (error) {
        console.log(error);
    }
}
