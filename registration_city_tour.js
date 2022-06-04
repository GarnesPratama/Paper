const mongoose = require("mongoose");

const registration_city_tour = mongoose.Schema({
  date: {
    type: Date,
  },
  time: {
    type: Date,
  },
  gala_dinner: {
    type: String,
  },
  city_tour: {
    type: String,
  },
  city_tour_payment: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-City-Tour",
  registration_city_tour
);
