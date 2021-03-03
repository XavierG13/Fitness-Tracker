const db = require("../models");
const app = require("express").Router();

// creates the workout
app.post("/api/workouts", ({ body }, res) => {
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

// gets workouts in range
app.get("/api/workout/range", (req, res) => {
  db.workout
    .find({})
    .then((dbWorkout) => {
      // console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add an exercise
app.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);
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
