import React from 'react'

function About() {
  return (
    <div className=' w-screen h-screen bg-slate-300 flex justify-center items-center
                  lg:flex-row lg:px-10 lg:py-10
                  tablet:flex-row
                  mobile:flex-col
    '>

      <div className='flex justify-center bg-red-600 w-1/3 h-full'>
        <img src='fazid.png' alt='' className=' h-24 w-24 bg-[#361494] rounded-full object-contain
                 lg:w-32 lg:h-32 lg:mt-10
        ' />
      </div>

      <div className=' bg-blue-600 w-2/3 h-full
                  
      '>
        <div className='
              lg:mt-4 lg:ml-10 
        '>
          <h1 className=''>Name : <span>Tuan Fazid Samoon</span></h1>
        </div>
          

      </div>
        
    </div>
  )
}

export default About