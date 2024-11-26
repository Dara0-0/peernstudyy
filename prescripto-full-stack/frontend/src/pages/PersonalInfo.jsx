import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Request.css';

const PersonalInfo = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    idNo: '',
    sex: '',
    age: '',
    fullName: '',
    courseYear: '',
    college: '',
    contactNo: '',
    ucEmail: '',
    availability: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSexChange = (e) => {
    setFormData({ ...formData, sex: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    console.log("Submitting form data:", formData); 
    
    if (isSubmitted) {
      // If the form is already submitted, show an error
      alert("Your request has already been submitted.");
      return;
    }

    const newErrors = {};

    if (!formData.idNo.match(/^\d{2}-\d{4}-\d{3}$/)) {
      newErrors.idNo = "Input your student ID in the format ##-####-###";
    }
    if (!formData.sex) {
      newErrors.sex = "Please select your sex";
    }
    if (!formData.age || isNaN(formData.age) || formData.age <= 0) {
      newErrors.age = "Please enter a valid age";
    }
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.courseYear) {
      newErrors.courseYear = "Course & Year Level is required";
    }
    if (!formData.college) {
      newErrors.college = "Please select your college";
    }
    if (!formData.contactNo.match(/^\d{11}$/)) {
      newErrors.contactNo = "Contact No must be 11 digits";
    }
    if (!formData.ucEmail.match(/^[a-zA-Z0-9._%+-]+@students\.uc-bcf\.edu\.ph$/)) {
      newErrors.ucEmail = "UC Email must be in the format @students.uc-bcf.edu.ph";
    }
    if (!formData.availability) {
      newErrors.availability = "Availability is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, proceed with submission
      try{
        await axios.post('http://localhost:4000/api/forms/submit', formData);
        setIsSubmitted(true);  // Mark as submitted
        setShowPopup(true);  // Show success popup
      } catch(error) {
        alert("Error submitting the form. Please try again later.");
      }
    }
  };

  const handleBackClick = (e) => {
    e.preventDefault();  // Prevent form submission on button click
    navigate('/course-selection');  // Navigate to the course-selection page
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/');  // Redirect to the home page once the popup is closed
  };

  const filterDate = (date) => {
    const dayOfWeek = date.getDay(); // 0 is Sunday, 6 is Saturday
    const currentTime = new Date();
    const currentDay = currentTime.getDay();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    const isValidDay = dayOfWeek >= 1 && dayOfWeek <= 6; // Monday to Saturday
    const isValidTime = date >= currentTime; // After current time

    return isValidDay && isValidTime;
  };

  return (
    <div className="personal-info-container">
      <h2 className="text-2xl font-semibold text-[#0f291f]">Peer Tutoring Request Form</h2>
      <p className="info-text">Please fill in your personal information below.</p>

      <form className="personal-info-form" onSubmit={handleSubmit}>
        {/* ID Number */}
        <div className="form-group">
          <label>ID No:</label>
          <input
            type="text"
            name="idNo"
            value={formData.idNo}
            onChange={handleInputChange}
            placeholder="##-####-###"
          />
          {errors.idNo && <span className="error-message">{errors.idNo}</span>}
        </div>

        {/* Sex */}
        <div className="form-group">
          <label>Sex:</label>
          <select name="sex" value={formData.sex} onChange={handleSexChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {formData.sex === "Other" && (
            <input
              type="text"
              name="otherSex"
              value={formData.otherSex || ''}
              onChange={handleInputChange}
              placeholder="Specify"
            />
          )}
          {errors.sex && <span className="error-message">{errors.sex}</span>}
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. Dela Cruz, Juan B."
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        {/* Course & Year Level */}
        <div className="form-group">
          <label>Course & Yr. Level:</label>
          <input
            type="text"
            name="courseYear"
            value={formData.courseYear}
            onChange={handleInputChange}
            placeholder="Enter your course and year"
          />
          {errors.courseYear && <span className="error-message">{errors.courseYear}</span>}
        </div>

        {/* College */}
        <div className="form-group">
          <label>College:</label>
          <select name="college" value={formData.college} onChange={handleInputChange}>
            <option value="">Select College</option>
            <option value="CITCS">CITCS</option>
            <option value="CBA">CBA</option>
            <option value="CTE">CTE</option>
            <option value="COL">COL</option>
            <option value="CEA">CEA</option>
            <option value="CAS">CAS</option>
            <option value="COA">COA</option>
          </select>
          {errors.college && <span className="error-message">{errors.college}</span>}
        </div>

        {/* Contact No */}
        <div className="form-group">
          <label>Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            placeholder="Enter 11-digit contact number"
          />
          {errors.contactNo && <span className="error-message">{errors.contactNo}</span>}
        </div>

        {/* UC Email */}
        <div className="form-group">
          <label>UC Email:</label>
          <input
            type="email"
            name="ucEmail"
            value={formData.ucEmail}
            onChange={handleInputChange}
            placeholder="example@students.uc-bcf.edu.ph"
          />
          {errors.ucEmail && <span className="error-message">{errors.ucEmail}</span>}
        </div>

        {/* Availability */}
        <div className="form-group">
          <label>Availability:</label>
          <DatePicker
            selected={formData.availability}
            onChange={(date) => setFormData({ ...formData, availability: date })}
            showTimeSelect
            timeIntervals={30}
            dateFormat="MMMM d, yyyy h:mm aa"
            filterDate={filterDate}
            minDate={new Date()}
          />
          {errors.availability && <span className="error-message">{errors.availability}</span>}
        </div>

        <div className="navigation-buttons">
            <button onClick={handleBackClick} className="back-button">Back</button>
            <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Your request has been successfully submitted!</p>
            <button onClick={handleClosePopup} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
