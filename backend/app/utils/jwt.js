const jwt = require("jsonwebtoken");
// const { jwtSecret } = require("../config");
const password = "6higSh_5$rbuF5%!Thum0gyT&FGyb_8tgTigYbD";

module.exports = {
  createJWT: ({ payload }) => {
    const token = jwt.sign(payload, password);
    return token;
  },

  tokenValid: ({ token }) => jwt.verify(token, password),
};
