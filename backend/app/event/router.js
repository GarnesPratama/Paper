const express = require("express");
const router = express.Router();
const eventController = require("./controller");
const upload = require("../middlewares/multer");


// router.post("/post", settingController.createSetting);
<<<<<<< HEAD
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
=======
router.post("/post", upload.single("bukti"), eventController.createEvent);
router.put("/:singkatan", upload.single("bukti"), eventController.updateEvent);
router.delete(
  "/:singkatan",
  upload.single("bukti"),
>>>>>>> 4cded7e98e319811bf0b5ee82594c0ae4148ddaf
  eventController.deleteEvent
);

module.exports = router;
