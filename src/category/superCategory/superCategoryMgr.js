var superCategoryDA = require('../../category/superCategory/superCategoryDA');
var SuperCategory = require('../../model/superCategory.model');
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/configure');



exports.superCategoryInsert = function (req, res) {
    try {
        superCategoryDA.superCategoryInsert(req, res);
    } catch (error) {
        console.log(error);
    }
}



exports.superCategoryEdit = function (req, res) {
    try {
        superCategoryDA.superCategoryEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}



exports.superCategoryDelete = function (req, res) {
    try {
        superCategoryDA.superCategoryDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.createSuperCategoryImage = function (req, res) {
    try {
        SuperCategory.findById(req.params.id, function (err, val) {
            if (err) {
                res.status(500).send({
                    "result": 0
                });
            } else {
                const DIR = appSetting.categoryUploadPath;
        const PATH = DIR +  '/' + val.categoryName ;
       mkdirp(PATH);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                superCategoryDA.createSuperCategoryImage(req,file,res);
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
            }   else {
               /*  res.status(200).json(result); */
            }
        }); 
            }
        });
        

    } catch (error) {
        console.log(error);
    }
}


exports.superCategoryShow = function (req, res) {
    try {
        superCategoryDA.superCategoryShow(req, res);
    } catch (error) {
        console.log(error);
    }
}