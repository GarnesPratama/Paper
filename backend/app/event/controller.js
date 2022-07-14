const Event = require("./model");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  createEvent: async (req, res, next) => {
    try {
<<<<<<< HEAD
      const { shortName } = req.params;
      const { secretriat, webUrl, period, status, fullName, category, price } =
        req.body;
=======
      const {
        alamat,
        email,
        ketua,
        lokasi,
        singkatan,
        waktu,
        namaPaper,
        asalbank,
        pengirim,
        rekening,
        category,
        price,
      } = req.body;
>>>>>>> 4cded7e98e319811bf0b5ee82594c0ae4148ddaf
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
<<<<<<< HEAD
      const { shortName } = req.params;
      const { secretriat, webUrl, period, status, fullName, category, price } =
        req.body;
      const data = await Event.findOneAndUpdate(
        { shortName: shortName },
=======
      const { singkatan } = req.params;
      const {
        alamat,
        email,
        ketua,
        lokasi,
        //singkatan,
        waktu,
        asalbank,
        pengirim,
        rekening,
        namaPaper,
      } = req.body;
      const data = await Event.findOneAndUpdate(
        { singkatan: singkatan },
>>>>>>> 4cded7e98e319811bf0b5ee82594c0ae4148ddaf
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
<<<<<<< HEAD
      const { shortName } = req.params;
      const data = await Event.findOneAndRemove({ shortName: shortName });
=======
      const { singkatan } = req.params;
      const data = await Event.findOneAndRemove({ singkatan: singkatan });
>>>>>>> 4cded7e98e319811bf0b5ee82594c0ae4148ddaf
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
