const mongoose = require("mongoose");

const registration_payment_confirm = mongoose.Schema({
  invoice: {
    type: String,
  },
  total_tagihan: {
    type: String,
  },
  total_pembayaran: {
    type: String,
  },
  currency: {
    type: String,
  },
  file: {
    type: String,
  },
  date_payment: {
    type: Date,
  },
  date_upload: {
    type: Date,
  },
  time_upload: {
    type: Date,
  },
  status: {
    type: String,
  },
  bank_account: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Payment-Confirm",
  registration_payment_confirm
);
