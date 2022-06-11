const express = require("express");

const router = express.Router();
const productController = require("./controller");

router.post("/post", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
