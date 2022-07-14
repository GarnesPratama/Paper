const mongoose = require("mongoose");
const timelineSchema = mongoose.Schema(
  {
    uploadPaper: {
      type: Array,
      uploadAbstract: {
        type: String,
      },
      uploadFullPaper: {
        type: String,
      },
    },
    deadlinePayment: {
      type: String,
    },
    dateConference: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("timeline", timelineSchema);
