const upload = require("../middlewares/multer");
const express = require("express");
const router = express.Router()
const controllers = require('../controllers/productsControllers')
const productsValidator = require('../middlewares/productsValidator');
const indexControllers = require("../controllers/indexControllers");


router.get("/", controllers.productList);
router.get("/create", controllers.create);
router.post("/create", upload.single("productImage"), productsValidator , controllers.processCreate);

//processEdit

router.get("/database/:id", controllers.detail);

router.get("/database/edit/:id", controllers.edit);
router.post("/database/edit/:id", upload.single("productImage"), productsValidator , controllers.processEdit);



//delete
router.post("/database/delete/:id", controllers.processDelete);

//list
router.get("/list", controllers.listForm);

module.exports = router;