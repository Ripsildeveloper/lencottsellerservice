var MOQ = require('../model/moq.model');
var Products = require('../model/product.model');
var mongoose = require('mongoose');

exports.createMoq = function (req, res) {
  var moq = new MOQ(req.body);
  moq.save(function (err, moq) {
    if (err) {
      res.status(500).send({
        "message": 'moq not created'
      });

    } else {
      res.status(200).json(moq);
    }
  });
}

exports.viewMoq = function (req, res) {
  MOQ.find({}).select().exec(function (err, moq) {
    if (err) {
      res.status(500).send({
        "message": "error while retreiving moq"
      })
    } else {
      res.status(200).json(moq);
    }
  })
}

exports.addProducts = function (req, res) {
  MOQ.findOne({
    '_id': req.params.moqid
  }, function (err, moqEdit) {
    if (err) {
      res.status(500).json(err);
    } else {
      moqEdit.products.push(req.params.productid);
      moqEdit.save(function (err, moqData) {
        if (err) {
          res.status(500).send({
            "message": "error while retreiving moq"
          })
        } else {
          res.status(200).json(moqData);
        }
      })
    }
  })
}

exports.deleteMoq = function (req, res) {
  MOQ.findByIdAndRemove(req.params.id, function (err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      MOQ.find({}).select().exec(function (err, moq) {
        if (err) {
          res.status(500).send({
            "message": "error while retreiving moq"
          })
        } else {
          res.status(200).json(moq);
        }
      })
    }

  })
}

exports.getProducts = function (req, res) {
  MOQ.findById(req.params.id, function (err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
     /*  var idArr = [];
      var productIDLength = data.products.length - 1;
      for (var i =0; i <= productIDLength; i++) {
     idArr.push(data.products[i]);
      }
      console.log(idArr); */
      Products.find({  '_id': { $in:  [data.products] }}, function(err, values) {
        if(err){
          console.log(err);
        } else {
          console.log(values);
        }
      })
    }
  })
}