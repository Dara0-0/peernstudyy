import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[550px]' src={assets.org_pic} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>The UC Peer Facilitators is an accredited non-academic, non-sectarian, non-government special institutional organization undert the Guidance and Counseling Office of the University of the Cordilleras, Baguio City, 
            which provides an opportunity to improve skills, increase knowledge, and gain wisdom and experience for its members and other individuals through various and responsive programs, services and activities.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We envision ourselves to be the bridge or liaison between the students and available help and resources to address their concerns and needs. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We envision ourselves to be the bridge or liaison between the students and available help and resources to address their concerns and needs. </p>
          <b className='text-gray-800'>Our Objectives</b>
          <p>We envision ourselves to be the bridge or liaison between the students and available help and resources to address their concerns and needs. </p>
        </div>
      </div>

    </div>
  )
}

export default About
