var ProductDetails= require('../../model/productDetails.model');



exports.createPriceRange = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetailsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var details = new ProductDetails();
            details.priceRange.push(req.body.priceRange);
            if (productDetailsData.length == 0) {
                
                details.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ProductDetails.find({}).select().exec(function (err, productDetails) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    res.status(200).json(productDetails);
                                }
                            });
                        }
                    })
                

            } else {
                productDetailsData[0].priceRange.push(req.body.priceRange);
                productDetailsData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        ProductDetails.find({}).select().exec(function (err, productdetails) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(productdetails);
                            }
                        });
                    }
                })

            }
        }
    });
}
exports.deletePriceRange = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetails) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var priceRangeVal =  productDetails[0].priceRange;
            var index = priceRangeVal.indexOf(req.body.priceRange);
            priceRangeVal.splice(index, 1);
            productDetails[0].save(function (err, data) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while saving data'
                    })
                } else {
                    ProductDetails.find({}).select().exec(function (err, productDetails) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            res.status(200).json(productDetails);
                        }
                    });
                }
            })
        }
    });
}

exports.createColor = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetailsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var details = new ProductDetails();
            details.color.push(req.body.color);
            if (productDetailsData.length == 0) {
                details.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ProductDetails.find({}).select().exec(function (err, productDetails) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    res.status(200).json(productDetails);
                                }
                            });
                        }
                    })
            } else {
                productDetailsData[0].color.push(req.body.color);
                productDetailsData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        ProductDetails.find({}).select().exec(function (err, productdetails) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(productdetails);
                            }
                        });
                    }
                })

            }
        }
    });
}
exports.deleteColor = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetails) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var colorVal =  productDetails[0].color;
            var index = colorVal.indexOf(req.body.color);
            colorVal.splice(index, 1);
            productDetails[0].save(function (err, data) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while saving data'
                    })
                } else {
                    ProductDetails.find({}).select().exec(function (err, productDetails) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            res.status(200).json(productDetails);
                        }
                    });
                }
            })
        }
    });
}
exports.createMaterial = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetailsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var details = new ProductDetails();
            details.color.push(req.body.material);
            if (productDetailsData.length == 0) {
                
                details.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ProductDetails.find({}).select().exec(function (err, productDetails) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    res.status(200).json(productDetails);
                                }
                            });
                        }
                    })
                

            } else {
                productDetailsData[0].material.push(req.body.material);
                productDetailsData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        ProductDetails.find({}).select().exec(function (err, productdetails) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(productdetails);
                            }
                        });
                    }
                })

            }
        }
    });
}

exports.getProductSettings = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productdetails) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(productdetails);
        }
    });
}
exports.deleteMaterial = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetails) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var materialVal =  productDetails[0].material;
            var index = materialVal.indexOf(req.body.material);
            materialVal.splice(index, 1);
            productDetails[0].save(function (err, data) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while saving data'
                    })
                } else {
                    ProductDetails.find({}).select().exec(function (err, productDetails) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            res.status(200).json(productDetails);
                        }
                    });
                }
            })
        }
    });
}

exports.createOccasion = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetailsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var details = new ProductDetails();
            details.occasion.push(req.body.occasion);
            if (productDetailsData.length == 0) {
                
                details.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ProductDetails.find({}).select().exec(function (err, productDetails) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    res.status(200).json(productDetails);
                                }
                            });
                        }
                    })
                

            } else {
                productDetailsData[0].occasion.push(req.body.occasion);
                productDetailsData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        ProductDetails.find({}).select().exec(function (err, productdetails) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(productdetails);
                            }
                        });
                    }
                })

            }
        }
    });
}
exports.deleteOccasion = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetails) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var occasionVal =  productDetails[0].occasion;
            var index = occasionVal.indexOf(req.body.occasion);
            occasionVal.splice(index, 1);
            productDetails[0].save(function (err, data) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while saving data'
                    })
                } else {
                    ProductDetails.find({}).select().exec(function (err, productDetails) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            res.status(200).json(productDetails);
                        }
                    });
                }
            })
        }
    });
}

exports.createSize = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetailsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var details = new ProductDetails();
            details.size.push(req.body.size);
            if (productDetailsData.length == 0) {
                
                details.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ProductDetails.find({}).select().exec(function (err, productDetails) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    res.status(200).json(productDetails);
                                }
                            });
                        }
                    })
                

            } else {
                productDetailsData[0].size.push(req.body.size);
                productDetailsData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        ProductDetails.find({}).select().exec(function (err, productdetails) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                res.status(200).json(productdetails);
                            }
                        });
                    }
                })

            }
        }
    });
}
exports.deleteSize = function (req, res) {
    ProductDetails.find({}).select().exec(function (err, productDetails) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            var sizeVal =  productDetails[0].size;
            var index = sizeVal.indexOf(req.body.size);
            sizeVal.splice(index, 1);
            productDetails[0].save(function (err, data) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while saving data'
                    })
                } else {
                    ProductDetails.find({}).select().exec(function (err, productDetails) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            res.status(200).json(productDetails);
                        }
                    });
                }
            })
        }
    });
}
