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
    <div id='header-container' className={`${show ? 'bg-red-500 ' : 'bg-none '} mobile:hidden tablet:flex desktop:flex w-screen h-16 z-20 lg:flex items-center justify-center fixed transition ease-in duration-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'`}>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif'>HOME</a>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif'>ABOUT</a>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif'>EDUCATION</a>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif'>PROJECTS</a>
        <a href='/' className='text-[#ffffff] text-small mr-2 font-medium font-serif'>CONTACT</a>
    </div>
  )
}

export default Header