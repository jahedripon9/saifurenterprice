import React from 'react'
import logoImage from "../..//assets/logo1.png"; // Add the path to your logo image


const Header = () => {
  return (
    <div className='max-w-screen-xl mx-auto '>
      <div className="navbar fixed bg-gray-200 rounded-b-xl z-10 opacity-75 w-full ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
              <li><a href="#info">Travel Info</a></li>
              <li><a href="#place">Travel Place</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="flex justify-center mt-4 mb-4 mr-5">
            <a href='/'><img className="w-14 sm:w-20 h-auto" src={logoImage} alt="Logo" /></a> 
          </div>
          <a href='/' className=" text-sky-600 font-bold text-sm lg:text-3xl"><span className='text-sky-700'>Saifur</span> Enterprise</a>
        </div> 
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-xl">
            <li><a href="#info">Travel Info</a></li>
            <li><a href="#place">Travel Place</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
