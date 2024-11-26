const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] // Reference to Course model
});

module.exports = mongoose.model('College', collegeSchema);
