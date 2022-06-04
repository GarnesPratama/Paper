const mongoose = require("mongoose");

const registration_abstract_review = mongoose.Schema({
  comment: {
    type: String,
  },
  status: {
    type: String,
  },
  reviewer: {
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
  file_from_reviewer: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Abstract-Review",
  registration_abstract_review
);
