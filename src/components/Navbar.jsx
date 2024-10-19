import React from 'react'
import flight_logo from '../assets/flight_logo.png'

const Navbar = () => {

  return (
    <div className='flex items-center justify-between py-2 px-[4%]'>
      <img className='w-[max(10%,80px)]' src={flight_logo} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
