const express = require("express");

const router = express.Router();
const productController = require("./controller");

// router.get("/get", (req, res, next) => {
//   res.json({ name: "Test", email: "test@gmail.com" });
//   next();
// });
router.get("/", productController.getAllProduct);
router.post("/post", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
