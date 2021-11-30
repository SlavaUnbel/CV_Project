const mongoose = require("mongoose");

const ExpandingCardsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const ExpandingCardsModel = mongoose.model(
  "ExpandingCards",
  ExpandingCardsSchema
);

const RotatingNavigationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  introText: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  articleTitles: {
    type: Array,
    required: true,
  },
  articleParagraphs: {
    type: Array,
    required: true,
  },
});

const RotatingNavigationModel = mongoose.model(
  "RotatingNavigation",
  RotatingNavigationSchema
);

const FaqCollapseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const FaqCollapseModel = mongoose.model("FaqCollapse", FaqCollapseSchema);

const TestimonialsSwitcherSchema = new mongoose.Schema({
  testimonial: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

const TestimonialsSwitcherModel = mongoose.model(
  "TestimonialsSwitcher",
  TestimonialsSwitcherSchema
);

module.exports = {
  ExpandingCardsModel,
  RotatingNavigationModel,
  FaqCollapseModel,
  TestimonialsSwitcherModel,
};
