import React, { useState } from "react";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiSpringboot } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function About() {
  const [show, setShow] = useState({
    about: true,
    education: false,
    skills: false,
    background: false,
  });

  function activateHome() {
    setShow({
      about: true,
      education: false,
      skills: false,
      background: false,
    });
  }

  function activateEducation() {
    setShow({
      about: false,
      education: true,
      skills: false,
      background: false,
    });
  }

  function activateSkills() {
    setShow({
      about: false,
      education: false,
      skills: true,
      background: false,
    });
  }

  function activateBackground() {
    setShow({
      about: false,
      education: false,
      skills: false,
      background: true,
    });
  }

  return (
    <div
      id="about"
      className=" w-screen h-screen bg-[#051630] flex justify-center items-center"
    >
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-[6rem] sm:h-[10rem]">
          <h1
            className="text-[#58dfc3] font-mono text:[12px] sm:text-3xl md:text-5xl font-medium mt-4 ml-4"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-offset="100"
          >
            About Me
          </h1>

          <div className=" w-full  flex justify-center items-center mt-2 sm:mt-6">
            <a
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="100"
              className={`${
                show.about ? "text-[#58dfc3] bg-[#547c74] " : "text-[#ffffff]"
              } px-1 mr-4 rounded-sm text-[8px] sm:text-[14px] md:text-[18px] font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 transition-all ease-in-out duration-500`}
              onClick={activateHome}
            >
              <span className=" mr-2 py-2 text-[#58dfc3]">01.</span>ABOUT
            </a>

            <a
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="200"
              className={`${
                show.skills ? "text-[#58dfc3] bg-[#547c74] " : "text-[#ffffff]"
              } px-1 mr-4 rounded-sm text-[8px] sm:text-[14px] md:text-[18px] font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 transition-all ease-in-out duration-500`}
              onClick={activateSkills}
            >
              <span className=" mr-2 text-[#58dfc3]">02.</span>SKILLS
            </a>

            <a
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offset="300"
              className={`${
                show.education
                  ? "text-[#58dfc3] bg-[#547c74] "
                  : "text-[#ffffff]"
              } px-1 mr-4 rounded-sm text-[8px] sm:text-[14px] md:text-[18px] font-mono cursor-pointer hover:scale-x-110 hover:origin-top hover:-translate-y-1 transition-all ease-in-out duration-500`}
              onClick={activateEducation}
            >
              <span className=" mr-2 text-[#58dfc3]">03.</span>EDUCATION
            </a>
          </div>

          <hr className=" mt-4"></hr>
        </div>

        <div className="w-full ">
          {show.about && (
            <div className="w-full h-full flex flex-col lg:flex-row justify-center lg:justify-between">
              <div className="  w-full lg:w-2/3 ">
                <span
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  className=" text-[14px] sm:text-[24px] md:text-[32px] font-medium text-[#58dfc3] ml-4 lg:ml-8"
                >
                  HEY!
                </span>

                <p
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                  className="text-gray-300 leading-7 text-[12px] sm:text-[15px] md:text-[16px] md:max-w-[45rem]  font-bold ml-2 mt-5 lg:ml-8 lg:mt-14"
                >
                  I am Fazid Samoon, a motivated software engineering
                  undergraduate from Sri Lanka Institute of Information
                  Technology.
                  <br />
                  <br /> A flexible and courageous individual an advanced
                  knowledge of implementing software with a good level of
                  communication skill and team spirit. Seeking to use proven
                  skills in developing high quality, high performance and highly
                  reliable software applications.
                </p>
              </div>

              <div className=" w-full lg:w-1/3 flex items-center justify-center  mt-2">
                <img
                  data-aos="fade-left"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  src="fazid.png"
                  alt=""
                  className="h-[10rem] sm:h-[15rem] rounded-full lg:mt-14"
                />
              </div>
            </div>
          )}

          {show.skills && (
            <div className="w-full h-full py-10 pl-4 flex justify-center">
              <div
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-duration="1000"
                className=" grid grid-cols-2 grid-flow-row gap-14 lg:grid-cols-3 lg-gap-20"
              >
                <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 flex items-center justify-center shadow-2xl">
                  <div className="skillsBorder h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 absolute z-0 "></div>
                  <SiJavascript className="text-5xl sm:text-6xl md:text-8xl font-KdamThmorPro text-[#58dfc3] bg-[#051630] z-10 hover:scale-110 transition-all ease-in-out duration-700" />
                </div>

                <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 flex items-center justify-center shadow-2xl">
                  <div className="skillsBorder h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 absolute z-0 "></div>
                  <FaJava className=" text-5xl sm:text-6xl md:text-8xl font-KdamThmorPro text-[#58dfc3] bg-[#051630] z-10 hover:scale-110 transition-all ease-in-out duration-700" />
                </div>

                <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 flex items-center justify-center shadow-2xl">
                  <div className="skillsBorder h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 absolute z-0 "></div>
                  <SiMysql className=" text-5xl sm:text-6xl md:text-8xl font-KdamThmorPro text-[#58dfc3] bg-[#051630] z-10 hover:scale-110 transition-all ease-in-out duration-700" />
                </div>

                <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 flex items-center justify-center shadow-2xl">
                  <div className="skillsBorder h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 absolute z-0 "></div>
                  <SiTailwindcss className=" text-5xl sm:text-6xl md:text-8xl font-KdamThmorPro text-[#58dfc3] bg-[#051630] z-10 hover:scale-110 transition-all ease-in-out duration-700" />
                </div>

                <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 flex items-center justify-center shadow-2xl">
                  <div className="skillsBorder h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 absolute z-0 "></div>
                  <DiPhp className=" text-5xl sm:text-6xl md:text-8xl font-KdamThmorPro text-[#58dfc3] bg-[#051630] z-10 hover:scale-110 transition-all ease-in-out duration-700" />
                </div>

                <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 flex items-center justify-center shadow-2xl">
                  <div className="skillsBorder h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 absolute z-0 "></div>
                  <SiSpringboot className=" text-5xl sm:text-6xl md:text-8xl font-KdamThmorPro text-[#58dfc3] bg-[#051630] z-10 hover:scale-110 transition-all ease-in-out duration-700" />
                </div>

                <div className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 flex items-center justify-center shadow-2xl">
                  <div className="skillsBorder h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 absolute z-0 "></div>
                  <FaReact className=" text-5xl sm:text-6xl md:text-8xl font-KdamThmorPro text-[#58dfc3] bg-[#051630] z-10 hover:scale-110 transition-all ease-in-out duration-700" />
                </div>
              </div>
            </div>
          )}

          {show.education && (
            <div className="w-full h-full py-10 px-10 lg:flex lg items-center lg:justify-center ">
              <div className="max-w-[40rem] flex justify-center items-center flex-col">
                <h1
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-duration="1000"
                  className=" font-semibold text-center text-[1rem] sm:text-[2rem] text-gray-400"
                >
                  <span className=" text-xl sm:text-3xl font-KdamThmorPro text-[#58dfc3] items-center">
                    "
                  </span>
                  Education is the most powerful weapon which you can use to
                  change the world
                  <span className=" font-KdamThmorPro text-[#58dfc3] text-xl sm:text-3xl">
                    "
                  </span>
                </h1>
              </div>

              <div className=" mt-14 flex flex-col w-full items-center justify-center">
                <div class="overflow-x-auto">
                  <table class="table w-full">
                    <tbody>
                      <tr>
                        <td>
                          <h1 className="text-[10px] sm:text-[18px] text-gray-400 font-medium font-KdamThmorPro mr-2">
                            2010 - 2019
                          </h1>
                        </td>
                        <td>
                          <h1 className="text-[16px] sm:text-[25px] text-[#58dfc3] font-medium font-KdamThmorPro">
                            Isipathana College
                          </h1>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h1 className="text-[10px] sm:text-[18px] text-gray-400 font-medium font-KdamThmorPro mr-2">
                            2021 - Present
                          </h1>
                        </td>
                        <td>
                          <h1 className="text-[16px] sm:text-[25px] text-[#58dfc3] font-medium font-KdamThmorPro">
                            SLIIT
                          </h1>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
