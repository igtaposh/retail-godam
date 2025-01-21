import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Navbar(props) {
  const [onScroll, setonScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setonScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={onScroll > 15 ? 'flex justify-start items-center gap-8 px-6 py-4 sticky top-0 z-60 bg-white shadow-lg' : 'flex justify-start items-center gap-8 px-6 py-4 sticky top-0 z-60 '}>
      <Link to={'/'}>
        <FaArrowLeft className='text-xl' />
      </Link>
      <span className='font-bold'>{props.text}</span>

    </div >
  )
}

export default Navbar