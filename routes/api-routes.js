const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  console.log("hello");
  // db.Workout.find({}).then((dbWorkout) => {
  //   console.log(dbWorkout);
  // });
});

module.exports = router;
