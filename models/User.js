const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    minlength: 4
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  address: {
    street: {
      type: String,
      required: true
    },
    suite: String,
    city: {
      type: String,
      required: true,
      match: /^[a-zA-Z\s]+$/
    },
    zipcode: {
      type: String,
      required: true,
      match: /^\d{5}-\d{4}$/
    },
    geo: {
      lat: String,
      lng: String
    }
  },
  phone: {
    type: String,
    required: true,
    match: /^1-\d{3}-\d{3}-\d{4}$/
  },
  website: {
    type: String,
    required: true,
    match: /^(http|https):\/\/[^ "]+$/
  },
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }
});

module.exports = mongoose.model('User', userSchema);
