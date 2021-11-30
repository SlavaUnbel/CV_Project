const express = require("express");
const portfolioItemsRouter = express.Router();
const {
  ExpandingCardsModel,
  RotatingNavigationModel,
  FaqCollapseModel,
  TestimonialsSwitcherModel,
} = require("../../models/PortfolioItems");

const getData = (res, model) =>
  model.find({}, (err, result) =>
    err
      ? res.send({ message: "Failed to read values from the database" })
      : res.send(result)
  );

portfolioItemsRouter.get("/expanding-cards", (_req, res) =>
  getData(res, ExpandingCardsModel)
);

portfolioItemsRouter.get("/rotating-navigation", (_req, res) =>
  getData(res, RotatingNavigationModel)
);

portfolioItemsRouter.get("/faq-collapse", (_req, res) =>
  getData(res, FaqCollapseModel)
);

portfolioItemsRouter.get("/testimonials-switcher", (_req, res) =>
  getData(res, TestimonialsSwitcherModel)
);

module.exports = portfolioItemsRouter;
