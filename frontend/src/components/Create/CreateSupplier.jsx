import React, { useState } from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";

function CreateSupplier() {

   const [imgURL, setimgURL] = useState(null)
   const imageSelector = (e) => {
      if (e.target.files[0] && e.target.files) {
         const url = URL.createObjectURL(e.target.files[0])

              }
   }
   console.log(imgURL)

   return (
      <div className='text-sm font-semibold opacity-80 p-4 overflow-hidden rounded-lg bg-white mt-4 mb-20'>
         <form className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col gap-2 text-sm'>
               <label htmlFor="name">Enter Name of Supplier</label>
               <input className='h-10 rounded-xl bg-neutral-200 outline-none px-2' type="text" name='name' />
            </div>
            <div className='flex flex-col gap-2 text-sm'>
               <label htmlFor="des">Add Description (Optional)</label>
               <input className='h-10 rounded-xl bg-neutral-200 outline-none px-2' type="text" name='des' />
            </div>
            <div className='flex flex-col gap-2 text-sm'>
               <lebel htmlFor="photo">Add Picture (Optional)</lebel>
               <div onClick={() => { document.getElementById('photoid').click() }} className='h-28 bg-neutral-200 rounded-xl p-2 text-xs font-light flex flex-col items-center gap-2 justify-center'>

                  {!imgURL ? <><span className='text-2xl opacity-65'>
                     <IoCloudUploadOutline />
                  </span>
                     <p className='w-2/3 text-center'>
                        Click to select picture from your device
                     </p></> : <div className='flex justify-center items-center w-full'>
                     <div className='w-24 h-24 rounded-full overflow-hidden border-2 border-white'>
                        <img src={imgURL} alt="preview" className='w-full h-full object-cover' />
                     </div>
                     <div className='absolute bg-black bg-opacity-50 text-white rounded-full p-2'>
                        <MdDeleteOutline className='text-xl' />
                     </div>
                  </div>}


                  <input onChange={imageSelector} type="file" id='photoid' name='photo' hidden />
               </div>

            </div>
            <div className='flex flex-col justify-start items-center gap-2'>
               <Link className='w-full' to='/'>
                  <button type='reset' className='w-full bg-zinc-900 text-white py-2 px-4 rounded-xl'>DISCARD</button>
               </Link>
               <button type='submit' className='w-full bg-zinc-900 text-white py-2 px-4 rounded-xl'>SUBMIT</button>
            </div>
         </form>
      </div>
   )
}

export default CreateSupplier