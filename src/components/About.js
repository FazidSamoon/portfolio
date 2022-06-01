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

                         
              <a className={`${show.about ?'text-red-600' :'text-[#ffffff]'} text-small mr-12 font-medium font-serif cursor-pointer`} onClick={activateHome}>ABOUT</a>
              <a className={`${show.skills ?'text-red-600' :'text-[#ffffff]'} text-small mr-12 font-medium font-serif cursor-pointer`} onClick={activateSkills}>SKILLS</a>
              <a className={`${show.education ?'text-red-600' :'text-[#ffffff]'} text-small mr-12 font-medium font-serif cursor-pointer`} onClick={activateEducation}>EDUCATION</a>
              <a className={`${show.background ?'text-red-600' :'text-[#ffffff]'} text-small mr-12 font-medium font-serif cursor-pointer`} onClick={activateBackground}>BACKGROUND</a>

          </div>

          <hr className=' mt-4'></hr>

        </div>

        <div className='w-full h-full bg-black'>

          {((show.about) &&(
              <div className='w-full h-full lg:py-10 lg:px-10'>
                <h1 className='text-[#ffffff] text-small font-medium font-serif'>
                  about
                </h1>
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