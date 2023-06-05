const Task = require("../models/task");

function createTask(req, res) {
  console.log("Hola Tarea");
  console.log(req);
}

module.exports = {
  createTask,
};
