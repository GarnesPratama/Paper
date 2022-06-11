const Product = require("../../product/model");
const Payment = require("../../payment/model");
module.exports = {
  getAllProduct: async (req, res) => {
    const result = await Product.find();
    res.status(200).json({
      message: "Get All Product Data Success",
      data: result,
    });
  },
  getAllPayment: async (req, res, next) => {
    const result = await Payment.find();
    res.status(200).json({
      message: "Get All Payment Data Success",
      data: result,
    });
  },
};
