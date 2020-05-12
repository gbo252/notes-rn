const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  dateUpdated: { type: Date, required: true },
  _userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('Note', noteSchema);
