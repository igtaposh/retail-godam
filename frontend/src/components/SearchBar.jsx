import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
  return (
   <div className='w-full flex justify-start py-[1px] px-[4px] items-center rounded-md bg-white z-50 gap-2 drop-shadow-xl'>
   <span className='p-2 text-md '>
     <FaSearch className='opacity-90'/>
   </span>
   <input type="text" placeholder='Search for items' className='h-10 p-2 outline-none text-black placeholder:text-black opacity-90 text-center text-sm'/>
 </div>
  )
}

export default SearchBar