const mongoose = require("mongoose");

const registration_user_level = mongoose.Schema({
  conference_year: {
    type: String,
  },
  level: {
    type: String,
  },
  scope_abstract: {
    type: String,
  },
  active: {
    type: String,
  },
  date_added: {
    type: Date,
  },
  ket: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-User-Level",
  registration_user_level
);
