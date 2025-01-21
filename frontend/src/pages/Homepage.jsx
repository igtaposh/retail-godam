import React, { useState } from 'react'
import FooterNav from '../components/FooterNav'
import NavToggle from '../components/Home/NavToggle'
import ProductData from '../components/Home/ProductData'
import Text from '../components/Home/Text'
import SideNave from '../components/Home/SideNave'

function Homepage(props) { 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)};
    const close = () => {
      setIsOpen(false);
    }

  return (
    <div className='max-w-[500px] w-screen h-screen bg-neutral-200 mx-auto'>
      
      <SideNave isOpen={isOpen} close={close} /> 
      <div className='p-2'>
        <NavToggle toggle={toggle}/>
        <div className='flex flex-col gap-4 mb-4 mt-4'> 
        <ProductData datatype={"Total Items"} datacount={344} url={'/products'}/>
        <ProductData datatype={'Total Suppliers'} datacount={75} url={'/suppliers'}/>
        </div>
        <Text />
      </div>
     <FooterNav />
    </div>
    
  )
}

export default Homepage