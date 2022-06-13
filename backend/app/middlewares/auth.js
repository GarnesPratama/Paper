const { tokenValid } = require("../utils/jwt");
const customError = require("../errors");

module.exports = {
  authenticateUser: async (req, res, next) => {
    let token;
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }

    if (!token) {
      throw new customError.Unauthenticated("Testtt");
      //   console.log("Cekk invalid");
    }
    const payload = tokenValid({ token });

    req.user = {
      email: payload.email,
    };
    next();
  },
};
