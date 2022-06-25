const mongoose = require("mongoose");
const eventSchema = mongoose.Schema(
  {
    alamat: {
      type: String,
    },
    email: {
      type: String,
    },
    ketua: {
      type: String,
    },
    lokasi: {
      type: String,
    },
    namaPaper: {
      type: String,
    },
    singkatan: {
      type: String,
    },
    waktu: {
      type: Date,
    },
    asalbank: {
      type: String,
    },
    bukti: {
      type: String,
    },
    pengirim: {
      type: String,
    },
    rekening: {
      type: String,
    },

    // tandaTangan: {
    //   type: String,
    // },

    // image: {
    //   type: Array,
    //   logo: {
    //     type: String,
    //   },
    //   tandaTangan: {
    //     type: String,
    //   },
    //   buktiPembayaran: {
    //     type: String,
    //   },
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
