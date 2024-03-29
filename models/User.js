const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  // Fields for Google authentication
  googleId: String,
  googleName: String,
  googleEmail: String,
  // Fields for email verification (only for local signup)
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
