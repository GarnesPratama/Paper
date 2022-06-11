const express = require("express");
const router = express.Router();
const productGetController = require("./controller");
const paymentGetController = require("./controller");

router.get("/product", productGetController.getAllProduct);
router.get("/payment", paymentGetController.getAllPayment);

module.exports = router;
