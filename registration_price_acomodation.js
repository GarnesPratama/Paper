const mongoose = require("mongoose");

const registration_price_acomodation = mongoose.Schema({
  kode: {
    type: String,
  },
  item_name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  discount: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Price-Acomodation",
  registration_price_acomodation
);
