const mongoose = require("mongoose");

const registration_fullpaper = mongoose.Schema({
  user: {
    type: String,
  },
  file: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: Date,
  },
  ket: {
    type: String,
  },
  file_desc: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Fullpaper",
  registration_fullpaper
);
