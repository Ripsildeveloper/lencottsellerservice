var mongoose = require('mongoose');
/* var Product = require('./product.model'); */

/* const CatalogSchema  = new mongoose.Schema({
    catalogName: String,
    catalogType: String,
    material: String,
    capacity: String,
    catalogDescription: String,
    work: String,
    dispatch: String,
    imageType: String,
    catalogImageName:String,
    products: [Product]
}); */

const CatalogSchema  = new mongoose.Schema({
    catalogName: String,
    catalogImageName: String,
    catalogTitle: String,
    styleCode: String,
    moq: String,
    catalogDescription: String,
    /* products: [Product] */
});

const Catalog = mongoose.model('catalog', CatalogSchema);
module.exports = Catalog;