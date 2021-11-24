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

notesAppRouter.post("/edit", async (req, res) => {
  const id = req.body.note.id;
  const note = req.body.note.note;
  const editing = !req.body.note.editing;

  try {
    await NotesModel.collection.updateOne({ id }, { $set: { note, editing } });
  } catch {
    res.send({ message: "Failed to update current note" });
  } finally {
    getNotes(res);
  }
});

notesAppRouter.post("/remove", async (req, res) => {
  const id = req.body.note.id;

  try {
    await NotesModel.collection.deleteOne({ id });
  } catch {
    res.send({ message: "Failed to delete current note" });
  } finally {
    getNotes(res);
  }
});

module.exports = notesAppRouter;
