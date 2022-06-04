const mongoose = require("mongoose");

const registration_setting = mongoose.Schema({
  setting: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Registration-Setting", registration_setting);
