const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Category = new Schema(
  {
    name: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", Category);