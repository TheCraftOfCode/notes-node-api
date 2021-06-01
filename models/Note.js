const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Note title is required'],
      minlength: 6,
    },
    content: {
      type: String,
      required: [true, 'Please provide note content'],
    },
  },
  { timestamps: true }
);

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
