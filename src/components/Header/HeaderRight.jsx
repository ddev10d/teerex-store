import React from 'react'
import CartContainer from './CartContainer'

const HeaderRight = () => {
  return (
    <div className='flex justify-between w-32'>
        <span className='text-lg text-white pointer-events-none'>Product</span>
        <CartContainer/>
    </div>
  )
}

export default HeaderRight