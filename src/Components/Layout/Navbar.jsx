import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import image from "../../assets/todo-image.webp"

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row gap-8 justify-between items-center w-11/12 max-w-[1160px] py-0 mx-auto'> 
       
       
        <img src={image} alt="img" width={160} height={25} loading='lazy'  />
        <div className="flex items-center gap-x-4">
            <NavLink to="/LogIn">
                <button className='bg-black text-white py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                    Log In
                </button>
            </NavLink>
            <NavLink to="/">
                <button className='bg-black text-white py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                    Log Out
                </button>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Navbar
