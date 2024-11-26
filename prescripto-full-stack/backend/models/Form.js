const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  idNo: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: Number, required: true },
  fullName: { type: String, required: true },
  courseYear: { type: String, required: true },
  college: { type: String, required: true },
  contactNo: { type: String, required: true },
  ucEmail: { type: String, required: true },
  availability: { type: String, required: true }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
