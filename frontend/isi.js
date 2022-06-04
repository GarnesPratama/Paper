const mongoose = require("mongoose");

const isi = mongoose.Schema({
  isi: {
    type: String,
  },
});

module.exports = mongoose.model("Isi", isi);
