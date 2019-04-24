'use strict';
var adsMgr = require('./ads/adsMgr');
var bannersMgr = require('./banner/bannerMgr');
var promotionsMgr = require('./promotions/promotionsMgr');
var footerMgr = require('./footer/footerMgr');
var productMgr = require('./product/productMgr');
var headerMgr = require('./header/headerMgr');

module.exports = function (app) {

    // ads 
    app.route('/ads/:position')
        .put(adsMgr.createAds);

    app.route('/deleteads/:id')
        .delete(adsMgr.deleteAds);

    app.route('/ads')
        .get(adsMgr.getAds);

    // banners

    app.route('/banners/:position')
        .put(bannersMgr.createBanners);

    app.route('/deletebanners/:id')
        .delete(bannersMgr.deleteBanners);

    app.route('/banners')
        .get(bannersMgr.getBanners);

    // promotions
    app.route('/promotions')
        .post(promotionsMgr.createPromotions);

    app.route('/deletepromotions/:id')
        .delete(promotionsMgr.deletePromotions);

    app.route('/promotions')
        .get(promotionsMgr.getPromotions);

    app.route('/editpromotions/:id')
        .put(promotionsMgr.editPromotions);

    // footer

    app.route('/footer')
        .post(footerMgr.createFooter);

    app.route('/createLogoImage/:id')
        .put(footerMgr.createLogoImage);


    app.route('/footerDetails')
        .get(footerMgr.getFooterDetails);

    app.route('/details/:id')
        .put(footerMgr.updateFooterDetails);

    // product settings

    app.route('/productSettings')
        .get(productMgr.getProductSettings);

    app.route('/pricerange')
        .post(productMgr.createPriceRange);

    app.route('/removeprice')
        .post(productMgr.deletePriceRange);

    app.route('/color')
        .post(productMgr.createColor);

    app.route('/removecolor')
        .post(productMgr.deleteColor);
    app.route('/material')
        .post(productMgr.createMaterial);
    app.route('/removematerial')
        .post(productMgr.deleteMaterial);

    app.route('/occasion')
        .post(productMgr.createOccasion);

    app.route('/removeoccasion')
        .post(productMgr.deleteOccasion);

    app.route('/size')
        .post(productMgr.createSize);

    app.route('/removesize')
        .post(productMgr.deleteSize);


    // header 
    app.route('/createLogoImage')
        .post(headerMgr.createLogoImage);

    app.route('/headerDetails')
        .get(headerMgr.getHeaderDetails);

    app.route('/headerDetails/:id')
        .delete(headerMgr.deleteHeaderDetails);

}