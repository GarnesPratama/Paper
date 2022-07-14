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
<<<<<<< HEAD
// router.get("/timeline", productGetController.getAllTimeline);
router.get("/event/:namaPaper", productGetController.conference);
=======
router.get("/setting", productGetController.getAllSetting);
router.get("/event/:singkatan", productGetController.conference);
>>>>>>> 4cded7e98e319811bf0b5ee82594c0ae4148ddaf

module.exports = router;
