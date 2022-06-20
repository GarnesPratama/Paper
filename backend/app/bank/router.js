const express = require("express");
const router = express.Router();
const bankController = require("./controller");

router.post("/post", bankController.createBank);
router.put("/:id", bankController.updateBank);
router.delete("/:id", bankController.deleteBank);

module.exports = router;
