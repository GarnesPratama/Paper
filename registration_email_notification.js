const mongoose = require("mongoose");

const registration_email_notification = mongoose.Schema({
  email_new_author: {
    type: String,
  },
  email_new_abstract: {
    type: Date,
  },
});

module.exports = mongoose.model(
  "Registration-Email-Notification",
  registration_email_notification
);
