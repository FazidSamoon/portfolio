import React, { useEffect } from 'react'
import Header from './Header'
import TypeWriter from 'typewriter-effect';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { AiFillGithub , AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF , FaInstagram } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

function Banner() {

  return (
    <span>
      <div className='banner bg-[#0a192f] h-screen w-screen'>
        <Header /> 

        
            <div className=''>
                <div className='absolute flex z-0 
                        lg:items-center lg:justify-center lg:w-auto lg:h-[30rem]  lg:transform lg:translate-x-[65rem] lg:translate-y-[10rem] lg:border-4 lg:rounded-tl-3xl lg:rounded-br-3xl
                        sm:trsnsform mobile:translate-x-12 mobile:translate-y-12 mobile:border-4 mobile:rounded-tl-3xl mobile:rounded-br-3xl
                        tablet:
                        desktop:
                  '>
                    <img src='fazid.png' alt='' 
                    className='h-[20rem] bg-[#051630]
                              lg:h-[30rem] lg:transform lg:translate-y-0
                              sm:transform 
                              tablet:
                              desktop:
                    '/>
                  </div>
            </div>
              


        <div className='flex flex-col absolute items-center w-16 h-[13rem] 
        
                        lg:transform translate-x-6 lg:translate-y-[30rem]
                        
                        '>
          <a href='https://github.com/FazidSamoon'>
            <AiFillGithub className='text-[#58dfc3] text-2xl font-bold mt-1' />
          </a>
          <a href='#'>
            <FaFacebookF className='text-[#58dfc3] text-2xl font-bold mt-4 shadow-2xl' />
          </a>
          <a href='www.linkedin.com/in/fazid-samoon'>
            <AiFillLinkedin className='text-[#58dfc3] text-2xl font-bold mt-4' />
          </a>
          <a href='https://www.hackerrank.com/it21084690#'>
            <SiHackerrank className='text-[#58dfc3] text-2xl font-bold mt-4' />
          </a>
          <a href='#'>
            <FaInstagram className='text-[#58dfc3] text-2xl font-bold mt-4' />
          </a>
        </div> 

        <div className='
                        absakute flex flex-col w-screen justify-center z-40
                        lg: items-start lg:pt-[190px] lg: ml-40 
                        mobile:transform mobile:translate-x-0      
        '>
          <div>

            <h1 className='font-mono font-medium text-[2rem] tracking-wider text-gray-400'>Hello There! My name is <span className='font-mono text-[40px] font-extrabold text-[#58dfc3]'>,</span></h1>
            <h1 className='font-mono text-[80px] font-extrabold text-[#58dfc3]'>Fazid Samoon</h1>
            <h1 className='font-mono text-[60px] font-extrabold opacity-60'>
                <TypeWriter
                    onInit={(typewriter) => {
                      typewriter.pauseFor(1000)
                      .typeString("<strong><span style='color: #58dfc3;'>an Undergraduate</span></strong>")
                      .pauseFor(300)
                      .deleteChars(16)
                      .typeString('<span style="color: #58dfc3;">a Full Stack Developer</span>')
                      .pauseFor(1000)
                      .start();
                      
                    }}
                />  
            </h1>
            

          </div>
        </div>


          
        
      </div>
    </span>
    
  )
}

export default Banner