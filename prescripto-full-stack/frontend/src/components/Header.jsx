import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-[#0f291f] rounded-lg px-6 md:px-10 lg:px-20 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>

                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Request Tutoring<br />  With Trusted Peer Tutors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.landing_page} alt="Landing page illustration" />
                    <p>Simply browse through our extensive list of trusted peer tutors, <br className='hidden sm:block' /> Request Tutoring hassle-free.</p>
                </div>

                <NavLink to='/request' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Request Tutoring <img className='w-3' src={assets.arrow_icon} alt="Arrow icon" />
                </NavLink>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.landing_page} alt="Landing page illustration" />
            </div>
        </div>
    )
}

export default Header