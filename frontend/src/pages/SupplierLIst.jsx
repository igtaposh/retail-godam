import React from 'react'
import Flower from '../assets/flower'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import FooterNav from '../components/FooterNav'

function SupplierLIst() {
   return (
      <div className='max-w-[500px] w-screen h-screen bg-neutral-200 mx-auto relative'>
         <div>
            <Flower />
            <Navbar text={'Total Suppliers'} />
            <div className='w-full h-full flex flex-col px-6 py-2 gap-2'>
               <SearchBar />
               <div className='flex text-xs gap-2 mb-4'>
                  <li className='bg-white px-2 py-[2px] rounded-sm '>A-Z</li>
               </div>
               <div className='w-full grid grid-cols-1 grid-flow-col gap-2 p-2 rounded-md bg-white text-xs font-bold z-50'>
                  <span className='items-center text-center opacity-85 uppercase'>suppliers</span>
               </div>
               <div className='w-full grid grid-cols-1 grid-flow-col gap-2 p-2 rounded-md bg-white text-xs uppercase'>
                  <p>
                     arunachal trading company
                  </p>
                  

               </div>
               <div className='w-full grid grid-cols-1 grid-flow-col gap-2 p-2 rounded-md bg-white text-xs uppercase'>
                  <p>
                    nestle
                  </p>

               </div>

            </div>
         </div>
         <FooterNav />
      </div>
   )
}

export default SupplierLIst