const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  note: {
    type: String,
    default: "",
  },
  editing: {
    type: Boolean,
    default: true,
  },
});

const NotesModel = mongoose.model("Notes", NotesSchema);

module.exports = NotesModel;
