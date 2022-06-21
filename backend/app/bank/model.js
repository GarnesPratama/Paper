const mongoose = require("mongoose");
const bankSchema = mongoose.Schema(
  {
    noRek: {
      type: String,
      required: true,
    },
    nameUser: {
      type: String,
      required: true,
    },
    nameBank: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("bank", bankSchema);
