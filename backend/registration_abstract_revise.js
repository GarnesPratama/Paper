const mongoose = require("mongoose");

const registration_abstract_revise = mongoose.Schema({
  user: {
    type: String,
  },
  title: {
    type: String,
  },
  authors: {
    type: String,
  },
  optional: {
    type: String,
  },
  file: {
    type: String,
  },
  abstract: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: Date,
  },
});

module.exports = mongoose.model(
  "Registration-Abstract-Revise",
  registration_abstract_revise
);
