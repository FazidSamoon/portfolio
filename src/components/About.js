import React from 'react'

function About() {
  return (
    <div className=' w-screen h-screen bg-[#051630] flex justify-center items-center
                  lg:flex-col lg:px-10 lg:py-10
                  tablet:flex-row
                  mobile:flex-col
    '>

      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-[7rem]'>
          <h1 className='text-[#ffffff] lg:text-4xl lg:font-semibold lg:ml-12'>About Me</h1>

          <div className=' w-full  flex justify-center'>

                         
              <a href='/' className='text-[#ffffff] text-small mr-12 font-medium font-serif cursor-pointer'>ABOUT</a>
              <a href='/' className='text-[#ffffff] text-small mr-12 font-medium font-serif cursor-pointer'>SKILLS</a>
              <a href='/' className='text-[#ffffff] text-small mr-12 font-medium font-serif cursor-pointer'>EDUCATION</a>
              <a href='/' className='text-[#ffffff] text-small mr-12 font-medium font-serif cursor-pointer'>BACKGROUND</a>

          </div>

        </div>

        <div className='w-full h-full bg-black'>

        </div>
      
      </div>
        
    </div>
  )
}

export default About