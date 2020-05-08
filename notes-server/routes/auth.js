const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const keys = require('../keys');

const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'Please provide both email and password' });
  }

  const foundUser = await User.findOne({ email });

  if (foundUser) {
    return res
      .status(422)
      .send({ error: 'There is already an account using this email' });
  }

  const user = await User.create({ email, password });

  if (user) {
    const token = jwt.sign({ userId: user._id }, keys.JWT_SECRET);

    return res.send({ token });
  }

  return res.send({ error: 'Server error' });
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'Please provide both email and password' });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(422)
      .send({ error: 'Incorrect email and password combination' });
  }

  const match = await user.comparePasswords(password);

  if (!match) {
    return res
      .status(422)
      .send({ error: 'Incorrect email and password combination' });
  }

  const token = jwt.sign({ userId: user._id }, keys.JWT_SECRET);

  return res.send({ token });
});

module.exports = router;
