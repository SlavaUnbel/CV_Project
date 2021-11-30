const express = require("express");
const todoAppRouter = express.Router();
const TodosModel = require("../../models/Todos");

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

todoAppRouter.put("/complete/:id", async (req, res) => {
  const _id = req.params.id;
  const completed = !req.body.todo.completed;

  try {
    await TodosModel.findByIdAndUpdate({ _id }, { $set: { completed } });
  } catch (error) {
    res.send({ message: "Failed to mark current todo as completed" });
  } finally {
    getTodos(res);
  }
});

todoAppRouter.delete("/remove/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    await TodosModel.findByIdAndRemove({ _id });
  } catch (error) {
    res.send({ message: "Failed to delete current todo" });
  } finally {
    getTodos(res);
  }
});

module.exports = todoAppRouter;
