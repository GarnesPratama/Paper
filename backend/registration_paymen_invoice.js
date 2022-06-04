const mongoose = require("mongoose");

const registration_payment_invoice = mongoose.Schema({
  invoice: {
    type: String,
  },
  total_tagihan: {
    type: String,
  },
  diskon: {
    type: String,
  },
  total_before_discount: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: Date,
  },
  total_pembayaran: {
    type: String,
  },
  selisih: {
    type: String,
  },
  bukti_bayar: {
    type: String,
  },
  status: {
    type: String,
  },
  trash: {
    type: String,
  },
  va_id_trx: {
    type: String,
  },
  virtual_account: {
    type: String,
  },
  payment_date: {
    type: Date,
  },
  icmse_period: {
    type: String,
  },
  notif_wa: {
    type: String,
  },
  nitof_wa_create_tagihan: {
    type: String,
  },
  verif_manual: {
    type: String,
  },
  voucher: {
    type: String,
  },
});

module.exports = mongoose.model(
  "Registration-Payment-Invoice",
  registration_payment_invoice
);
