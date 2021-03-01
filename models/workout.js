const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercise: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter type of exercise",
      },
      name: {
        type: String,
        trim: true,
        require: "Exercise name",
      },
      duration: {
        type: Number,
        required: "Please enter duration of exercise in minutes",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
