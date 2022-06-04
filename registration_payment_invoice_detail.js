const mongoose = require("mongoose");

const registration_payment_invoice_detail = mongoose.Schema({
  invoice: {
    type: String,
  },
  option: {
    type: String,
  },
  current_price: {
    type: String,
  },
  type_product: {
    type: String,
  },
  ket: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Payment-Invoice-Detail",
  registration_payment_invoice_detail
);
