const express = require("express");
const router = express.Router();
const authController = require("./controller");

router.post("/signup", authController.signUp);
router.post("/signIn", authController.signIn);

module.exports = router;
