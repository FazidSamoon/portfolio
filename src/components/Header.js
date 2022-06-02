import React, { useEffect, useState } from 'react'

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

      <div id='header-container' className={`${show ? 'bg-red-500 ' : 'bg-none '} fixed sm:hidden tablet:flex desktop:flex w-screen h-16 lg:flex items-center justify-center z-40 transition ease-in duration-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'`}>
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500'>HOME</a>
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500'>ABOUT</a>
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500'>EDUCATION</a>
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500'>PROJECTS</a>
        <a href='/' className='text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500'>CONTACT</a>
      </div>

    
  )
}

export default Header