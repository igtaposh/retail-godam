import React, { useState } from 'react'
import { GiButterflyFlower } from 'react-icons/gi';
import { RiCalendarCloseFill } from "react-icons/ri";

function PdfBtn(a) {
   const [disMSG, setDisMSG] = useState()
   const checkFor = () => {
      if (a.true) {
         setDisMSG(true)
      } else setDisMSG(false)
   };

   return (
      <>
         <div className='flex flex-col gap-2 text-xs justify-center items-center fixed bottom-16 m-ad mb-5 max-w-[500px] p-[5px]' >
            <button className='w-36 text-black uppercase font-semibold text-opacity-70'>copy as text</button>
            <button onClick={checkFor} className='w-36 py-2 bg-zinc-900 text-white rounded-xl  uppercase font-semibold opacity-90'>{a.text}</button>
         </div>
         <div className={disMSG ? 'max-w-[500px] w-screen h-full z-60 backdrop-blur-none backdrop-brightness-50 m-auto absolute top-0 right-0 p-6 flex justify-center items-center' : 'hidden'}>
            <div className='w-full rounded-xl overflow-hidden bg-white text-xs font-bold flex flex-col gap-2 '>
               <div className='relative flex items-center h-8 bg-zinc-900 opacity-80 overflow-hidden'>
                  <p className='text-white text-xs font-semibold uppercase ml-2 scale-90 opacity-85'>pdf successfully generated !</p>
                  <div onClick={() => { setDisMSG(false) }} className='absolute top-[6px] right-2 flex '>
                     <RiCalendarCloseFill

                        className='text-xl opacity-80 text-white font-semibold' />
                  </div>
               </div>
               <div className='p-4 flex flex-col gap-2 justify-center items-center relative'>
                  <div className='flex flex-col gap-2 text-[10px]  justify-center p-2 opacity-70 w-full'>
                     <li className=''>To download the order slip which doesn't include product details like weight, rate etc. click on the "DOWNLOAD ORDER SLIP ONLY" button.</li>
                     <li className=''>To download the order slip which include product details like weight, rate etc. And get the approximate amount and weight all of the products click on the "DOWNLOAD ORDER SLIP DETAILS" button.</li>
                  </div>
                  <div className='flex  flex-col gap-2 mb-5 z-50 bg'>
                     <button className='w-full text-xs font-bold uppercase border border-black border-dotted py-2 px-4 rounded-lg'>download order slip details</button>
                     <button className='w-full text-xs font-bold uppercase border border-black border-dotted py-2 px-4 rounded-lg'>download order slip only</button>
                  </div>
                  <div className='absolute opacity-50 bottom-0 left-0 rotate-90'>
                     <GiButterflyFlower className='text-9xl' />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
   // {setSucceed(true)}
}

export default PdfBtn