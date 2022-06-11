const express = require("express");
const router = express.Router();
const paymentController = require("./controller");

router.post("/post", paymentController.createPayment);
router.put("/:id", paymentController.updatePayment);
router.delete("/:id", paymentController.deletePayment);

module.exports = router;
