const mongoose = require("mongoose");

const registration_voucher = mongoose.Schema({
  voucher_code: {
    type: String,
  },
  used: {
    type: String,
  },
  discount: {
    type: String,
  },
  icmse_period: {
    type: String,
  },
});

module.exports = mongoose.model("Registration-Voucher", registration_voucher);
