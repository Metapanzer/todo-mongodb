const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./src/routes/toDoRoute.js");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(routes);
app.listen(PORT, () => console.log("Listening on port:" + PORT));
