const mongoose = require("mongoose");

const registration_abstract = mongoose.Schema({
  user: {
    type: String,
  },
  id_user: {
    type: String,
  },
  title: {
    type: String,
  },
  authors: {
    type: String,
  },
  conference_year: {
    type: String,
  },
  optional: {
    type: String,
  },
  optional_bill: {
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
  date_last_edit: {
    type: Date,
  },
  time: {
    type: Date,
  },
  time_last_edit: {
    type: Date,
  },
  scope: {
    type: String,
  },
  fullpaper: {
    type: String,
  },
  reviewer: {
    type: String,
  },
  date_review_request: {
    type: Date,
  },
  trash: {
    type: String,
  },
  loa: {
    type: String,
  },
  reviewer_fullpaper: {
    type: String,
  },
  country: {
    type: String,
  },
  affilliation: {
    type: String,
  },
});

module.exports = mongoose.model("Registration-Abstract", registration_abstract);
