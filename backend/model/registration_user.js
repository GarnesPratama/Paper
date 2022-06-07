const mongoose = require("mongoose");

const registration_user = mongoose.Schema({
  icmse_period: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  bio: {
    type: String,
  },
  userpicture: {
    type: String,
  },
  level: {
    type: String,
  },
  level_rev: {
    type: String,
  },
  blokir: {
    type: String,
    enum: ["Y", "N"],
    default: "N",
  },
  scope: {
    type: String,
  },
  tgl_daftar: {
    type: Date,
  },
  forget_key: {
    type: String,
  },
  last_login: {
    type: String,
  },
  ip_login: {
    type: String,
  },
  user_agent_login: {
    type: String,
  },
  hp_pengelola: {
    type: String,
  },
  nama_jurnal: {
    type: String,
  },
  instansi_pengelola: {
    type: String,
  },
  time: {
    type: Date,
  },
  country: {
    type: String,
  },
  affiliation: {
    type: String,
  },
  affiliation_faculty: {
    type: String,
  },
  name_certificate: {
    type: String,
  },
});

module.exports = mongoose.model("Registration-User", registration_user);
