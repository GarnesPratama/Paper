const Pricing = require("./model");

module.exports = {
  createPricing: async (req, res, next) => {
    try {
      const { publication, type, pricing, coupon, disount, option } = req.body;
      const data = new Pricing({
        publication,
        type,
        pricing,
        coupon,
        disount,
        option,
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
