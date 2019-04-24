var Banners = require('../../model/banners.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');

exports.createBanners = function (req, file,  res) {
    var banners = new Banners();
    banners.bannerImage = file.originalname;
    banners.position = req.params.position;
    banners.save(function (err, ads) {
      if (err) {
        res.status(500).send({
          "message": 'banners Not created'
        });
        
      } else {
        res.status(200).json(ads);
      }
    });
}

exports.deleteBanners = function (req, res) {
    Banners.find({'_id': req.params.id}, function (err, bannerDetails) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            const PATH = appSetting.bannerUploadPath + '/' + bannerDetails[0].bannerImage;
            fs.unlink(PATH, (err) => {
                if (err) {throw err;} 
                else {
                    Banners.findByIdAndRemove(req.params.id, function (err) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            Banners.find({}).select().sort({
                                position: 1
                            }).exec(function (err, bannerImages) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    var bannerLength = bannerImages.length -1;
                                    for(var i =0; i <= bannerLength; i++) {
                                        bannerImages[i].bannerImage =  appSetting.bannerServerPath + bannerImages[i].bannerImage;
                                    }
                                    res.status(200).json(bannerImages);
                                }
                            });
                        }
                    });
                }
               
              });
        }
    });
}

exports.getBanners = function (req, res) {
    Banners.find({}).select().sort({
        position: 1
    }).exec(function (err, bannerImages) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var bannerLength = bannerImages.length -1;
            for(var i =0; i <= bannerLength; i++) {
                bannerImages[i].bannerImage =  appSetting.bannerServerPath + bannerImages[i].bannerImage;
            }
            res.status(200).json(bannerImages);
        }
    });
}