const express = require("express");
const router = express.Router();
const productGetController = require("./controller");

router.get("/product", productGetController.getAllProduct);
router.get("/payment", productGetController.getAllPayment);
router.get("/auth", productGetController.getAllUser);
router.get("/checkout/:id", productGetController.checkout);
router.get("/dashboard/:email", productGetController.overview);
router.get("/event", productGetController.getAllEvent);
router.get("/oauth", productGetController.getAllOAuth2);
router.get("/event/:singkatan", productGetController.conference);

module.exports = router;
