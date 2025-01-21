import React from 'react'
import { GiShamrock } from "react-icons/gi";
import { Link } from 'react-router-dom';

function ProductData(props) {
  return (
    <div className='flex justify-between items-center p-4 max-w-full w-[90vw] m-auto h-32 bg-neutral-100 rounded-xl border-[1px] border-neutral-950 shadow-xl shadow-zinc-400'>
      <div className='text-center flex flex-col justify-center items-start gap-1'>
        <p className='font-bold text-md text-gray-800'>{props.datatype}</p>
        <p className='text-5xl font-bold'>{props.datacount}</p>
        <Link to={props.url}>
          <button className='bg-emerald-700 text-white px-2 py-[2px] rounded-sm text-xs '>Show More</button>
        </Link>

      </div>
      <div>
        <GiShamrock className='text-8xl opacity-80' />
      </div>
    </div>
  )
}

export default ProductData