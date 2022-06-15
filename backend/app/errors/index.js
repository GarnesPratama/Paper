const { CustomAPIError } = require("./custom-api");
const { UnauthenticatedError } = require("./unauthenticated");
const { Unauthorized } = require("./unauthorized");
const { BadRequestError } = require("./bad-request");
const { NotFound } = require("./not-found");

module.exports = {
  CustomAPIError,
  UnauthenticatedError,
  Unauthorized,
  BadRequestError,
  NotFound,
};
