import React, { useState } from 'react'
import {SiJavascript} from 'react-icons/si'
import {FaReact , FaJava} from 'react-icons/fa'
import {SiMysql , SiTailwindcss , SiSpringboot} from 'react-icons/si'
import {DiPhp} from 'react-icons/di'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
    <div id='about' className=' w-screen h-screen bg-[#051630] flex justify-center items-center
                  lg:flex-col lg:px-14 lg:py-20
                  tablet:flex-row
                  mobile:flex-col
    '>

      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-[7rem]'>
          <h1 className='text-[#58dfc3] font-mono lg:text-4xl lg:font-semibold lg:ml-12' data-aos="fade-down" data-aos-duration="1000" data-aos-offset="100">About Me</h1>

          <div className=' w-full  flex justify-center'>

                         
              <a data-aos="fade-down" data-aos-duration="1000" data-aos-offset="100" className={`${show.about ?'text-[#58dfc3] before:bg-[#58dfc3] after:opacity-80' :'text-[#ffffff]'} text-small mr-12 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500`} onClick={activateHome}><span className=' mr-2 text-[#58dfc3]'>01.</span>ABOUT</a>
              <a data-aos="fade-down" data-aos-duration="1000" data-aos-offset="200" className={`${show.skills ?'text-[#58dfc3]' :'text-[#ffffff]'} text-small mr-12 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500`} onClick={activateSkills}><span className=' mr-2 text-[#58dfc3]'>02.</span>SKILLS</a>
              <a data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300" className={`${show.education ?'text-[#58dfc3]' :'text-[#ffffff]'} text-small mr-12  font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500`} onClick={activateEducation}><span className=' mr-2 text-[#58dfc3]'>03.</span>EDUCATION</a>
              <a data-aos="fade-down" data-aos-duration="1000" data-aos-offset="400" className={`${show.background ?'text-[#58dfc3]' :'text-[#ffffff]'} text-small mr-12  font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500`} onClick={activateBackground}><span className=' mr-2 text-[#58dfc3]'>04.</span>BACKGROUND</a>

          </div>

          <hr className=' mt-4'></hr>

        </div>

        <div className='w-full h-full '>

          {((show.about) &&(
              <div className='w-full h-full lg:py-10 lg:px-10 flex flex-row justify-center items-center transition-all ease-in duration-900'>
                <div className='  w-3/4'>
                  <span data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className=' font-medium text-[#58dfc3]
                                  lg:max-w-[40rem] lg:ml-14 lg:mt-4 lg:text-3xl 
                  '>HEY!</span>

                  <p data-aos="fade-right" data-aos-offset="300" data-aos-duration="1000" className='text-gray-300 font-medium font-lobster
                                lg:max-w-[40rem] lg:ml-14 lg:mt-4 lg:text-justify lg:text-2xl
                  '>I am Fazid Samoon, a motivated software engineering undergraduate from Sri Lanka Institute of Information Technology.<br/><br/> A flexible and courageous individual an advanced knowledge of implementing software with a good level of communication skill and team spirit. Seeking to use proven skills in developing high quality, high performance and highly reliable software applications.</p>
                </div>  

                <div className=' w-1/4 flex items-center justify-center'>

                  <img data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" src='fazid.png' alt=''  className='lg:h-[20rem] rounded-full mr-14'/>
                </div>
              </div>
          ))}

          {((show.background) &&(
              <div className='w-full h-full lg:py-10 lg:px-10 transition-all ease-in duration-900'>
                <h1 className='text-[#ffffff] text-small font-medium font-serif'>
                  background
                </h1>
              </div>
          ))}

          {((show.skills) &&(
              <div className='w-full h-full lg:py-10 lg:px-10 transition-all ease-in duration-900'>
                <div className='lg:ml-48'>
                    <span ><SiJavascript className=' text-2xl font-KdamThmorPro text-[#58dfc3] '/></span>
                    <span ><FaReact className=' text-2xl font-KdamThmorPro text-[#58dfc3] lg:mt-8' /></span>
                    <span ><FaJava className=' text-2xl font-KdamThmorPro text-[#58dfc3]  lg:mt-8'/></span>
                    <span ><SiMysql className=' text-2xl font-KdamThmorPro text-[#58dfc3]  mt-8'/></span>
                    <span><SiTailwindcss  className=' text-2xl font-KdamThmorPro text-[#58dfc3]  mt-8'/></span>
                    <span ><DiPhp className=' text-2xl font-KdamThmorPro text-[#58dfc3]  mt-8'/></span>
                    <span ><SiSpringboot className=' text-2xl font-KdamThmorPro text-[#58dfc3]  mt-8'/></span>
                    
                  </div>
              </div>
          ))}

          {((show.education) &&(
              <div className='w-full h-full lg:py-10 lg:px-10 transition-all ease-in-out duration-1000
                              lg:flex lg:flex-row  lg:items-center
              '>
                  <div className='lg:max-w-[40rem] flex justify-center items-center flex-col'>
                      
                      <h1 data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className=' font-semibold text-center text-[2rem] text-gray-400'><span className=' text-6xl font-KdamThmorPro text-[#58dfc3] items-center'>"</span>Education is the most powerful weapon which you can use to change the world <span className=' font-KdamThmorPro text-[#58dfc3] lg:text-6xl'>"</span></h1>
                      
                  </div>

                  <div>
                    <ol>
                      <li data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" className=' text-[#58dfc3] text-xl font-medium font-serif lg:ml-14'>Secondary Education in Business Studies at Isipathana College</li>
                      <li data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" className=' text-[#58dfc3] text-xl font-medium font-serif lg:ml-14 mt-16'>Bsc Hons Information Technology SLIIT</li>
                    </ol>
                    
                    
                  </div>
              </div>
          ))}

          

        </div>
      
      </div>
        
    </div>
  )
}

export default About