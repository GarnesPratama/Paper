const Product = require("../../product/model");
const Payment = require("../../payment/model");
const User = require("../../user/model");

module.exports = {
  getAllProduct: async (req, res) => {
    try {
      const result = await Product.find();
      res.status(200).json({
        message: "Get All Product Data Success",
        data: result,
      });
    } catch (error) {
      res.redirect("/");
    }
  },
  getAllPayment: async (req, res, next) => {
    try {
      const result = await Payment.find();
      res.status(200).json({
        message: "Get All Payment Data Success",
        data: result,
      });
    } catch (error) {
      res.redirect("/");
    }
  },
  getAllUser: async (req, res, next) => {
    try {
      const result = await User.find();
      res.status(200).json({
        message: "Get All User Data Success",
        data: result,
      });
    } catch (error) {
      res.redirect("/");
    }
  },
  checkout: async (req, res) => {
    const { id } = req.params;
    const result = await Payment.find({ _id: id }).select("category");
    res.status(200).json({
      message: "Get All Checkout Data Success",
      data: result,
    });
  },
};
