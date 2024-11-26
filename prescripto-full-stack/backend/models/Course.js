const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true }, // Reference to College
});

module.exports = mongoose.model('Course', courseSchema);
