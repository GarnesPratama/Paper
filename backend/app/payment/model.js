const mongoose = require("mongoose");
const paymentSchema = mongoose.Schema(
  {
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
    list: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment", paymentSchema);
