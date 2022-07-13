const Product = require("./model");
module.exports = {
  createProduct: async (req, res) => {
    const { name } = req.body;
    const data = new Product({
      name: name,
    });
    data.save();
    const result = {
      message: "succes",
      data: data,
    };
    res.status(201).json(result);
  },
};
