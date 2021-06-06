const router = require("express").Router();
const {
  getNotes,
  createNote,
  deleteNote,
} = require("../controllers/noteController");
const authenticateUser = require("../middleware/authenticateUser");

router.get("/", authenticateUser, getNotes);
router.post("/", authenticateUser, createNote);
router.delete("/:id/", authenticateUser, deleteNote);

module.exports = router;
