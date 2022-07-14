const express = require("express");
const router = express.Router();
const ioaController = require("./controller");

router.post("/post", ioaController.createIoa);

module.exports = router;
