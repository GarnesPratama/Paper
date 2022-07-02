const Setting = require("./model");

module.exports = {
  createSetting: async (req, res, next) => {
    const {
      secretariat,
      periode,
      status,
      deadlineBayar,
      fullName,
      shortName,
      emailHeader,
      scopeName,
    } = req.body;
    const data = new Setting({
      secretariat,
      periode,
      status,
      deadlineBayar,
      fullName,
      shortName,
      emailHeader,
      scopeName,
    });
    await data.save();
    res.status(201).json({
      message: "Post All Data Success",
      data: data,
    });
    next();
  },
};
