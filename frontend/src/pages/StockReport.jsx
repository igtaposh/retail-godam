import React from 'react'
import FooterNav from '../components/FooterNav'
import Navbar from '../components/Navbar'
import Flower from '../assets/flower'
import SearchBar from '../components/SearchBar'
import PdfBtn from '../components/PdfBtn'

function StockReport(props) {
  return (
    <div className='max-w-[500px] w-screen h-screen bg-neutral-200 mx-auto'>
      <div>
        <Flower />
        <Navbar text={'Generate Stock Report'}/>
        <div className='w-full h-full flex flex-col px-6 py-2 gap-2'>
          <SearchBar />
          <div className='flex text-xs gap-2 mb-4'>
            <li className='bg-white px-2 py-[2px] rounded-sm '>ALL</li>
            <li className='bg-white px-2 py-[2px] rounded-sm '>A-Z</li>
          </div>
          <div className='w-full grid grid-cols-1 grid-flow-col gap-2 p-2 rounded-md bg-white text-xs font-bold z-50'>
            <span className='items-center text-center opacity-85'>DESCRIPTION</span>
            <span className='w-10 items-center text-center opacity-85'>MRP</span>
            <span className=' w-10 items-center text-center opacity-85'>QT.</span>
          </div>
          <div className='w-full grid grid-cols-1 grid-flow-col gap-2 p-2 rounded-md bg-white text-xs uppercase'>
            <p>
              dove intense repair 180ml
            </p>
            <p className='capitalize'>
              rs. 175
            </p>
            <input className='w-10 h-4 p-[2px] outline-none bg-neutral-200 text-center' type="number" />

          </div>
          <div className='w-full grid grid-cols-1 grid-flow-col gap-2 p-2 rounded-md bg-white text-xs uppercase'>
            <p>
              dove intense repair 180ml
            </p>
            <p className='capitalize'>
              rs. 175
            </p>
            <input className='w-10 h-4 p-[2px] outline-none bg-neutral-200 text-center' type="number" />

          </div>

        </div>
      </div>
      <PdfBtn text={'download as pdf'}/>
      <FooterNav />
    </div>
  )
}

export default StockReport