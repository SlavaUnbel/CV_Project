const express = require("express");
const notesAppRouter = express.Router();
const NotesModel = require("../models/Notes");

const getNotes = (res) =>
  NotesModel.find({}, (err, result) =>
    err
      ? res.send({ message: "Failed to read values from the database" })
      : res.send(result)
  );

notesAppRouter.get("/get", (_req, res) => getNotes(res));

notesAppRouter.post("/add", async (_req, res) => {
  const note = new NotesModel({});

  try {
    await note.save();
  } catch {
    res.send({ message: "Failed to add a new note to the database" });
  } finally {
    getNotes(res);
  }
});

notesAppRouter.put("/rename/:id", async (req, res) => {
  const _id = req.params.id;
  const title = req.body.note.title;
  const renaming = !req.body.note.renaming;

  try {
    await NotesModel.findByIdAndUpdate({ _id }, { $set: { title, renaming } });
  } catch {
    res.send({ message: "Failed to rename current note" });
  } finally {
    getNotes(res);
  }
});

notesAppRouter.put("/edit/:id", async (req, res) => {
  const _id = req.params.id;
  const editing = true;

  try {
    await NotesModel.findByIdAndUpdate({ _id }, { $set: { editing } });
  } catch {
    res.send({ message: "Failed to set updating current note" });
  } finally {
    getNotes(res);
  }
});

notesAppRouter.put("/save/:id", async (req, res) => {
  const _id = req.params.id;
  const note = req.body.note.note;
  const editing = false;

  try {
    await NotesModel.findByIdAndUpdate({ _id }, { $set: { note, editing } });
  } catch {
    res.send({ message: "Failed to update current note" });
  } finally {
    getNotes(res);
  }
});

notesAppRouter.delete("/remove/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    await NotesModel.findByIdAndRemove({ _id });
  } catch {
    res.send({ message: "Failed to delete current note" });
  } finally {
    getNotes(res);
  }
});

module.exports = notesAppRouter;
