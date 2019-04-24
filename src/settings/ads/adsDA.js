var Ads = require('../../model/ads.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');

exports.createAds = function (req, file, res) {
    var ads = new Ads();
    ads.adsImageName = file.originalname;
    ads.position = req.params.position;
    ads.save(function (err, ads) {
      if (err) {
        res.status(500).send({
          "message": 'ads Not created'
        });
        
      } else {
        res.status(200).json(ads);
      }
    });
}

exports.deleteAds = function (req, res) {
    Ads.find({'_id': req.params.id}, function (err, adsDetails) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            const PATH = appSetting.adsUploadPath + '/' + adsDetails[0].adsImageName;
            fs.unlink(PATH, (err) => {
                if (err) {throw err;} 
                else {
                    Ads.findByIdAndRemove(req.params.id, function (err) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            Ads.find({}).select().sort({
                                position: 1
                            }).exec(function (err, adsImages) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    var adsLength = adsImages.length -1;
                                    for(var i =0; i <= adsLength; i++) {
                                        adsImages[i].adsImageName =  appSetting.adsServerPath + adsImages[i].adsImageName;
                                    }
                                    res.status(200).json(adsImages);
                                }
                            });
                        }
                    });
                }
               
              });
        }
    });
}

exports.getAds = function (req, res) {
    Ads.find({}).select().sort({
        position: 1
    }).exec(function (err, adsImages) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var adsLength = adsImages.length -1;
            for(var i =0; i <= adsLength; i++) {
                adsImages[i].adsImageName =  appSetting.adsServerPath + adsImages[i].adsImageName;
            }
            res.status(200).json(adsImages);
        }
    });
}