const router = require("express").Router();
const { getNotes, createNote } = require("../controllers/noteController");
const authenticateUser = require("../middleware/authenticateUser");

router.get("/", authenticateUser, getNotes);
router.post("/", authenticateUser, createNote);

module.exports = router;
