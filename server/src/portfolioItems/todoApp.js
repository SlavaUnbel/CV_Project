const express = require("express");
const todoAppRouter = express.Router();
const TodosModel = require("../models/Todos");

const getTodos = (res) =>
  TodosModel.find({}, (err, result) =>
    err
      ? res.send({ message: "Failed to read values from the database" })
      : res.send(result)
  );

todoAppRouter.get("/get", (_req, res) => getTodos(res));

todoAppRouter.post("/add", async (req, res) => {
  const todo = req.body.todo;
  const todos = new TodosModel({ todo });

  try {
    await todos.save();
  } catch (error) {
    res.send({ message: "Failed to add a new todo to the database" });
  } finally {
    getTodos(res);
  }
});

todoAppRouter.post("/complete", async (req, res) => {
  const id = req.body.id;
  const completed = !req.body.completed;

  try {
    await TodosModel.collection.updateOne({ id }, { $set: { completed } });
  } catch (error) {
    res.send({ message: "Failed to mark current todo as completed" });
  } finally {
    getTodos(res);
  }
});

todoAppRouter.post("/remove", async (req, res) => {
  const id = req.body.id;

  try {
    await TodosModel.collection.deleteOne({ id });
  } catch (error) {
    res.send({ message: "Failed to delete current todo" });
  } finally {
    getTodos(res);
  }
});

module.exports = todoAppRouter;
