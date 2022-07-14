const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const eventSchema = mongoose.Schema(
  {
    secretariat: {
      type: String,
    },
    webUrl: {
      type: String,
    },
    logo: {
      type: String,
    },
    period: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "Non-Active"],
      default: "Non-Active",
    },
    fullName: {
      type: String,
    },
    shortName: {
      type: String,
    },
    place: {
      type: String,
    },
    category: {
      type: String,
    },
<<<<<<< HEAD
    price: {
      type: String,
    },
    // timelinePaper: [
    //   {
    //     type: ObjectId,
    //     ref: "timeline",
    //   },
    // ],
    // scopePaper: [
    //   {
    //     type: ObjectId,
    //     ref: "scope",
    //   },
    // ],
    // logo: {
=======
    // price: {
    //   type: String,
    // },

    // tandaTangan: {
>>>>>>> 4cded7e98e319811bf0b5ee82594c0ae4148ddaf
    //   type: String,
    // },

    // image: {
    //   type: Array,
    //   logo: {
    //     type: String,
    //   },
    //   tandaTangan: {
    //     type: String,
    //   },
    //   buktiPembayaran: {
    //     type: String,
    //   },
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", eventSchema);
