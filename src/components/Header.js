import React, { useEffect, useState } from 'react'
import {TiThMenu} from 'react-icons/ti'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Header() {

  const [show , setShow] = useState(false);

  const transitionNav = () => {
    if(window.scrollY > 200){
      setShow(true);
    }else{
      setShow(false);
    }
  }


  useEffect(() => {
    window.addEventListener("scroll" , transitionNav);

    //remove
    return() => window.removeEventListener('scroll' , transitionNav);
},[])

  return (
    <div className={`${show ? 'backdrop-blur-[4px] ' : 'bg-none '} fixed tablet:flex desktop:flex   w-screen h-16 flex items-center justify-between z-40 transition ease-in duration-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'`}>
      <img data-aos="fade-down" data-aos-duration="1000" data-aos-offset="100" src='fazidlogo.png' alt='' className='
                lg:h-8 lg:w-8 lg:ml-8
                mobile:h-12 mobile:w-12 mobile:ml-4 mobile:mt-4
      
      '/>

      <TiThMenu className='text-red-400 fill-current h-8 w-8' />


      <div id='header-container' className='mobile:hidden lg:flex' >
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500' data-aos="fade-down" data-aos-duration="1000" data-aos-offset="100"><span className=' mr-2 text-[#58dfc3]'>01.</span>HOME</a>
        <a href='#about' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500' data-aos="fade-down" data-aos-duration="1000" data-aos-offset="200"><span className=' mr-2 text-[#58dfc3]'>02.</span>ABOUT</a>
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500' data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300"><span className=' mr-2 text-[#58dfc3]'>03.</span>EDUCATION</a>
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500' data-aos="fade-down" data-aos-duration="1000" data-aos-offset="400"><span className=' mr-2 text-[#58dfc3]'>04.</span>PROJECTS</a>
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500' data-aos="fade-down" data-aos-duration="1000" data-aos-offset="500"><span className=' mr-2 text-[#58dfc3]'>05.</span>CONTACT</a>
      </div>




    </div>

      

    
  )
}

export default Header