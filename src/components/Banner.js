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
      <div className='banner bg-[#022038] h-screen w-screen'>
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
              


        <div className='flex flex-col absolute items-center w-16 h-44 
        
                        lg:transform translate-x-6 lg:translate-y-[30rem]
                        
                        '>
          <a href='https://github.com/FazidSamoon'>
            <AiFillGithub className='text-white text-2xl font-bold mt-1' />
          </a>
          <a href='#'>
            <FaFacebookF className='text-white text-2xl font-bold mt-2 shadow-2xl' />
          </a>
          <a href='www.linkedin.com/in/fazid-samoon'>
            <AiFillLinkedin className='text-white text-2xl font-bold mt-2' />
          </a>
          <a href='https://www.hackerrank.com/it21084690#'>
            <SiHackerrank className='text-white text-2xl font-bold mt-2' />
          </a>
          <a href='#'>
            <FaInstagram className='text-white text-2xl font-bold mt-2' />
          </a>
        </div> 

        <div className='
                        absakute flex flex-col w-screen justify-center z-40
                        lg: items-start lg:pt-[300px] lg: ml-40 
                        mobile:transform mobile:translate-x-0      
        '>
          <div>
            <h1 className='text-white font-serif  
                    mobile:text-2xl  
                    tablet:
                    lg:text-4xl lg:font-extraboldlg:max-w-[35rem] lg:transition-all lg:ease-in-out lg:duration-300
                    desktop:text-[4rem]
            '>
              <TypeWriter
                    onInit={(typewriter) => {
                      typewriter.typeString("Hello! <br> I'm Fazid Samoon!")
                      .pauseFor(2500)
                      .typeString('<br>I am a <strong><span style="color: #27ae60;"> Software Engineering Undergraduate</span> </strong>')
                      .pauseFor(300)
                      .deleteChars(35)
                      .typeString('<strong><span style="color: #27ae60;">Full Stack Developer</span></strong><br>')
                      .typeString('<strong>based in<span style="color: #27ae60;"> Colombo , Sri Lanka</span></strong>')
                      .pauseFor(1000)
                      .start()
                        
                      .start(); 
                      
                    }}
              ></TypeWriter>
            </h1> 

          </div>
{/*           
          <div>
            <h1 className='text-white relative mt-4 text-xl font-bold z-40'>
              I am a Software Engineer undergraduate based in Colombo, Sri Lanka.
            </h1>
          </div>                   */}
        </div>


          
        
      </div>
    </span>
    
  )
}

export default Banner