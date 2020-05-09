const express = require('express');
const mongoose = require('mongoose');

const requireAuth = require('../middlewares/requireAuth');

const Note = mongoose.model('Note');

const router = express.Router();

router.use(requireAuth);

router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find({ _userId: req.user._id });

    res.send(notes);
  } catch (error) {
    res.status(422).send({ error });
  }
});

router.post('/notes', async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(422)
      .send({ error: 'Please provide both title and content' });
  }

  try {
    const newNote = await Note.create({
      title,
      content,
      _userId: req.user._id,
    });

    res.send(newNote);
  } catch (error) {
    res.status(422).send({ error });
  }
});

module.exports = router;
