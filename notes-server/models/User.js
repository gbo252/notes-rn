const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePasswords = async function (inputPassword) {
  try {
    const match = await bcrypt.compare(inputPassword, this.password);

    return match ? true : false;
  } catch (err) {
    return false;
  }
};

mongoose.model('User', userSchema);
