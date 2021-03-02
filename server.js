// install required packages
const express = require("express");
const mongoose = require("mongoose");

// sets up PORT
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use static files public
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

// routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
