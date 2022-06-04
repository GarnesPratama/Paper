const mongoose = require("mongoose");

const registration_email_notif = mongoose.Schema({
  notification: {
    type: String,
  },
  email_list: {
    type: Date,
  },
});

module.exports = mongoose.model(
  "Registration-Email-Notif",
  registration_email_notif
);
