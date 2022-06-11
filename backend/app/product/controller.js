const Product = require("./model");
module.exports = {
  createProduct: async (req, res, next) => {
    const { name } = req.body;
    const data = new Product({
      name,
    });
    await data.save();
    res.status(201).json({
      message: "Post All Data Success",
      data: data,
    });
    next();
  },

  updateProduct: async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = await Product.findOneAndUpdate(
      { _id: id },
      {
        name,
      }
    );
    res.status(200).json({
      message: "Update Data Success",
      data: data,
    });
    next();
  },
  deleteProduct: async (req, res, next) => {
    const { id } = req.params;
    const result = await Product.findOneAndRemove({ _id: id });
    await result.remove();
    res.status(200).json({
      message: "Delete Data Success",
      data: result,
    });
    next();
  },
};
