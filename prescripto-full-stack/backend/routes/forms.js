import express from 'express';
import Form from '../models/Form.js';  // Make sure Form model is correctly imported

const router = express.Router();

// POST route for form submission
router.post('/forms/submit', async (req, res) => {
    const { idNo, sex, age, fullName, courseYear, college, contactNo, ucEmail, availability } = req.body;
  
    // Simple validation (you can expand this)
    if (!idNo || !sex || !age || !fullName || !courseYear || !college || !contactNo || !ucEmail || !availability) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      console.log("Form Data: ", req.body);  // Log the data to check if it's correct
  
      const newForm = new Form({
        idNo,
        sex,
        age,
        fullName,
        courseYear,
        college,
        contactNo,
        ucEmail,
        availability,
      });
  
      // Save form data to MongoDB
      await newForm.save();
      res.status(201).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error: ", error);  // Log the error if there is one
      res.status(500).json({ message: "Server error, please try again later." });
    }
});

export default router;
