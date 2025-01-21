import React from 'react'
import Navbar from '../components/Navbar'

function Supplier() {
   return (
      <div className='max-w-[500px] w-screen min-h-screen bg-neutral-200 mx-auto relative'>
         <Navbar text={'Arunachal Trading Com.'} />
         <div className="flex flex-col gap-2 py-2 px-6 ">
            <div className="h-36 w-36 m-auto rounded-full overflow-hidden shadow-lg">
               <img src="https://plus.unsplash.com/premium_photo-1681711647066-ef84575c0d95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww" />
            </div>
            <div className=" bg-white p-4 rounded-xl uppercase text-xs font-semibold">
               <form className="flex flex-col gap-2" action="">
                  <div className="flex flex-col">
                     <p className="opacity-65 text-[10px]">name :</p>
                     <input className="p-2 rounded-lg uppercase" type="text" value='milkymist 1l pure milk' disabled />
                  </div>
                  <div className="flex flex-col">
                     <p className="opacity-65 text-[10px]">Description :</p>
                     <textarea disabled rows='4' cols='54' className="h-fit p-2 w-full rounded-lg uppercase outline-none resize-none" type="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat cum necessitatibus.</textarea>
                  </div>



                  <div className="flex flex-col gap-2">
                     <button className="uppercase w-full bg-zinc-900 text-white py-2 rounded-lg opacity-95">edit</button>
                     <button className="uppercase w-full bg-zinc-900 text-white py-2 rounded-lg opacity-95">delete</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Supplier