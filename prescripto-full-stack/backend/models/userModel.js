const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
  name: String,
  email: String,
  selectedCourses: [String], // Array of course IDs or course names
});

const User = mongoose.model('User', userSchema);

module.exports = User;
