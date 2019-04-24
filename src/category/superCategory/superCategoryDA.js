'use strict';
var SuperCategory = require('../../model/superCategory.model');
var appSetting = require('../../config/configure');
var rmdir = require('rmdir');
exports.superCategoryInsert = function (req, res) {

    var superCategoryData = new SuperCategory(req.body);
    superCategoryData.categoryName = req.body.categoryName;
    superCategoryData.categoryDescription = req.body.categoryDescription;

    superCategoryData.save(
        function (err, superCat) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    "result": 0
                });
            } else {
                SuperCategory.find({}).select('categoryName  categoryDescription').exec(function (err, superCat) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred while retrieving notes."
                        });
                    } else {
                        res.json(superCat);
                    }
                });
            }
        });

}

exports.superCategoryEdit = function (req, res) {
    SuperCategory.findById(req.params.id, function (err, superCat) {
        if (err) return handleError(err);
        else {
            superCat.categoryName = req.body.categoryName;
            superCat.categoryDescription = req.body.categoryDescription;
            superCat.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        /*  res.status(200).json(SuperCategory); */


                        SuperCategory.find({}).select().exec(function (err, superCat) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                var categoryLength = superCat.length - 1;
                                for (var i = 0; i <= categoryLength; i++) {
                                    superCat[i].categoryImageName = appSetting.categoryServerPath + superCat[i].categoryName + '/' + superCat[i].categoryImageName;
                                }
                                res.status(200).json(superCat);
                            }
                        });



                    }
                });

        }
    });
}


exports.superCategoryDelete = function (req, res) {
    SuperCategory.findByIdAndRemove(req.params.categoryId, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {  

            const PATH = appSetting.categoryUploadPath + '/' + req.params.name;
            rmdir(PATH, function (err, paths) {
                if (err) {
                    res.status(500).send({
                        err
                    });
                } else {
                    SuperCategory.find({}).select().exec(function (err, superCat) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            var categoryLength = superCat.length - 1;
                            for (var i = 0; i <= categoryLength; i++) {
                                superCat[i].categoryImageName = appSetting.categoryServerPath + superCat[i].categoryName + '/' + superCat[i].categoryImageName;
                            }
                            res.status(200).json(superCat);
                        }
                    });
                }
            });

        }
    });
}



exports.createSuperCategoryImage = function (req, file, res) {
    SuperCategory.findOne({
        '_id': req.params.id,
    }, function (err, categoryDetail) {
        if (err) {
            console.log(err);

        } else {
            if (categoryDetail.categoryImageName === undefined || categoryDetail.categoryImageName.length === 0) {
                categoryDetail.categoryImageName = file.originalname;
                categoryDetail.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        SuperCategory.find({}).select().exec(function (err, superCat) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                var categoryLength = superCat.length - 1;
                                for (var i = 0; i <= categoryLength; i++) {
                                    superCat[i].categoryImageName = appSetting.categoryServerPath + superCat[i].categoryName + '/' + superCat[i].categoryImageName;
                                }
                                res.status(200).json(superCat);
                            }
                        });
                    }
                })
            } else if (categoryDetail.categoryImageName.length !== 0) {
                var ID = file.originalname;
                var i = categoryDetail.categoryImageName.indexOf(ID);
                if (i > -1) {
                    console.log('Exist');
                } else {
                    categoryDetail.categoryImageName = file.originalname;
                    categoryDetail.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            SuperCategory.find({}).select().exec(function (err, superCat) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    var categoryLength = superCat.length - 1;
                                    for (var i = 0; i <= categoryLength; i++) {
                                        superCat[i].categoryImageName = appSetting.categoryServerPath + superCat[i].categoryName + '/' + superCat[i].categoryImageName;
                                    }
                                    res.status(200).json(superCat);
                                }
                            });
                        }
                    })
                }
            }


        }
    });
}

exports.superCategoryShow = function (req, res) {
    SuperCategory.find({}).select().exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var categoryLength = superCat.length - 1;
            for (var i = 0; i <= categoryLength; i++) {
                superCat[i].categoryImageName = appSetting.categoryServerPath + superCat[i].categoryName + '/' + superCat[i].categoryImageName;
            }
            res.status(200).json(superCat);
        }
    });

}
