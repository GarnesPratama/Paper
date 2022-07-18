const express = require("express");
const router = express.Router();
const email = require("./controller");

router.post("/post", email.sendEmail);

module.exports = router;
