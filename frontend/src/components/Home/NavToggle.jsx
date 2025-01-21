import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { Link } from 'react-router-dom';

function NavToggle({toggle}) {
  
  return (
    <div className='w-full h-16 flex justify-between items-center px-4'>
      <Link to='/user-profile'>
      <div className='w-8 h-8 bg-white rounded-full flex justify-center items-center'> 
        <GiPlagueDoctorProfile className='text-2xl' />
      </div>
      </Link>
      <span className='font-bold'>Welcome, CDFS</span>
      <div className='text-xl cursor-pointer ' onClick={toggle}>
        <IoSettingsOutline />
      </div>
    </div>
  )
}

export default NavToggle
