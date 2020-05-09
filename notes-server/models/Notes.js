const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  _userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('Note', noteSchema);
