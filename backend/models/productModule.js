const mongoose = require('mongoose');

const products = new mongoose.Schema({
    name:"String",
    prize:Number,
    type:"String",
});
const productsModel = mongoose.model("products", products);

module.exports = productsModel;