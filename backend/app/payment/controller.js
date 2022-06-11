const Payment = require("./model");
module.exports = {
  createPayment: async (req, res, next) => {
    try {
      const { category, price, list } = req.body;
      const data = new Payment({
        category,
        price,
        list,
      });
      await data.save();
      res.status(201).json({
        message: "Create Payment Data Success",
        data: data,
      });
    } catch (error) {
      res.redirecr("/");
    }
  },

  updatePayment: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { category, price, list } = req.body;
      const data = await Payment.findOneAndUpdate(
        { _id: id },
        {
          category,
          price,
          list,
        }
      );
      res.status(200).json({
        message: "Update Data Success",
        data: data,
      });
    } catch (error) {
      res.redirect("/");
    }
  },

  deletePayment: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Payment.findOneAndRemove({ _id: id });
      await result.remove();
      res.status(200).json({
        message: "Delete Data Success",
        data: result,
      });
    } catch (error) {
      res.redirect("/");
    }
  },
};
