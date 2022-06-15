const User = require("../user/model");
const { StatusCodes } = require("http-status-codes");
const CustomApi = require("../errors/custom-api");
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
      res.status(StatusCodes.CREATED).json({ data: data });
    } catch (error) {
      next(error);
    }
  },

  signIn: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new CustomApi.BadRequestError("Provide email and password");
      }
      // cek email
      const data = await User.findOne({ email: email });
      if (!data) {
        throw new CustomApi.UnauthorizedError("Invalid Credentials");
      }
      // cek pw
      const isPasswordCorrect = await data.comparePassword(password);
      if (!isPasswordCorrect) {
        throw new CustomApi.UnauthorizedError("Invalid Credentials");
      }

      // Set token
      const token = createJWT({ payload: createToken(data) });

      res.status(200).json({ data: { token } });
    } catch (error) {
      next(error);
    }
  },
};
