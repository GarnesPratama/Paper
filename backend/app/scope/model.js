const mongoose = require("mongoose");
const scopeSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("scope", scopeSchema);
