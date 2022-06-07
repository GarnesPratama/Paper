const mongoose = require("mongoose");

const registration_fullpaper_review = mongoose.Schema({
  reviewer: {
    type: String,
  },
  status: {
    type: String,
  },
  type: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: Date,
  },
  revised: {
    type: String,
  },
  messageto_reviewer: {
    type: String,
  },
  file_review_version: {
    type: String,
  },
  file_turnitin: {
    type: String,
  },
  comment: {
    type: String,
  },
  paper_quality: {
    type: String,
  },
  well_organized: {
    type: String,
  },
  paper_title: {
    type: String,
  },
  paper_reference: {
    type: String,
  },
  paper_english: {
    type: String,
  },
  paper_figure: {
    type: String,
  },
  paper_table: {
    type: String,
  },
  paper_review: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Fullpaper-Review",
  registration_fullpaper_review
);
