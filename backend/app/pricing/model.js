const mongoose = require("mongoose");
const pricingSchema = mongoose.Schema(
  {
    publication: {
      type: String,
    },
    type: {
      type: String,
      enum: ["Presenter", "Non-Presenter"],
      default: "Non-Presenter",
    },
    pricing: {
      type: Number,
    },
    coupon: {
      type: String,
    },
    discount: {
      type: String,
    },
    option: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pricing", pricingSchema);
