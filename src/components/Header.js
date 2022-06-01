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
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif cursor-pointer'>HOME</a>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif cursor-pointer'>ABOUT</a>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif cursor-pointer'>EDUCATION</a>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif cursor-pointer'>PROJECTS</a>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif cursor-pointer'>CONTACT</a>
      </div>

    
  )
}

export default Header