const mongoose = require("mongoose");
const test = mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("product", test);
