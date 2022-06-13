const User = require("../user/model");
const { createJWT, createToken } = require("../utils");

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
      if (!email || !password) {
        console.log("please provide email and password!");
      }
      // cek email
      const data = await User.findOne({ email: email });
      if (!data) {
        console.log("Invalid credential");
      }
      // cek pw
      const isPasswordCorrect = await data.comparePassword(password);
      if (!isPasswordCorrect) {
        // res.json({
        //   message: "Invalid Credential",
        // });
        console.log("Invalid credential");
      }

      // Set token
      const token = createJWT({ payload: createToken(data) });

      res.status(200).json({ data: { token } });
    } catch (error) {
      res.redirect("/");
    }
  },
};
