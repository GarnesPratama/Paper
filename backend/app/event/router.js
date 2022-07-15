const express = require("express");
const router = express.Router();
const eventController = require("./controller");
const upload = require("../middlewares/multer");

// router.post("/post", settingController.createSetting);
router.post("/post", eventController.createEvent);
// router.post("/post/:namaPaper", uploadMultiple, eventController.createEvent);
router.put("/:shortName", upload.single("logo"), eventController.updateEvent);
router.delete(
  "/:shortName",
  upload.single("logo"),
  eventController.deleteEvent
),
  (module.exports = router);
