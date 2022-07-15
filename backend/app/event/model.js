const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;
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
    price: {
      type: Number,
    },
    email: {
      type: String,
    },
    leader: {
      type: String,
    },
    location: {
      type: String,
    },
    nameBank: {
      type: String,
      default: "Menyusul",
    },
    rekening: {
      type: String,
      default: "Menyusul",
    },
    pengirim: {
      type: String,
      default: "Menyusul",
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
    // price: {
    //   type: String,
    // },

    // tandaTangan: {
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
