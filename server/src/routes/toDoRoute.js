const { Router } = require("express");
const router = Router();
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/toDoController");

router.get("/", getToDo);
router.post("/save", saveToDo);
router.patch("/update", updateToDo);
router.delete("/delete", deleteToDo);

module.exports = router;
