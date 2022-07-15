const db = require("../database/models");
const Product = require("../database/models/Product")
const productsValidator = require("../middlewares/productsValidator");

module.exports = {
  index: function (req, res, next) { 
        db.Product.findAll({ limit: 20 }).then((productData) => {
          res.render("index.ejs", {
            title: "Impresiones 3D",
            productData: productData,
            limite: productData.length,
          });
        })
    }
  };