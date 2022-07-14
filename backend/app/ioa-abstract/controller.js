const Ioa = require("./model");

module.exports = {
  createIoa: async (req, res, next) => {
    try {
      const { seminarTitle } = req.body;
      const data = new Ioa({
        seminarTitle,
      });
      await data.save();
      console.log(data);
      res.status(201).json({
        message: "Post All Data Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
};
