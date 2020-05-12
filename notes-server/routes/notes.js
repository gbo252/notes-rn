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
  const { content } = req.body;

  if (!content) {
    return res
      .status(422)
      .send({ error: 'Please provide content' });
  }

  try {
    const newNote = await Note.create({
      content,
      dateUpdated: Date.now(),
      _userId: req.user._id,
    });

    res.send(newNote);
  } catch (error) {
    res.status(422).send({ error });
  }
});

router.put('/notes', async (req, res) => {
  const { _id, content } = req.body;

  try {
    await Note.findOneAndUpdate({ _id }, { content, dateUpdated: Date.now() });
    res.sendStatus(201);
  } catch (err) {
    res.status(422).send({ error });
  }
});

router.delete('/notes', async (req, res) => {
  const { _id } = req.body;

  try {
    await Note.deleteOne({ _id });
    res.sendStatus(204);
  } catch (err) {
    res.status(422).send({ error });
  }
});

module.exports = router;
