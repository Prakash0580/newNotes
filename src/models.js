const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({

    id: { type: String, unique: true, require: true },
    userId: { type: String, require: true },
    title: { type: String, require: true },
    content: { type: String },
    crdate: {
        type: Date, default: Date.now
    }
})

// NotesSchema.save();
const NotesModel = mongoose.model("Note", NotesSchema);

module.exports = NotesModel;