const express = require("express");
const router = express.Router();
const pricingController = require("./controller");

router.post("/post", pricingController.createPricing);

module.exports = router;
