const Event = require("./model");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  createEvent: async (req, res, next) => {
    try {
      const { shortName } = req.params;
      const { secretriat, webUrl, period, status, fullName, category, price } =
        req.body;
      const data = new Event({
        secretriat,
        webUrl,
        period,
        status,
        fullName,
        shortName,
        category,
        price,
        category,
        price,
        logo: req.file.filename,
        // tandaTangan: req.files,
        // buktiPembayaran: req.files,
        // logo: req.files["logo"].filename,
        // tandaTangan: req.files["tandatangan"].filename,
        // buktiPembayaran: req.file,
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

  updateEvent: async (req, res, next) => {
    try {
      const { shortName } = req.params;
      const { secretriat, webUrl, period, status, fullName, category, price } =
        req.body;
      const data = await Event.findOneAndUpdate(
        { shortName: shortName },
        {
          secretriat,
          webUrl,
          period,
          status,
          fullName,
          category,
          price,
        }
      );
      res.status(200).json({
        message: "Update Data Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },

  deleteEvent: async (req, res, next) => {
    try {
      const { shortName } = req.params;
      const data = await Event.findOneAndRemove({ shortName: shortName });
      await data.remove();
      res.status(200).json({
        message: "Delete Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
};
