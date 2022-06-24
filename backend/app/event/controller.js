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
        namaPaper,
        singkatan,
        waktu,
        asalbank,
        pengirim,
        rekening,
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
        bukti: req.file.filename,
        pengirim,
        rekening,
        // logo: req.files,
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
      const { id } = req.params;
      const {
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
      } = req.body;
      const data = await Event.findByIdAndUpdate(
        { _id: id },
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
};
