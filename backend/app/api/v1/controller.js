const Product = require("../../product/model");
const Payment = require("../../payment/model");
const User = require("../../user/model");
const Event = require("../../event/model");
const Bank = require("../../bank/model");
const OAuth = require("../../OAuth2/model");
const Timeline = require("../../timeline/model");
const Scope = require("../../scope/model");
const Pricing = require("../../pricing/model");
const Ioa = require("../../ioa-abstract/model");

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
    const result = await Payment.findOne({ _id: id }).select("category price");
    res.status(200).json({
      data: result,
    });
  },

  overview: async (req, res) => {
    const { email } = req.params;
    const result = await Event.find({ email: email });
    res.status(200).json({
      message: "Get All Event Data Success",
      data: result,
    });
  },

  getAllEvent: async (req, res, next) => {
    try {
      const { shortName } = req.params;
      const event = await Event.findOne({ shortName: shortName });
      const timeline = await Timeline.find().select(
        "deadlinePayment dateConference uploadPaper"
      );
      const scope = await Scope.find().select("name");
      const pricing = await Pricing.find().select(
        "publication type pricing coupon discount option"
      );
      const ioa = await Ioa.find().select("seminarTitle");
      const bank = await Bank.find().select("nameUser nameBank acountNumber");

      res.status(200).json({
        message: "Get All Event Data Success",
        event,
        timeline,
        scope,
        pricing,
        bank,
        ioa,
      });
    } catch (error) {
      next(error);
    }
  },

  conference: async (req, res, next) => {
    try {
      const { shortName } = req.params;
      const data = await Event.findOne({ shorName: shorName });
      res.status(200).json({
        message: "Find One Data Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },

  getAllOAuth2: async (req, res, next) => {
    try {
      const result = await OAuth.find();
      res.status(200).json({
        message: "Get All Login Google Data Success",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },
};
