const Note = require("../models/Note");

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};

exports.createNote = async (req, res) => {
  const note = new Note(req.body);
  await note.save();
  res.status(201).json(note);
};
