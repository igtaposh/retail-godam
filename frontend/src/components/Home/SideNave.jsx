import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


function SideNave({ isOpen, close }) {
   return (
      <div className={isOpen ? 'w-64 h-screen bg-neutral-100 z-50 absolute top-0 right-0 shadow-xl shadow-zinc-900 p-2 hello' : 'hidden'}>
         <div className='flex flex-col gap-8 justify-between p-4'>
            <div onClick={close}>
               <FaArrowLeft className='text-xl' />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
               <Link to='/user-profile' className='w-full'>
                  <button className='bg-zinc-900 text-white p-2 rounded-md w-full opacity-95'>PROFILE</button>
               </Link>
               <Link className='w-full'>
                  <button className='bg-zinc-900 text-white p-2 w-full rounded-md opacity-95'>SETTINGS</button>
               </Link>
               <Link className='w-full'>
                  <button className='bg-zinc-900 text-white opacity-95 p-2 w-full rounded-md'>ABOUT US</button>
               </Link>
               <Link className='w-full'>
                  <button className='w-full bg-[#ffd643] p-2 rounded-md'>SIGN OUT</button>
               </Link>
            </div>
         </div>
      </div>
   )
}

export default SideNave