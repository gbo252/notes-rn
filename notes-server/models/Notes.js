const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  _userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('Note', noteSchema);
