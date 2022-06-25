const express = require("express");
const router = express.Router();
const eventController = require("./controller");
const upload = require("../middlewares/multer");
// const uploadMultiple = upload.fields([
//   { name: "logo", maxCount: 1 },
//   { name: "tandaTangan", maxCount: 1 },
//   { name: "buktiPembayaran", maxCount: 1 },
// ]);
// const uploadMultipleAny = upload.any([
//   { name: "logo", maxCount: 1 },
//   { name: "tandaTangan", maxCount: 2 },
//   { name: "buktiPembayaran", maxCount: 1 },
// ]);

// router.post("/post", settingController.createSetting);
router.post("/post", upload.single("bukti"), eventController.createEvent);
router.put("/:id", upload.single("bukti"), eventController.updateEvent);

module.exports = router;
