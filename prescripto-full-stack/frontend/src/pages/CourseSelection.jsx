import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Request.css';

const CourseSelection = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const navigate = useNavigate();

  // Handle course selection
  const handleCheckboxChange = (course) => {
    setSelectedCourses(prevState => {
      if (prevState.includes(course)) {
        return prevState.filter(item => item !== course); // Remove the course if already selected
      } else {
        return [...prevState, course]; // Add the course if not selected
      }
    });
  };

  const handleNextClick = () => {
    if (selectedCourses.length === 0) {
      alert("Please select at least one course.");
    } else {
      console.log("Selected Courses: ", selectedCourses);
      navigate('/personal-info'); // Navigate to the next page for personal info
    }
  };

  const handleBackClick = () => {
    navigate('/request'); // Navigate back to the previous request page
  };

  // Disable next button if no courses are selected
  const isNextDisabled = selectedCourses.length === 0;

  return (
    <div className="course-selection-container">
      <h2 className="text-2xl font-semibold text-[#0f291f]">Peer Tutoring Request Form</h2>
      <p className="info-text">Please select the course/courses you need a peer tutor for.</p>
      
      {/* Scrollable Course Lists */}
      <div className="courses-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {/* General Education Courses */}
        <section className="course-category">
          <h3 className="category-title">1. General Education Courses</h3>
          <ul className="course-items">
            <li>
              <label>
                <input type="checkbox" onChange={() => handleCheckboxChange('MATH 100')} /> MATH 100 (MATHEMATICS IN THE MODERN WORLD)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" onChange={() => handleCheckboxChange('ENG 100')} /> ENG 100 (PURPOSIVE COMMUNICATION)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" onChange={() => handleCheckboxChange('PSYCH 100')} /> PSYCH 100 (UNDERSTANDING THE SELF)
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" onChange={() => handleCheckboxChange('SOC SCI 100')} /> SOC SCI 100 (ART APPRECIATION)
              </label>
            </li>
          </ul>
        </section>

        {/* COA Courses */}
        <section className="course-category">
          <h3 className="category-title">2. COA Courses</h3>
          <ul className="course-items">
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('OBLICON')} /> OBLICON (OBLIGATIONS AND CONTRACTS)</label>
            </li>
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('AE 100')} /> AE 100 (FINANCIAL ACCOUNTING AND REPORTING)</label>
            </li>
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('AE 101')} /> AE 101 (MANAGERIAL ECONOMICS)</label>
            </li>
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('AE 102')} /> AE 102 (CONCEPTUAL FRAMEWORK AND ACCOUNTING STDS)</label>
            </li>
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('AE 103')} /> AE 103 (COST ACCOUNTING AND CONTROL)</label>
            </li>
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('AE 104')} /> AE 104 (ECONOMIC DEVELOPMENT)</label>
            </li>
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('AE 105')} /> AE 105</label>
            </li>
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('AE 106')} /> AE 106 (MANAGEMENT SCIENCE)</label>
            </li>
            <li>
              <label><input type="checkbox" onChange={() => handleCheckboxChange('AE 109')} /> AE 109</label>
            </li>
          </ul>
        </section>

        {/* CAS Courses */}
        <section className="course-category">
          <h3 className="category-title">3. CAS Courses</h3>
          <ul className="course-items">
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('PSY 101')} /> PSY 101 (INTRO TO PSYCHOLOGY)</label></li>
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('PSY 103')} /> PSY 103 (PSYCHOLOGICAL STATISTICS)</label></li>
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('SCIENCE 101')} /> SCIENCE 101 (ANATOMY AND PHYSIOLOGY)</label></li>
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('SCIENCE 102')} /> SCIENCE 102 (GENERAL AND INORGANIC CHEMISTRY)</label></li>
          </ul>
        </section>

        {/* COL Courses */}
        <section className="course-category">
          <h3 className="category-title">4. COL Courses</h3>
          <ul className="course-items">
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('CRIM LAW 1')} /> CRIM LAW 1 (CRIMINAL LAW 1)</label></li>
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('CRIM LAW 2')} /> CRIM LAW 2 (CRIMINAL LAW 2)</label></li>
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('MM103')} /> MM103 (PRODUCT MANAGEMENT)</label></li>
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('STATUTORY CONSTITUTION')} /> STATUTORY CONSTITUTION</label></li>
          </ul>
        </section>

        {/* CTE Courses */}
        <section className="course-category">
          <h3 className="category-title">5. CTE Courses</h3>
          <ul className="course-items">
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('MathEd 101')} /> MathEd 101 (COLLEGE AND ADVANCED ALGEBRA)</label></li>
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('MATHED 114')} /> MATHED 114 (ADVANCED STATISTICS)</label></li>
          </ul>
        </section>

        {/* CBA Courses */}
        <section className="course-category">
          <h3 className="category-title">6. CBA Courses</h3>
          <ul className="course-items">
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('MM')} /> MM (PRODUCT MANAGEMENT)</label></li>
            <li><label><input type="checkbox" onChange={() => handleCheckboxChange('SALES')} /> SALES</label></li>
          </ul>
        </section>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="btn back-button" onClick={handleBackClick}>Back</button>
        <button className="btn next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default CourseSelection;
