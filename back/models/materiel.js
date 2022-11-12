const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const materielSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Materiel = mongoose.model("matériel", materielSchema);
module.exports = Materiel;
