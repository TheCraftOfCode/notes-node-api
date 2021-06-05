const Note = require("../models/Note");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/ErrorResponse");

exports.getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.status(200).json(notes);
});

exports.createNote = asyncHandler(async (req, res) => {
  const _note = new Note(req.body);
  note.user = req.user.id;
  await _note.save();
  res.status(201).json({ note });
});

exports.deleteNote = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const _note = await Note.findById(id);

  if (!_note)
    return next(new ErrorResponse(`Note with ID: ${id} not found`, 400));

  if (req.user.id !== String(_note.user))
    return next(
      new ErrorResponse("Only creators of note can delete them", 401)
    );

  await _note.remove();

  res.status(200).send({ success: true, message: "Note successfully removed" });
});
