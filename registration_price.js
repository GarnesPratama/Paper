const mongoose = require("mongoose");

const registration_price = mongoose.Schema({
  period: {
    type: String,
  },
  type_participant: {
    type: String,
  },
  publication: {
    type: String,
  },
  price: {
    type: String,
  },
  price_for_unnes: {
    type: String,
  },
  type_price: {
    type: String,
  },
  order: {
    type: String,
  },
  additional: {
    type: String,
  },
});

module.exports = mongoose.model("Registration-Price", registration_price);
