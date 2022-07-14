const mongoose = require("mongoose");
const bankSchema = mongoose.Schema(
  {
    nameUser: {
      type: String,
      required: true,
    },
    nameBank: {
      type: String,
      required: true,
    },
    acountNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bank", bankSchema);
