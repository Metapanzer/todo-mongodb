const toDoModel = require("../models/toDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await toDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  toDoModel.create({ text }).then((data) => {
    console.log("Added successfully");
    console.log(data);
    res.send(data);
  });
};
