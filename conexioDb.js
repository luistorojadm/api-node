const mongoose = require("mongoose");
const urlMogoSrv = "mongodb://127.0.0.1:27017/tareas";

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

module.exports = connectDB;
