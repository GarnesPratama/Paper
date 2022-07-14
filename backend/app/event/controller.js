const Event = require("./model");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  createEvent: async (req, res, next) => {
    try {
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
      const data = new Event({
        alamat,
        email,
        ketua,
        lokasi,
        namaPaper,
        singkatan,
        waktu,
        asalbank,
        // buktiPembayaran: req.files,
        // logo: req.files,
        // tandaTangan: req.files,
        // image: req.files,
        pengirim,
        rekening,
        category,
        price,
        bukti: req.file.filename,
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
        {
          alamat,
          email,
          ketua,
          lokasi,
          namaPaper,
          singkatan,
          waktu,
          asalbank,
          pengirim,
          rekening,
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
      const { singkatan } = req.params;
      const data = await Event.findOneAndRemove({ singkatan: singkatan });
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
