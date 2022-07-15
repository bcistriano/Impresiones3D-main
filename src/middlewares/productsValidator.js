const { body }=require("express-validator");
const path=require("path");

const productsValidations = [
  body("productName")
    .notEmpty()
    .withMessage("Tenes que escribir el nombre del producto")
    .isLength({ min: 5 })
    .withMessage("El nombre debe tener al menos 5 caracteres"),

  body("productDescription")
    .isLength({ min: 10 })
    .withMessage("La descripción debe tener al menos 10 caracteres"),

  /* body("productImage").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    if (!file) {
    throw new Error ({msg:"Tienes que subir una imagen"});
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error (
          `Las extensiones de archivos permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }
   return true;
  }), */

body("productPrice")
.notEmpty()
.withMessage("Tenes que escribir un precio"),  

body("productClass")
.notEmpty()
.withMessage("Tenes que elegir una categoria"), 

];

module.exports = productsValidations;