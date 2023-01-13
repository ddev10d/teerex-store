import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
const Header = () => {
  return (
    <div className='w-screen h-24 bg-indigo-500 shadow-lg shadow-indigo-500/50'>
      <div className='h-full flex items-center justify-between px-12'>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </div>
  )
}

export default Header