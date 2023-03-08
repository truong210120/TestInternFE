import React from 'react'
import logo from '../img/logoNCC 1.png'
function Logo() {
  return (
    <div className='flex justify-center my-[20px] '>
      <img className='lg:w-[300px] md:w-[200px] sm:w-[150px] max-[650px]:w-[100px]' src={logo} />
    </div>
  )
}

export default Logo