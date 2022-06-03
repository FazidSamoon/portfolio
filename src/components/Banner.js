import React, { useEffect } from "react";
import Header from "./Header";
import TypeWriter from "typewriter-effect";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Banner() {
  return (
    <span
    id="home"
    >
      <div className="banner bg-[#0a192f] h-screen w-screen flex justify-center">
        <Header />

        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-offset="100"
          src="fazidlogo.png"
          alt=""
          className="absolute h-[15rem] sm:h-[15rem] lg:h-[26rem] xl:h-[27rem] top-28 md:top-32 lg:right-0 lg:top-10 xl:top-24  xl:right-0 animate-pulse px-14 "
        />

        <div className="absolute z-20 flex flex-row lg:flex-col w-[13rem] h-[3rem] lg:h-[13rem] lg:w-[3rem] items-center justify-center bottom-3 lg:bottom-2 lg:left-4 xl:left-5 ">
          <a href="https://github.com/FazidSamoon">
            <AiFillGithub
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="100"
              className="text-[#58dfc3] text-2xl font-bold my-2 mr-2 cursor-pointer z-100"
            />
          </a>
          <a href="#">
            <FaFacebookF
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="text-[#58dfc3] text-2xl font-bold my-2 mr-2"
            />
          </a>
          <a href="linkedin.com/in/fazid-samoon-177356194/">
            <AiFillLinkedin
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="300"
              className="text-[#58dfc3] text-2xl font-bold my-2 mr-2"
            />
          </a>
          <a href="https://www.hackerrank.com/it21084690#">
            <SiHackerrank
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="400"
              className="text-[#58dfc3] text-2xl font-bold my-2 mr-2"
            />
          </a>
          <a href="https://www.instagram.com/fazid_samoon/">
            <FaInstagram
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="500"
              className="text-[#58dfc3] text-2xl font-bold my-2 mr-2"
            />
          </a>
        </div>

        <div className="flex flex-col w-screen h-full justify-center  z-10 sm:mt-11 ">
          <div className="flex flex-col justify-center  text-center lg:text-left w-full translate-y-24 lg:translate-y-0 lg:ml-20">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="100"
              className="font-mono font-medium text-[1rem] sm:text-[1.5rem] lg:text-[1.5rem] text-gray-400"
            >
              Hello There! My name is
              <span className="font-mono text-[20px] font-extrabold text-[#58dfc3]">
                ,
              </span>
            </h1>

            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="font-mono text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#58dfc3]"
            >
              Fazid Samoon
            </h1>

            <h1
              id="app"
              className="font-mono text-[1.2rem] sm:text-[2rem] lg:text-[3rem] font-extrabold opacity-40 translate-y-[10px]"
            >
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString(
                      "<strong><span style='color: #58dfc3;'>an Undergraduate</span></strong>"
                    )
                    .pauseFor(900)
                    .deleteChars(16)
                    .typeString(
                      '<span style="color: #58dfc3;">a Full Stack Developer</span>'
                    )
                    .pauseFor(1000)
                    .start();
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    </span>
  );
}

export default Banner;
