const Timeline = require("./model");

module.exports = {
  createTimeline: async (req, res, next) => {
    const { deadlinePayment, dateConference } = req.body;
    const data = new Timeline({
      deadlinePayment,
      dateConference,
      uploadPaper: req.files,
    });
    await data.save();
    return res.status(201).json({
      message: "Post All Data Success",
      data: data,
    });
  },
};
