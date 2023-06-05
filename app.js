const express = require("express");
const app = express();

// Cargar rutas
const hello_routes = require("./routes/hello");
const task_routers = require("./routes/task");

//Rutas Base

app.use("/api", hello_routes);
app.use("/api", task_routers);

module.exports = app;
