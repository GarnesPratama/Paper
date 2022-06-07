const mongoose = require("mongoose");

const registration_log = mongoose.Schema({
  ip: {
    type: String,
  },
  user: {
    type: String,
  },
  password: {
    type: String,
  },
  status: {
    type: String,
  },
  url: {
    type: String,
  },
  browser: {
    type: String,
  },
  date: {
    type: Date,
  },
  db_query: {
    type: String,
  },
});

module.exports = mongoose.model("Registration-Log", registration_log);
