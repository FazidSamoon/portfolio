import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

function Footer() {
  return (
    <div className='h-14 w-full bg-[#09866d] opacity-70 flex items-center justify-center'>
        <AiOutlineCopyrightCircle 
          className='text-white text-2xl font-bold'
        /><span className='text-white text-xl font-semibold'>Fazid Samoon</span>
    </div>
  )
}

export default Footer