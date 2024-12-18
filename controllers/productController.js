const { response } = require('../app');
const Products = require('../Data/products.json')

function getProducts(){
    return Products
}

function getProductById(id){
    return Products[id];
}

function getProductByQt(qt){
const filteredProducts = Object.entries(Products) // Convert object to entries
  .filter(([key, value]) => value.stock > 100) // Filter based on stock
  .reduce((acc, [key, value]) => {
    acc[key] = value; // Reconstruct filtered object
    return acc;
  }, {});

    return filteredProducts 
}

function getProductByIdandQt(id,qt){
    const product = Products[id];
    const response ={
        id,
        qt,
        unit_price:product.price,
        total_price:product.price *qt 
    }
    return response 
}


module.exports = {
    getProducts,
    getProductById,
    getProductByIdandQt,
    getProductByQt
}