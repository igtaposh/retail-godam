import React from 'react'
import { Link } from 'react-router-dom';


import { AiOutlineNodeIndex, AiOutlineSisternode, AiOutlineTruck } from "react-icons/ai";
import { AiOutlineSnippets } from "react-icons/ai";

function FooterNav() {

   const locaton = window.location.pathname;

   return (
      <div className='fixed bottom-0 max-w-[500px] w-full bg-white flex justify-between p-[5px]'>
         <Link to='/'>
            <div className={locaton === '/' ? 'text-primary-500 flex flex-col items-center text-[0.45rem] font-semibold bg-gray-200 px-4 py-2 rounded-xl opacity-90 gap-[4px]' : 'text-primary-500 flex flex-col items-center text-[0.45rem] font-semibold px-4 py-2 rounded-xl opacity-90 gap-[4px]'}>
               <div className='text-xl'>
                  <AiOutlineNodeIndex />
               </div>
               <span>DASHBOARD</span>

            </div>
         </Link>

         <Link to='/create-supplier'>
            <div className={locaton === '/create-supplier' || locaton === '/create-product' ? 'text-primary-500 flex flex-col items-center text-[0.45rem] font-semibold bg-gray-200 px-4 py-2 rounded-xl opacity-90 gap-[5px]' : 'text-primary-500 flex flex-col items-center text-[0.45rem] font-semibold px-4 py-2 rounded-xl opacity-90 gap-[5px]'}>
               <div className='  text-lg '>
                  <AiOutlineSisternode />
               </div>
               <span>CREATE</span>
            </div>
         </Link>

         <Link to='/stock-report'>
            <div className={locaton === '/stock-report' ? 'text-primary-500 flex flex-col items-center font-semibold bg-gray-200 px-4 text-[0.45rem] py-2 rounded-xl opacity-90 gap-[5px]' : 'text-primary-500 flex flex-col items-center justify-center text-[0.45rem] font-semibold px-4 py-2 rounded-xl opacity-95 gap-[5px]'}>
               <div className='text-lg'>
                  <AiOutlineSnippets className='' />
               </div>
               <span>REPORTS</span>
            </div>
         </Link>



         <Link to='/order-slip'>
            <div className={locaton === '/order-slip' ? 'text-primary-500 flex flex-col items-center text-[0.45rem] font-semibold bg-gray-200 px-4 py-2 rounded-xl opacity-90 gap-[4px]' : 'text-primary-500 flex flex-col items-center text-[0.45rem] font-semibold px-4 py-2 rounded-xl opacity-90 gap-[4px]'}>
               <div className='text-xl'>
                  <AiOutlineTruck />

               </div>
               <span>ORDERS</span>
            </div>
         </Link>
      </div>
   )
}

export default FooterNav