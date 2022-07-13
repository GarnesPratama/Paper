const express = require("express");
const router = express.Router();
const eventController = require("./controller");
const upload = require("../middlewares/multer");


// router.post("/post", settingController.createSetting);
router.post("/post", upload.single("bukti"), eventController.createEvent);
router.put("/:singkatan", upload.single("bukti"), eventController.updateEvent);
router.delete(
  "/:singkatan",
  upload.single("bukti"),
  eventController.deleteEvent
);

module.exports = router;
