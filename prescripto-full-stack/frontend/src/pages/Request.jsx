import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Request.css';

const Request = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNextClick = () => {
    // Navigate to the next page (e.g., /next-step)
    navigate('/course-selection'); 
  };

  return (
    <div className="peer-tutoring-container">
      <h2 className="text-2xl font-semibold text-[#0f291f]">Peer Tutoring Request Form</h2>
      <p className="info-text">
        The UC Peer Facilitators' Project CHAMPION: Peer Tutoring Program builds upon one academic community's greatest strengths, the pervasive culture of passionate support from all members of its family, by coordinating efforts for students to help students so not just one, but all Jaguars can achieve their very best.
      </p>
      <p className="info-text">
        The organization provides a free peer tutoring program for all UCians. All peer tutors under the program are current UC students who have completed the courses tutoring is requested in and do so as a volunteer service to the school. Students availing of the peer tutoring service will be matched with their peer tutors, usually within 24 hours after submitting a peer tutoring request form (depending upon contract with peer tutor), all peer tutoring request forms submitted beyond 5:00 PM will be processed the next academic day. Students participating in peer tutoring will meet at least once per week unless there are extenuating circumstances.
      </p>
      
      <h3 className="advantages-heading text-2xl text-[#0f291f]">Advantages of peer tutoring:</h3>
      <ul className="advantages-list text-xl">
        <li className="advantages-item">Tutees receive assistance from tutors who are familiar with the content they are struggling with.</li>
        <li className="advantages-item">Tutors can also share insight into the social challenges of a particular focus.</li>
        <li className="advantages-item">The service is provided by ARGS, free of charge, and in a convenient location.</li>
      </ul>

      <h3 className="notes-heading text-2xl text-[#0f291f]">Notes:</h3>
      <ul className="notes-list">
        <li className="notes-item">Transportation, snacks, and any other materials/equipment are not provided to or from peer tutoring and must therefore be provided by the student.</li>
        <li className="notes-item">Peer tutors work voluntarily, thus the schedule for a tutoring session will depend upon the availability of a peer tutor. Students will be immediately informed of the tutoring schedule once matched with a peer tutor.</li>
        <li className="notes-item">All tutoring sessions will be conducted within the school premises only.</li>
      </ul>

      <div className="contact-info  text-[#0f291f]">
        <h4>Contact us for more information:</h4>
        <p>Facebook: UC Peer Facilitators</p>
        <p>Email: ucpforg@uc-bcf.edu.ph</p>
      </div>

      <p className="thank-you">Thank you so much.</p>
      <p className="warm-regards">Warm regards,</p>
      <p className="peer-facilitators">UC Peer Facilitators</p>

      <div className="submit-container">
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default Request;
