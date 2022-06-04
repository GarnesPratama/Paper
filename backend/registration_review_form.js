const mongoose = require("mongoose");

const registration_review_form = mongoose.Schema({
  question: {
    type: String,
  },
  label: {
    type: String,
  },
  order: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Review-Form",
  registration_review_form
);
