const express = require("express");
const router = express.Router();
const productGetController = require("./controller");

router.get("/product", productGetController.getAllProduct);
router.get("/payment", productGetController.getAllPayment);
router.get("/auth", productGetController.getAllUser);
router.get("/checkout/:id", productGetController.checkout);

module.exports = router;