const OAuth = require("./model");

module.exports = {
  createOAuth: async (req, res, next) => {
    const { email, familyName, givenName, googleId, name } = req.body;
    const data = new OAuth({
      email,
      familyName,
      givenName,
      googleId,
      imageUrl: req.file.filename,
      name,
    });
    await data.save();
    console.log(data);
    res.status(201).json({
      message: "Post All Data Success",
      data: data,
    });
  },
};
