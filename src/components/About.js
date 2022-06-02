import React, { useState } from 'react'

function About() {

  const [show , setShow] = useState({
    about : true,
    education : false,
    skills : false,
    background : false
  });

  function activateHome() {
    setShow({
      about : true,
      education : false,
      skills : false,
      background : false
    });
  }

  function activateEducation() {
    setShow({
      about : false,
      education : true,
      skills : false,
      background : false
    });
  }

  function activateSkills() {
    setShow({
      about : false,
      education : false,
      skills : true,
      background : false
    }); 
  }

  function activateBackground() {
    setShow({
      about : false,
      education : false,
      skills : false,
      background : true
    });
  }

  return (
    <div className=' w-screen h-screen bg-[#051630] flex justify-center items-center
                  lg:flex-col lg:px-14 lg:py-20
                  tablet:flex-row
                  mobile:flex-col
    '>

      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-[7rem]'>
          <h1 className='text-[#ffffff] lg:text-4xl lg:font-semibold lg:ml-12'>About Me</h1>

          <div className=' w-full  flex justify-center'>

                         
              <a className={`${show.about ?'text-red-600' :'text-[#ffffff]'} text-small mr-12 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500`} onClick={activateHome}>ABOUT</a>
              <a className={`${show.skills ?'text-red-600' :'text-[#ffffff]'} text-small mr-12 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500`} onClick={activateSkills}>SKILLS</a>
              <a className={`${show.education ?'text-red-600' :'text-[#ffffff]'} text-small mr-12  font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500`} onClick={activateEducation}>EDUCATION</a>
              <a className={`${show.background ?'text-red-600' :'text-[#ffffff]'} text-small mr-12  font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500`} onClick={activateBackground}>BACKGROUND</a>

          </div>

          <hr className=' mt-4'></hr>

        </div>

        <div className='w-full h-full bg-black'>

          {((show.about) &&(
              <div className='w-full h-full lg:py-10 lg:px-10 flex flex-row bg-gray-900'>
                <div className=' bg-slate-400 w-3/4'>
                  <span className=' text-gray-300 font-medium text-2xl
                                  lg:
                  '>HEY!</span>

                  <p className='text-gray-300 font-medium text-xl'>I'm Fazid Samoon</p>
                </div>  

                <div className=' w-1/4 flex items-center justify-center'>

                  <img src='fazid.png' alt=''  className='lg:h-[20rem] rounded-full bg-slate-50'/>
                </div>
              </div>
          ))}

          {((show.background) &&(
              <div className='w-full h-full lg:py-10 lg:px-10'>
                <h1 className='text-[#ffffff] text-small font-medium font-serif'>
                  background
                </h1>
              </div>
          ))}

          {((show.skills) &&(
              <div className='w-full h-full lg:py-10 lg:px-10'>
                <h1 className='text-[#ffffff] text-small font-medium font-serif'>
                  skills
                </h1>
              </div>
          ))}

          {((show.education) &&(
              <div className='w-full h-full lg:py-10 lg:px-10'>
                <h1 className='text-[#ffffff] text-small font-medium font-serif'>
                  education
                </h1>
              </div>
          ))}

          

        </div>
      
      </div>
        
    </div>
  )
}

export default About