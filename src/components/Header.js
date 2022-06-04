import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineClose } from "react-icons/ai";
AOS.init();

function Header() {
  const [show, setShow] = useState(false);

  const [burgerNav, setBurgerNav] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  function burgerNavController() {
    setBurgerNav(!burgerNav);
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);

    //remove
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className="fixed flex flex-row w-screen h-[4rem] 2xl:h-[6rem] items-center justify-between z-50 mt-0 ">
      <img
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-offset="100"
        src="./portfolio/fazidlogo.png"
        alt=""
        className="relative h-8 ml-6 2xl:h-12 2xl:w-12"
      />

      <nav className=" flex items-center z-50">
        <TiThMenu
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="100"
          className="absolute h-8 w-8 text-[#58dfc3] right-6 md:hidden"
          onClick={burgerNavController}
        />

        <ul
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="100"
          className="hidden md:flex "
        >
          <li>
            <a
              href="/"
              className="text-[#ffffff] text-small 2xl:text-2xl mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              <span className=" mr-2 text-[#58dfc3]">01.</span>HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[#ffffff] text-small 2xl:text-2xl mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              <span className=" mr-2 text-[#58dfc3]">02.</span>ABOUT
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#ffffff] text-small 2xl:text-2xl mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <span className=" mr-2 text-[#58dfc3]">03.</span>EDUCATION
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#ffffff] text-small 2xl:text-2xl mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="400"
            >
              <span className=" mr-2 text-[#58dfc3]">04.</span>PROJECTS
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#ffffff] text-small 2xl:text-2xl mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="500"
            >
              <span className=" mr-2 text-[#58dfc3]">05.</span>CONTACT
            </a>
          </li>
        </ul>

        <ul
          className={
            burgerNav
              ? "flex-col flex items-center fixed inset-0 bottom-1/2 uppercase bg-[#58dfc3]/10 backdrop-blur-lg gap-4 justify-center p-8 md:hidden  "
              : "hidden"
          }
        >
          <AiOutlineClose
            onClick={burgerNavController}
            className=" h-8 w-8 text-[#58dfc3] font-extrabold z-30"
          />
          <li>
            <a
              href="/"
              className="text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              <span className=" mr-2 text-[#58dfc3]">01.</span>HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              <span className=" mr-2 text-[#58dfc3]">02.</span>ABOUT
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="300"
            >
              <span className=" mr-2 text-[#58dfc3]">03.</span>EDUCATION
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="400"
            >
              <span className=" mr-2 text-[#58dfc3]">04.</span>PROJECTS
            </a>
          </li>
          {/* <li>
            <a
              href="/"
              className="text-[#ffffff] text-small mr-8 font-medium font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 hover:underline decoration-amber-800 decoration-4 underline-offset-4 transition-all ease-in-out duration-500"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="500"
            >
              <span className=" mr-2 text-[#58dfc3]">05.</span>CONTACT
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
