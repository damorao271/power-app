const mongoose = require("mongoose");

const exeriseSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Excercise", exeriseSchema);

module.exports = Exercise;
