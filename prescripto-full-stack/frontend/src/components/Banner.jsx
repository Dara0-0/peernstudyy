import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    return (
      <div className="flex flex-col items-center bg-[#0f291f] rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
        {/* Header */}
        <div className="text-3xl my-10 text-white">
          <p>
            BENEFITS OF <span className="text-white font-semibold">PEER TUTORING</span>
          </p>
        </div>
  
        {/* Benefits Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#53645e] hover:text-white transition-all duration-300 text-white cursor-pointer rounded-lg">
            <b>Boost Academic Success</b>
            <p>
              Peer tutoring enhances understanding and performance for both tutors and tutees, fostering academic growth through personalized learning.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#53645e] hover:text-white transition-all duration-300 text-white cursor-pointer rounded-lg">
            <b>Build Collaboration Skills</b>
            <p>
              Students develop teamwork, communication, and empathy while engaging in a supportive and interactive environment.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#53645e] hover:text-white transition-all duration-300 text-white cursor-pointer rounded-lg">
            <b>Cost-Effective Support</b>
            <p>
              A practical alternative to professional tutoring, peer tutoring maximizes resources for accessible, quality assistance.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Banner