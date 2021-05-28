const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Note title is required'],
        minlength: 6
    },
    content: {
        type: String,
        required: [true, 'Please provide note content']
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
