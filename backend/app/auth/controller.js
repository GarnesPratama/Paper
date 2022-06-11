const User = require("../user/model");

module.exports = {
  signUp: async (req, res, next) => {
    try {
      const { name, email, password, role } = req.body;
      const data = new User({
        name,
        email,
        password,
        role,
      });
      await data.save();
      // hapus password
      delete data._doc.password;
      res.status(201).json({
        message: "Create Auth Data Success",
        data: data,
      });
    } catch (error) {
      res.redirect("/");
    }
  },

  signIn: async (req, res, next) => {
    try {
      const { email, password } = req.body;
    } catch (error) {
      res.redirect("/");
    }
  },
};
