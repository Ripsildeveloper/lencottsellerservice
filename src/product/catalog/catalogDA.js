'use strict';
var Catalog = require('../../model/catalog.model');
var appSetting = require('../../config/appSetting');
exports.createCatalog = function (req, res) {
    var catalog = new Catalog(req.body);
    catalog.save(function (err, createdCatalog) {
        if (err) {
            res.status(500).json({
                "result": 0
            });
        } else {

            res.status(200).json(createdCatalog);
        }
    });
};




exports.getCatalog = function (req, res) {
    Catalog.find({}).select().exec(function (err, createdCatalog) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
            var arraylength =createdCatalog.length-1;
            for (var i= 0; i<=arraylength; i++)
            {
            createdCatalog[i].catalogImageName = appSetting.imageServerPath  + createdCatalog[i].catalogImageName;
            }
            res.status(200).json(createdCatalog);
        }
    })

};



exports.updateCatalog = function (req, res) {

    Catalog.findById(req.params.id, function (err, createdCatalog) {
        if (err) return handleError(err);
        else {
            createdCatalog.catalogName = req.body.catalogName;
            createdCatalog.catalogType = req.body.catalogType;
            createdCatalog.material = req.body.material;
            createdCatalog.capacity = req.body.capacity;
            createdCatalog.catalogDescription = req.body.catalogDescription;
            createdCatalog.work = req.body.work;
            createdCatalog.dispatch = req.body.dispatch;
            createdCatalog.imageType = req.body.imageType;
            createdCatalog.catalogImageName = req.body.catalogImageName;

            createdCatalog.save(
                function (err) {
                    if (err) { // if it contains error return 0
                        res.status(500).send({
                            "result": 0
                        });
                    } else {
                        Catalog.find({}).select().exec(function (err, createdCatalog) {
                            if (err) {
                                res.status(500).json({
                                    "result": 0
                                })
                            } else {
                                res.status(200).json(createdCatalog)
                            }
                        })

                    }
                });
        }
    });


};

exports.deleteCatalog = function (req, res) {
    Catalog.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            Catalog.find({}).select().exec(function (err, createdCatalog) {
                if (err) {
                    res.status(500).json({
                        "result": 0
                    })
                } else {
                    res.status(200).json(createdCatalog)
                }
            })
        }
    });
}

exports.getCatalogById = function (req, res) {
    Catalog.findById(req.params.id).select().exec(function (err, createdCatalog) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
            if (createdCatalog)
                createdCatalog.catalogImageName = appSetting.imageServerPath + createdCatalog.catalogImageName;
            res.status(200).json(createdCatalog)
        }
    })

}