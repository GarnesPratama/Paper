const express = require("express");
const router = express.Router();
const settingController = require("../setting/controller");

router.post("/post", settingController.createSetting);

module.exports = router;
