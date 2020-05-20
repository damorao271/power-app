const express = require("express");
const router = express.Router();
let Exercise = require("../models/exercise.model");

router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date),
  });

  newExercise
    .save()
    .then(() => res.json("Excercise added !"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
