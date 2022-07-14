const Scope = require("./model");

module.exports = {
  createScope: async (req, res, next) => {
    try {
      const { name } = req.body;
      const data = new Scope({
        name,
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
