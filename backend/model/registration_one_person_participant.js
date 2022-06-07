const mongoose = require("mongoose");

const registration_one_person_participant = mongoose.Schema({
  conference_year: {
    type: String,
  },
  name_person: {
    type: String,
  },
  affiliaton: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  current_price: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: Date,
  },
  cekout: {
    type: String,
  },
  trash: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-One-Person-Participant",
  registration_one_person_participant
);
