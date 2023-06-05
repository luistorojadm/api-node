const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;
const urlMogoSrv = "mongodb://localhost:27017/notas";

const connectDB = async () => {
  try {
    await mongoose.connect(urlMogoSrv, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

app.listen(port, () => {
  console.log("servidor is on port " + port);
});
