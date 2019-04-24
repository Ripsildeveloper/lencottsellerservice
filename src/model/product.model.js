var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId: String,
    productTitle: String,
    productName: String,
    productDescription: String,
    shortDescription: String,
    price: Number,
    color: String,
    styleCode: String,
    productImageName: [String],
    subCategory: String,
    bulletPoints: String,
    mfdQty: Number,
    moq: Number,
    spPrice: Number,
    mrpPrice: Number,
    // details
    material: String,
    weight: String,
    height: String,
    occassion: String,

    //size
    superCategoryId: String,
    mainCategoryId: String,
    subCategoryId: String,
    size: [{
        sizeName: String,
        skuCode: String,
        sizeQty: String
    }],

});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
