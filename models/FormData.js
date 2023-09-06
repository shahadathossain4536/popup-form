// models/FormData.js

const mongoose = require('mongoose');
const {Schema}= mongoose
const formDataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  consent: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('FormSubmit', formDataSchema);
