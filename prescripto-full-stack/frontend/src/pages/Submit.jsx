import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Request.css';

const Submit = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const submitRequest = () => {
    // Show the submission card
    setIsSubmitted(true);

    // Redirect to the /submit route after 30 seconds
    setTimeout(() => {
      navigate('/submit'); // Navigate to /submit page
    }, 30000); // 30000 milliseconds = 30 seconds
  };

  return (
    <div>
      <button className="submit-button" onClick={submitRequest}>Submit</button>

      {/* Submission Card */}
      {isSubmitted && (
        <div className="submit">
          <div className="card-content">
            <h3>Your request has been submitted</h3>
            <p>We will respond to it within the next 24 hours. Please check your email regularly for further updates.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Submit;
