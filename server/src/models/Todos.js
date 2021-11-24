const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodosModel = mongoose.model("Todos", TodosSchema);

module.exports = TodosModel;
