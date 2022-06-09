const express = require("express");

const router = express.Router();
const productController = require("./controller");

// router.get("/product", (req, res, next) => {
//   res.json({ name: "Test", email: "test@gmail.com" });
//   next();
// });

router.use("/post", productController.createProduct);

module.exports = router;
