const Task = require("../models/task");

async function createTask(req, res) {
  const task = new Task();
  const param = req.body;

  task.title = param.title;
  task.description = param.description;

  try {
    const taskStore = await task.save();
    if (!taskStore) {
      res.status(400).send({ msg: "No se a guardado la tarea" });
    } else {
      res.status(200).send({ task: taskStore });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

async function getTasks(req, res) {
  try {
    const task = await Task.find({ completed: false }).sort({ create_at: -1 });
    if (!task) {
      res.status(400).send({ msg: "error al obtener las tareas" });
    } else {
      res.status(200).send(task);
    }
  } catch (error) {
    res.status(500).send(erro);
  }
}

async function getTask(req, res) {
  const idTask = req.params.id;
  try {
    const task = await Task.findById(idTask);
    if (!task) {
      res
        .status(400)
        .send({ msg: "no se encontro la tarea con el id :" + idTask });
    } else {
      res.status(200).send(task);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function updeteTask(req, res) {
  const idTask = req.params.id;
  const params = req.body;
  try {
    const task = await Task.findByIdAndUpdate(idTask, params);
    if (!task) {
      res
        .status(400)
        .send({ msg: "no se encontro la tarea con el id :" + idTask });
    } else {
      res.status(200).send(task);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteTask(req, res) {
  const idTask = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(idTask);
    if (!task) {
      res
        .status(400)
        .send({ msg: "no se encontro la tarea con el id :" + idTask });
    } else {
      res.status(200).send(task);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
module.exports = {
  createTask,
  getTasks,
  getTask,
  updeteTask,
  deleteTask,
};
