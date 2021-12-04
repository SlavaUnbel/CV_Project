const express = require("express");
const portfolioRouter = express.Router();
const PortfolioModel = require("../../models/Portfolio");

portfolioRouter.get("/", (_req, res) =>
  PortfolioModel.find({}, (err, result) =>
    err
      ? res.send({ message: "Failed to read values from the database" })
      : res.send(result)
  )
);

module.exports = portfolioRouter;
