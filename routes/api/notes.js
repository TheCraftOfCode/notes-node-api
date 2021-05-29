const router = require("express").Router();
const noteController = require("../../controllers/noteController");

router.get("/", noteController.getNotes);

router.post("/", noteController.createNote);

module.exports = router;
