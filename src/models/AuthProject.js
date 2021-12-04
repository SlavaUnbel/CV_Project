const mongoose = require("mongoose");

const AuthProjectSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "visitor",
  },
});

const AuthProjectModel = mongoose.model("AuthProject", AuthProjectSchema);

module.exports = AuthProjectModel;
