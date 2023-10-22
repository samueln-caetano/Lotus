const { Router } = require("express");
const { getTask, saveTask, updateTask, deleteTask } = require("../controllers/taskControllers");

const routerTask = Router();

routerTask.get("/", getTask);
routerTask.post("/save", saveTask);
routerTask.put("/update", updateTask);
routerTask.delete("/delete", deleteTask);

module.exports = routerTask;
