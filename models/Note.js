const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Note title is required"],
    minlength: 6,
  },
  content: {
    type: String,
    required: [true, "Please provide note content"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Note creator must be present"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
