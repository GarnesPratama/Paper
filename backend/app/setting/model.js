const mongoose = require("mongoose");
const settingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
    },
    email: {
      type: String,
    },
    timeline: {
      type: Date,
    },
    tandaTangan: {
      type: String,
    },
    buktiPembayaran: {
      type: String,
    },
    tahun: {
      type: Date,
    },
    singkatanNama: {
      type: String,
    },
    lokasi: {
      type: String,
    },
    tanggal: {
      type: Date,
    },
    namaKetua: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("setting", settingSchema);
