const mongoose = require("mongoose");
const ioaSchema = mongoose.Schema({
  seminarTitle: {
    type: String,
  },
});

module.exports = mongoose.model("ioa", ioaSchema);
