import React, { useEffect } from 'react'
import Header from './Header'
import TypeWriter from 'typewriter-effect';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { AiFillGithub , AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF , FaInstagram } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

function Banner() {

  useEffect(() => {
    const elems = []
    elems.push(document.querySelector(".Typewriter"))
    elems.push(document.querySelector(".Typewriter__wrapper"))
    elems.forEach(elem => {
      elem.style.height = '5rem'
      elem.style.display = 'flex'
      elem.style.alignItems = 'center'
      elem.style.justifyContent = 'center'
    })

    const cursor = document.querySelector('.Typewriter__cursor')

    const particles = document.querySelector('#tsparticles > canvas')
    particles.style.position = 'absolute'
    particles.style.top = '0'
    particles.style.left = '0'
    particles.style.width = '100%'
    particles.style.height = '100%'
    

  }, [])

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <span>
      <div className='banner bg-gradient-to-tr from-[#030325] via-[#040436] to-[#33336d] h-screen w-screen'>
        <Header /> 

        <div className='absolute flex z-0 bg-radial-at-b from-black via-black to-orange-800
              lg:items-center lg:justify-center lg:w-2/3 lg:h-[100%] lg:transform lg:translate-x-52 lg:translate-y-[0rem] 
              mobile:
              tablet:
              desktop:
        '>
          <img src='fazid.png' alt='' 
          className=' opacity-60 brightness-50 h-[30rem] bg-black
                    lg:h-[35rem] lg:transform lg:translate-y-10
                    mobile:
                    tablet:
                    desktop:
          '/>
        </div>

        <div className='
                        relative flex flex-col w-screen justify-center z-40
                        lg:items-center lg:pt-[300px]          
        '>
          <div>
            <h1 className='text-white font-serif  
                    mobile:text-2xl   
                    tablet:
                    lg:text-4xl lg:font-extrabold lg:bg-red-500 
                    desktop:text-[4rem]
            '>
              <TypeWriter
                    onInit={(typewriter) => {
                      typewriter.typeString("I'm Fazid Samoon!")
                        
                      .start();
                    }}
              ></TypeWriter>
            </h1> 

          </div>
          
          <div>
            <h1 className='text-white relative mt-4 text-xl font-bold z-40'>
              I am a Software Engineer undergraduate based in Colombo, Sri Lanka.
            </h1>
          </div>                  
        </div>


        <div className='flex flex-col absolute bg-black items-center w-16 h-44 transform translate-x-6 -translate-y-2'>
          <a href='https://github.com/FazidSamoon'>
            <AiFillGithub className='text-white text-2xl font-bold mt-1' />
          </a>
          <a href='#'>
            <FaFacebookF className='text-white text-2xl font-bold mt-2' />
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

        <div >
        <Particles 
            className=''
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              
              fpsLimit: 100,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />

        </div>
        
        
        
        
    </div>

    </span>
    
  )
}

export default Banner