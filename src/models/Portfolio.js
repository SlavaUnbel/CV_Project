const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  imgSrc: {
    type: String,
    required: true,
  },
  videoSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  criteria: {
    type: String,
    required: true,
  },
});

const PortfolioModel = mongoose.model("Portfolio", PortfolioSchema);

module.exports = PortfolioModel;
