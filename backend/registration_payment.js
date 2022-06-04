const mongoose = require("mongoose");

const registration_payment = mongoose.Schema({
  user: {
    type: String,
  },
  price_bill: {
    type: String,
  },
  currency: {
    type: String,
  },
  amount: {
    type: String,
  },
  file: {
    type: String,
  },
  date_payment: {
    type: Date,
  },
  time: {
    type: Date,
  },
  status: {
    type: String,
  },
  validate_by: {
    type: String,
  },
  validate_time: {
    type: Date,
  },
  bank_account: {
    type: String,
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model("Registration-Payment", registration_payment);
