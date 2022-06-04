const mongoose = require("mongoose");

const registration_setting_period = mongoose.Schema({
  level: {
    type: String,
  },
  period: {
    type: String,
  },
  scope_rev: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Setting-Period",
  registration_setting_period
);
