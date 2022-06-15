const Setting = require("./model");
const { StatusCodes } = require("http-status-codes");

module.exports = {
  createSetting: async (req, res, next) => {
    try {
      const {
        name,
        alamat,
        email,
        timeline,
        tahun,
        singkatanNama,
        lokasi,
        namaKetua,
      } = req.body;
      const data = new Setting({
        name,
        alamat,
        email,
        timeline,
        tahun,
        singkatanNama,
        lokasi,
        namaKetua,
        logo: req.file.filename,
        tandaTangan: req.file.filename,
        buktiPembayaran: req.file.filename,
      });
      await data.save();
      res.status(201).json({
        message: "Post All Data Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  },
};
