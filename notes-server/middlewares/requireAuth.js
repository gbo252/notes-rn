const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const keys = require('../keys');

const User = mongoose.model('User');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in' });
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(token, keys.JWT_SECRET);

    const userDoc = await User.findById(decoded.userId);

    req.user = userDoc;

    return next();
  } catch (err) {
    return res.status(401).send({ error: 'You must be logged in' });
  }
};
