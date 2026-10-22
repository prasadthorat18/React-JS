import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {

  return (
    <div>
      <div className='flex justify-center items-center gap-10 m-5 pb-5'>
        <Link className='font-bold text-xl' to='/product/men' >Men</Link>
        <Link className='font-bold text-xl' to='/product/women' >Women</Link>
        <Link className='font-bold text-xl' to='/product/kids' >Kids</Link>
      </div>

      <Outlet/>
    </div>
  )
}

export default Product
