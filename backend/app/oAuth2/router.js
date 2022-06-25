const express = require("express");
const router = express.Router();
const OAuthController = require("./controller");
const upload = require("../middlewares/multer");

router.post("/post", upload.single("imageUrl"), OAuthController.createOAuth);

module.exports = router;
