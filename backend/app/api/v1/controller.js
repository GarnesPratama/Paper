const Product = require("../../product/model");
const Payment = require("../../payment/model");
const User = require("../../user/model");
const Event = require("../../event/model");
const Bank = require("../../bank/model");
const OAuth = require("../../OAuth2/model");
const Setting = require("../../setting/model");

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
      const result = await Event.find();
      res.status(200).json({
        message: "Get All Event Data Success",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  },

  conference: async (req, res, next) => {
    try {
      const { namaPaper } = req.params;
      const data = await Event.findOne({ namaPaper: namaPaper });
      res.status(200).json({
        message: "Find One Data Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },

  getAllBank: async (req, res, next) => {
    try {
      const result = await Bank.find();
      res.status(200).json({
        message: "Get All Bank Data Success",
        data: result,
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
  getAllSetting: async (req, res, next) => {
    try {
      const data = await Setting.find();
      res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
};
