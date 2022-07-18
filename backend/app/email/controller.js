module.exports = {
  sendEmail: async (req, res) => {
    const { email, message, subject } = req.body;
    const API_KEY = "key-a185061d15e7d49bd773e70a7ff496f9";
    const Mailgun = require("mailgun.js");
    const DOMAIN = "icmseunnes.com";
    const formData = require("form-data");
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({
      username: "api",
      key: API_KEY,
    });
    const messageData = {
      from: "Excited User <garnesrizky@gmail.com>",
      to: `${email}`,
      subject: `${subject}`,
      text: `${message}`,
    };
    const data = await client.messages.create(DOMAIN, messageData);
    res.status(201).json({
      message: "Post All Data Success",
      data: data,
    });
  },
};
