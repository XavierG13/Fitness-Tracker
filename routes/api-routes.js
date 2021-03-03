const db = require("../models");
const app = require("express").Router();

// creates the workout
app.post("/api/workout", ({ body }, res) => {
  // console.log("workout");
  db.workout
    .create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// gets the workout and totals the duration
app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((dbWorkout) => {
    // console.log(dbWorkout);
    dbWorkout.forEach((workout) => {
      let total = 0;
      workout.exercise.forEach((e) => {
        total += e.duration;
      });

      workout.totalDuration = total;
    });
  });
});

// add an exercise
app.put("/api/workout/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    req.params.id,
    { $push: { exercise: req.body } },
    { new: true }
  )
    .then((found) => {
      res.json(found);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = app;
