const mongoose = require("mongoose");
const OAuthSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    familyName: {
      type: String,
    },
    givenName: {
      type: String,
    },
    googleId: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OAuth2", OAuthSchema);
