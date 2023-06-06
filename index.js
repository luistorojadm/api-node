const app = require("./app");
const port = 3000;
const mongoose = require("mongoose");
const connectDB = require("./conexioDb");

connectDB();

mongoose.connection.once("open", () => {
  console.log("conect");
  app.listen(port, () => {
    console.log("servidor is on port " + port);
  });
});
