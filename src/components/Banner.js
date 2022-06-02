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
    <span>
      <div className="banner bg-[#0a192f] h-screen w-screen">
        <Header />

        <div className="">
          <img
            src="fazidlogo.png"
            alt=""
            className="absolute h-[20rem] animate-pulse
                              lg:h-[30rem] lg:transform lg:translate-y-[7rem] lg:translate-x-[55rem] 
                              sm:h-[20rem] mobile:translate-x-4 mobile:translate-y-[7rem] mobile:z-0
                              tablet:
                              desktop:
                    "
          />
        </div>

        <div
          className="flex flex-col absolute items-center w-16 h-[13rem] 
        
                        lg:transform lg:translate-x-6 lg:translate-y-[30rem] lg:flex-col lg:w-16 lg:h-[13rem]
                        mobile:transform mobile:translate-x-[0rem] mobile:translate-y-[50rem] mobile:flex-row mobile:items-center mobile:justify-center mobile:w-[25rem] mobile:h-14 
                        "
        >
          <a href="https://github.com/FazidSamoon">
            <AiFillGithub
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="100"
              className="text-[#58dfc3] text-2xl font-bold mt-1
                      mobile:justify-center mobile:ml-8
            "
            />
          </a>
          <a href="#">
            <FaFacebookF
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="text-[#58dfc3] text-2xl font-bold mt-4 shadow-2xl
                      mobile:justify-center mobile:ml-8
            "
            />
          </a>
          <a href="www.linkedin.com/in/fazid-samoon">
            <AiFillLinkedin
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="300"
              className="text-[#58dfc3] text-2xl font-bold mt-4
                mobile:justify-center mobile:ml-8
            "
            />
          </a>
          <a href="https://www.hackerrank.com/it21084690#">
            <SiHackerrank
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="400"
              className="text-[#58dfc3] text-2xl font-bold mt-4
                          mobile:justify-center mobile:ml-8
                "
            />
          </a>
          <a href="#">
            <FaInstagram
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="500"
              className="text-[#58dfc3] text-2xl font-bold mt-4
                          mobile:justify-center mobile:ml-8   
            "
            />
          </a>
        </div>

        <div
          className="
                        flex flex-col w-screen justify-center z-40
                        lg:items-start lg:pt-[190px] lg:ml-40 lg:text-left lg:translate-y-0
                        mobile:transform mobile:translate-x-[0rem] mobile:translate-y-[35rem] mobile:text-center     
        "
        >
          <div>
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="100"
              className="font-mono font-medium text-[2rem] tracking-wider text-gray-400
                       lg:text-[2rem]
                       mobile:text-[1.5rem] mobile:ml-0 
            "
            >
              Hello There! My name is{" "}
              <span className="font-mono text-[40px] font-extrabold text-[#58dfc3]">
                ,
              </span>
            </h1>

            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="font-mono text-[80px] font-extrabold text-[#58dfc3]
                          lg:text-[80px]
                          mobile:text-[3rem] mobile:ml-0
            "
            >
              Fazid Samoon
            </h1>

            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="300"
              id="app"
              className="font-mono text-[60px] font-extrabold opacity-60
                lg:text-[60px]
                mobile:text-[2rem] mobile:ml-0
            "
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
