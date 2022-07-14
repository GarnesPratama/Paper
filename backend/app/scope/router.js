const express = require("express");
const router = express.Router();
const scopeController = require("./controller");

router.post("/post", scopeController.createScope);

module.exports = router;
