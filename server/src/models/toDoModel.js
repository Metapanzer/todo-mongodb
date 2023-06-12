const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  text: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("toDo", toDoSchema);
