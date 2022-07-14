const express = require("express");
const router = express.Router();
const timelineController = require("../timeline/controller");
const upload = require("../middlewares/multer");
const uploadMultiple = upload.fields([
  { name: "uploadAbstract", maxCount: 2 },
  { name: "uploadFullPaper", maxCount: 1 },
]);

router.post("/post", uploadMultiple, timelineController.createTimeline);

module.exports = router;
