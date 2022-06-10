const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect("mongodb://localhost:27017/test");
const app = express();

const productRoutes = require("./src/product/routes");
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(upload.array());uj
app.use(bodyParser.json());
//app.use(forms.array());
app.use(express.static("public"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/", productRoutes);

app.listen(4000);
