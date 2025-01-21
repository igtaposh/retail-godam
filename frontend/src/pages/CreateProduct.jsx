import React from 'react'
import FooterNav from '../components/FooterNav'
import { GiBowlOfRice, GiFlowers } from "react-icons/gi";
import { TiTick } from "react-icons/ti";

import { IoPeopleOutline } from "react-icons/io5";
import Navbar from '../components/Navbar';
import Flower from '../assets/flower';
import CreateProductForm from '../components/Create/CreateProductForm';
import { Link } from 'react-router-dom';

function CreateProduct(props) {

   return (
      <div className='max-w-[500px] w-screen bg-neutral-200 mx-auto relative'>
         <Flower />
         <Navbar text={'Create Product'} />
         <div className='p-4'>
            <div className='flex justify-start items-center gap-2 z-40 relative text-sm'>
               <Link to='/create-supplier'>
               
               <div className='bg-white rounded-xl border-black p-2 text-sm scale-90'>
                  <div className='flex justify-between items-center gap-2 '>
                     <span>
                        <IoPeopleOutline />
                     </span>
                     <span className='hidden'>
                        <TiTick />
                     </span>
                  </div>
                  <p>Create Supplier</p>
               </div>
               </Link>
               <Link>
               
               <div className='bg-white rounded-xl border-[1px] border-black p-2 shadow-md scale-90 text-sm'>
                  <div className='flex justify-between items-center gap-2 '>
                     <span >
                        <GiBowlOfRice />
                     </span>
                     <span className='text-green-800'>
                        <TiTick />
                     </span>
                  </div>
                  <p>Create Product</p>
               </div>
               </Link>
            </div>
            <div className='bg-white p-2 text-xs rounded-md z-40 relative mt-2'>
               <li >
                  To add new Product fill out the form below
                  and click on the "save" button. It will
                  automatically added on your product port.
               </li>
            </div>
            <div className='bg-white p-2 text-xs rounded-md z-40 relative mt-2'>
            <li >
                  All the section who don't have the optional tag is mandotary to fill out or the form section can't work.
               </li>
            </div>
            <div>
               <CreateProductForm />
            </div>
         </div>

         <FooterNav />
      </div>
   )
}

export default CreateProduct