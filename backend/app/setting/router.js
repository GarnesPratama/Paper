const express = require("express");
const router = express.Router();
const settingController = require("./controller");
const upload = require("../middlewares/multer");

router.post("/post", upload.single("image"), settingController.createSetting);
// router.put("/:id", paymentController.updatePayment);
// router.delete("/:id", paymentController.deletePayment);

module.exports = router;
