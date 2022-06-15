const { StatusCodes } = require("http-status-codes");

module.exports = {
  errorHandleMiddleware: (err, req, res, next) => {
    console.log("error message :");
    console.log(err.message);

    let customError = {
      statusKode: err.statusKode || StatusCodes.INTERNAL_SERVER_ERROR,
      msg: err.message || "Something went wrong",
    };

    if (err.name === "ValidationError") {
      customError.msg = Object.values(err.errors)
        .map((item) => item.message)
        .join(", ");
      customError.statusKode = 400;
    }

    if (err.code && err.code === 11000) {
      customError.msg = `Duplicate value field ${Object.keys(
        err.keyValue
      )} please choose another value`;
      customError.statusKode = 400;
    }
    if (err.name === "CastError") {
      customError.msg = `No item found with id  ${err.value}`;
      customError.statusKode = 404;
    }
    return res.status(customError.statusKode).json({ msg: customError.msg });
  },
};
