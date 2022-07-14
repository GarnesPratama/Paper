const express = require("express");
const router = express.Router();
const eventController = require("./controller");
const upload = require("../middlewares/multer");
// const uploadMultiple = upload.fields([
//   { name: "logo", maxCount: 2 },
//   { name: "tandaTangan", maxCount: 1 },
//   { name: "buktiPembayaran", maxCount: 1 },
// ]);
// const uploadMultipleAny = upload.any([
//   { name: "logo", maxCount: 1 },
//   { name: "tandaTangan", maxCount: 2 },
//   { name: "buktiPembayaran", maxCount: 1 },
// ]);

// router.post("/post", settingController.createSetting);
router.post(
  "/post/:shortName",
  upload.single("logo"),
  eventController.createEvent
);
// router.post("/post/:namaPaper", uploadMultiple, eventController.createEvent);
router.put("/:shortName", upload.single("logo"), eventController.updateEvent);
router.delete(
  "/:shortName",
  upload.single("logo"),
  eventController.deleteEvent
);

module.exports = router;
