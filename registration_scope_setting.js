const mongoose = require("mongoose");

const registration_scope_setting = mongoose.Schema({
  period: {
    type: String,
  },
  scope: {
    type: String,
  },
  order: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Scope-Setting",
  registration_scope_setting
);
