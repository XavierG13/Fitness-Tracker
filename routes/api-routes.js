const db = require("../models");
const app = require("express").Router();

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

module.exports = app;
