import React, { useState } from 'react'
import './index.css'
function Navbar() {
      const [toggle,setToggle] = useState(false)
      const handleToggle=()=>{
            setToggle(!toggle)
      }
  return (
    <div className='h-[100vh] '>
            <div className='2xl:hidden lg:bg-[#000] xl:hidden lg:hidden md:block' onClick={handleToggle}>
                  <div className='w-[30px] h-[3px] bg-[#000000] my-[6px]'></div>
                  <div className='w-[30px] h-[3px] bg-[#000000] my-[6px]'></div>
                  <div className='w-[30px] h-[3px] bg-[#000000] my-[6px]'></div>
            </div>
      <ul className={`navbar bg-[#191718] h-full  2xl:block xl:block lg:block  ${toggle? 'fixed sm:block sm:w-[200px] max-[650px]:w-[200px] max-[650px]:block' : ' sm:hidden max-[650px]:hidden'}`}>
            <li className='border-y-[1px] border-solid border-[#5C5C5C] text-[#fff] py-[10px] pl-[15px] hover:bg-[#5C5C5C] cursor-pointer hover:text-[#fff]' >Home</li>
            <li className='border-y-[1px] border-solid border-[#5C5C5C] text-[#AAAAAA] py-[10px] pl-[15px] hover:bg-[#5C5C5C] cursor-pointer hover:text-[#fff]' >Services</li>
            <li className='border-y-[1px] border-solid border-[#5C5C5C] text-[#AAAAAA] py-[10px] pl-[15px] hover:bg-[#5C5C5C] cursor-pointer hover:text-[#fff]' >News</li>
            <li className='border-y-[1px] border-solid border-[#5C5C5C] text-[#AAAAAA] py-[10px] pl-[15px] hover:bg-[#5C5C5C] cursor-pointer hover:text-[#fff]' >Blog</li>
            <li className='border-y-[1px] border-solid border-[#5C5C5C] text-[#AAAAAA] py-[10px] pl-[15px] hover:bg-[#5C5C5C] cursor-pointer hover:text-[#fff]' >Contract</li>
      </ul>
    </div>
  )
}

export default Navbar