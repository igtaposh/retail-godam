import React from 'react'
import Logo from '../assets/Logo'

function Login() {
   return (
      <div className='p-8 max-w-[500px] w-screen h-screen bg-neutral-200 mx-auto '>
         <Logo />
         <div className='flex flex-col gap-4 capitalize text-xs mt-10'>
            <div>
               <p className='text-sm text-center'>To Continue, sign in for the further process</p>
            </div>
            <div className='px-6 py-8 bg-white border-8 border-x-0 border-yellow-400 bo '>
               <form className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-2'>
                     <p>enter mobile number</p>
                     <input className='bg-neutral-200 h-10 rounded-xl outline-none p-2' type="number" />
                  </div>
                  <div className='flex flex-col gap-2'>
                     <p>enter password</p>
                     <input className='bg-neutral-200 h-10 rounded-xl outline-none p-2' type="password" />
                  </div>
                  <div className='flex flex-col justify-center items-center gap-2 mt-4'>
                     <p>password forgotten?</p>
                     <button className='uppercase bg-yellow-400 text-gray-700 rounded-xl font-semibold w-full p-2'>
                        sign in
                     </button>
                  </div>
                     <div className='flex flex-col justify-center items-center'>
                        <p className='opacity-70'>don't have any account?</p>
                        <p>create account</p>
                     </div>
               </form>
            </div>
            <div className='justify-center items-center px-4 '>
               <li>Note that password must be 8 digit long and must contains a special character and a number.</li>
            </div>
         </div>
      </div>
   )
}

export default Login