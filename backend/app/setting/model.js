const mongoose = require("mongoose");
const settingSchema = mongoose.Schema(
  {
    sekretariat: {
      type: String,
    },
    periode: {
      type: String,
    },
    status: {
      enum: ["Y", "T"],
    },
    deadlineBayar: {
      type: String,
    },
    dateConference: {
      type: String,
    },
    fullName: {
      type: String,
    },
    shortName: {
      type: String,
    },
    emailHeader: {
      type: String,
    },
    scopeName: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("setting", settingSchema);
