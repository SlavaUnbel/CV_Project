const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
  },
  note: {
    type: String,
    default: "",
  },
  renaming: {
    type: Boolean,
    default: true,
  },
  editing: {
    type: Boolean,
    default: true,
  },
});

const NotesModel = mongoose.model("Notes", NotesSchema);

module.exports = NotesModel;
