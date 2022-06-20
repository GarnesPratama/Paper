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
        // logo,
        // tandaTangan,
        // buktiPembayaran,
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
        image: req.files,
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
};
