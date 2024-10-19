import React from 'react'
import add_icon from '../assets/add_icon.png'
import list_icon from '../assets/order_icon.png'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='w-[18%] min-h-screen border-r-2 bg-orange-400'>
            <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px] '>
                <NavLink to="/add" className='flex items-center gap-3 border bg-white border-gray-300 border-r-0 px-3 py-2 rounded-1'>
                    <img className='w-5 h-5' src={add_icon} alt="" />
                    <p className='hidden md:block'>Add Flights</p>
                </NavLink>

                <div className='flex items-center gap-3 border bg-white border-gray-300 border-r-0 px-3 py-2 rounded-1'>
                    <img className='w-5 h-5' src={list_icon} alt="" />
                    <p className='hidden md:block'>List Flights</p>
                </div>

                <div className='flex items-center gap-3 border bg-white border-gray-300 border-r-0 px-3 py-2 rounded-1'>
                    <img className='w-5 h-5' src={list_icon} alt="" />
                    <p className='hidden md:block'>Bookings</p>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
