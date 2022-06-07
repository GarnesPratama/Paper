const Product = require("./model");
module.exports = {
  createProduct: async (req, res) => {
    const { name } = req.body;
    const data = new Product({
      name,
    });
    await data.save();
    res.json({
      message: "Get All Data Success",
      data: data,
    });
  },
};
