const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.status(200).json(notes);
};

exports.createNote = async (req, res) => {
  const note = new Note(req.body);
  note.user = req.user.id;
  await note.save();
  res.status(201).json({ note });
};
