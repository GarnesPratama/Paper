const express = require("express");
const router = express.Router();
const productController = require("./controller");
const auth = require("../middlewares/auth");

router.post("/post", auth.authenticateUser, productController.createProduct);
router.put("/:id", auth.authenticateUser, productController.updateProduct);
router.delete("/:id", auth.authenticateUser, productController.deleteProduct);

module.exports = router;
