const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true,
  },
  editing: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const NotesModel = mongoose.model("Notes", NotesSchema);

module.exports = NotesModel;
