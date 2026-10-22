import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 bg-pink-800' >
      <div className='flex items-center  '>
        <img className='w-auto h-20 object-contain' src="https://www.pngall.com/wp-content/uploads/15/Lion-Logo.png" alt="" />
        <h2 className='text-xl font-bold'>Thorat Co. LTD</h2>
      </div>
      <div className='flex gap-8 '>

        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/courses' >Courses</Link>
        <Link to='/product' >Product</Link>

      </div>
    </div>
  )
}

export default Navbar
