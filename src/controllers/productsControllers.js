const db = require("../database/models");
const { validationResult } = require("express-validator");
const sequelize = db.sequelize;
const { Op } = require("sequelize");


module.exports = {
  productList: function (req, res) {
    db.Product.findAll().then((products) => {
      res.render('products/products')
    })
  },

  detail: function (req, res) {
    db.Product.findByPk(req.params.id).then((products) => {
      res.render('products/productsDetail', { products })
    })
  },

  create: function (req, res) {
    res.render("products/productsCreate", { title: "Subir nuevo producto" });
  },

  processCreate: function (req, res) {
    let productData = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.errors);
      return res.render('products/productsCreate', {
        errors: errors.errors
      });
    }
    db.Product.create({
      name: productData.productName,
      description: productData.productDescription,
      price: productData.productPrice,
      category: productData.productClass,
      image: req.file.filename,
      stock: 1,
    })
    res.redirect('/')
  },

  edit: function (req, res) {
    console.log(req.params.id);
    let products = db.Product.findByPk(req.params.id)
    Promise.all([products])
    .then(([products]) => {
      console.log(products);
      res.render("products/productsEdit", { products })
    })
  },

  processEdit: function (req, res) {
    let productData = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let products = db.Product.findByPk(req.params.id)
      Promise.all([products])
      .then(([products]) => {
      console.log(errors.errors);
      res.render("products/productsEdit", { products, errors: errors.errors })
    })
    }
    db.Product.update(
      {
        name: productData.productName,
        description: productData.productDescription,
        price: productData.productPrice,
        category: productData.productClass,
        image: req.file.filename,
        stock: 1
      },
      {
        where: { id: req.params.id },
      }
    )
    res.redirect("/")
  },

  // DELETE 
  processDelete: function (req, res) {
    db.Product.destroy({ where: { id: req.params.id } })
    res.redirect("/");
  },

  listForm: (req, res) => {
    db.Product.findAll()
      .then(products => {
        res.render('products/productsList', { products })
      })
  }
};
