const { Router } = require("express");
const router = Router();
const { getToDo, saveToDo } = require("../controllers/toDoController");

router.get("/", getToDo);
router.post("/save", saveToDo);

module.exports = router;
