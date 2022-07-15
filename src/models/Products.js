const fs = require("fs");
const path = require("path");

const Product = {
  fileName: "../data/products.json",

  generateId: function () {
    let allProducts = this.findAll();
    let lastProduct = allProducts.pop();
    if (lastProduct) {
      return lastProduct.id + 1;
    }
    return 1;
  },

  findAll: function () {
    return this.getData();
  },

  create: function (productData) {
    let allProducts = this.findAll();
    let newproduct = {
      id: this.generateId(),
      name : productData.productName,
      description : productData.productDescription,
      image: productData.image,
      price : productData.productPrice,
      category : productData.productCategory,
      stock : productData.productStock,
    };
    allProducts.push(newproduct);
    this.writeData(allProducts);
  },
}

module.exports = Product;