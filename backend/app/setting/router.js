const express = require("express");
const router = express.Router();
const settingController = require("./controller");
const upload = require("../middlewares/multer");
const uploadMultiple = upload.fields([
  { name: "logo", maxCount: 1 },
  { name: "tandaTangan", maxCount: 1 },
  { name: "buktiPembayaran", maxCount: 1 },
]);
const uploadMultipleAny = upload.any([
  { name: "logo", maxCount: 1 },
  { name: "tandaTangan", maxCount: 2 },
  { name: "buktiPembayaran", maxCount: 1 },
]);

// router.post(
//   "/post",
//   upload.fields([{ name: "logo" }, { name: "tandaTangan" }]),
//   settingController.createSetting
// );
// router.post("/post", settingController.createSetting);
router.post("/post", uploadMultiple, settingController.createSetting);

module.exports = router;
