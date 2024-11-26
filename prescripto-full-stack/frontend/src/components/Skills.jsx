import React, { useEffect } from 'react';
import { assets } from '../assets/assets'; 
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    function animateSkills() {
      const skillItems = document.querySelectorAll('.skill-items .item');
      skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
      });

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.3,
        }
      );

      skillItems.forEach(item => {
        observer.observe(item);
      });
    }

    animateSkills();
  }, []);

  return (
    <div className="skills" id="skills">
      <h3 className="text-3xl font-medium text-center mb-6">How It Works</h3>
      <div className="skill-items">
        <div className="item">
          <div className="icon">
            <img src={assets.register} alt="Register" className="w-8 h-8" />
          </div>
          <h4>Register</h4>
          <p>Sign up and select your desired courses for tutoring</p>
        </div>
        <div className="item">
          <div className="icon">
            <img src={assets.schedule} alt="Schedule" />
          </div>
          <h4>Schedule</h4>
          <p>Book sessions at times that work best for you</p>
        </div>
        <div className="item">
          <div className="icon">
            <img src={assets.learn} alt="Learn" className="w-8 h-8" />
          </div>
          <h4>Learn</h4>
          <p>Connect with your tutor and excel in your studies</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
