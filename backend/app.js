var createError = require("http-errors");
var express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
mongoose.connect(
  "mongodb+srv://paper:paper@cluster0.du2vq.mongodb.net/?retryWrites=true&w=majority"
);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const productRouter = require("./app/product/router");
const paymentRouter = require("./app/payment/router");
const authRouter = require("./app/auth/router");
const apiRouter = require("./app/api/v1/router");
const eventRouter = require("./app/event/router");
const bankRouter = require("./app/bank/router");
const oAuthRouter = require("./app/OAuth2/router");
const timelineRouter = require("./app/timeline/router");
const scopeRouter = require("./app/scope/router");
const pricingRouter = require("./app/pricing/router");
const ioaRouter = require("./app/ioa-abstract/router");
const emailRouter = require("./app/email/router");

// middleware

const { notFound } = require("./app/middlewares/notFound");
const { errorHandleMiddleware } = require("./app/middlewares/handler-error");

var app = express();
const apiVersion1 = "/api/v1";

//

// cors
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use(`${apiVersion1}/product`, productRouter);
app.use(`${apiVersion1}/payment`, paymentRouter);
app.use(`${apiVersion1}/auth`, authRouter);
app.use(`${apiVersion1}`, apiRouter);
app.use(`${apiVersion1}/event`, eventRouter);
app.use(`${apiVersion1}/bank`, bankRouter);
app.use(`${apiVersion1}/oauth`, oAuthRouter);
app.use(`${apiVersion1}/timeline`, timelineRouter);
app.use(`${apiVersion1}/scope`, scopeRouter);
app.use(`${apiVersion1}/pricing`, pricingRouter);
app.use(`${apiVersion1}/ioa`, ioaRouter);
app.use(`${apiVersion1}/email`, emailRouter);

app.use(notFound);
app.use(notFound);
app.use(errorHandleMiddleware);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
