const Bank = require("./model");
module.exports = {
  createBank: async (req, res, next) => {
    try {
      const { acountNumber, nameUser, nameBank } = req.body;
      const data = new Bank({
        acountNumber,
        nameUser,
        nameBank,
      });
      await data.save();
      res.status(201).json({
        message: "Create Bank Data Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },

  updateBank: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { acountNumber, nameUser, nameBank } = req.body;
      const data = await Bank.findByIdAndUpdate(
        { _id: id },
        { acountNumber, nameBank, nameUser }
      );
      res.status(200).json({
        message: "Update Data Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },

  deleteBank: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await Bank.findByIdAndRemove({
        _id: id,
      });
      await data.remove();
      res.status(200).json({
        message: "Delete Data Success",
        data: data,
      });
    } catch (error) {
      res.redirect("/");
    }
  },
};
