const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materialSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    given: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Material = mongoose.model("material", materialSchema);
module.exports = Material;
