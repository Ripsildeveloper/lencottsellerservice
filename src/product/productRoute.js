'use strict';

var catalogMgr = require('./catalog/catalogMgr');
var productMgr = require('./product/productMgr');

module.exports = function (app) {
    app.route('/catalog')
        .post(catalogMgr.createCatalog);

    app.route('/catalog')
        .get(catalogMgr.getCatalog);

    app.route('/catalog/:id')
        .put(catalogMgr.updateCatalog);

    app.route('/catalog/:id')
        .delete(catalogMgr.deleteCatalog);

    app.route('/catalog/:id')
        .get(catalogMgr.getCatalogById);

        app.route('/catalogImage')
        .post(catalogMgr.createCatalogImage);

        // product 

    app.route('/product')
        .post(productMgr.createProduct);

    app.route('/product/:productId')
        .put(productMgr.updateProduct);

    app.route('/product/:productId/sku/:skucode')
        .delete(productMgr.deleteProduct);

    app.route('/product')
        .get(productMgr.getProduct);

        app.route('/relatedproducts/:stylecode/product/:id')
        .get(productMgr.relatedProducts);

    app.route('/product/:productId')
        .get(productMgr.getProductById);

    app.route('/productimages/:skuCode')
        .put(productMgr.createProductImage);

        app.route('/product/:id/region/:regionid')
        .put(productMgr.editRegionDetails);

        app.route('/mfdqty/:id')
        .put(productMgr.editQtyDetails);


}