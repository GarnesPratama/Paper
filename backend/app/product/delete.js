const mongoose = require("mongoose");

// Database connection
mongoose.connect(
  "mongodb+srv://paper:paper@cluster0.du2vq.mongodb.net/?retryWrites=true&w=majority"
);
const Delete = mongoose.model("setting", {
  deadlinePayment: { type: String },
});
// Function call
// Deleting all users whose age >= 15
Delete.deleteMany({ deadlinePayment: "22002-12-09T00:00:00.000Z" })
  .then(function () {
    console.log("Data deleted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
