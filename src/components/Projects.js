import React, { useState } from "react";
import { projectDetais } from "../projectDetails";

function Projects() {
  return (
    <div 
    id="projects"
    className="h-full w-screen bg-[#0a192f] flex flex-col">
      <h1 className="text-[#58dfc3] font-mono text-[16px] md:text-[26px] font-medium mt-4 ml-4">
        Projects
      </h1>

      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="flex w-screen h-full justify-center items-center mt-8 "
      >
        <div className=" h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] mb-8 shadow-2xl">
          <img
            src="project1.jpeg"
            className="h-full w-full object-contain opacity-60 hover:scale-110 transition-all ease-in-out duration-1000"
          />
          <div className="absolute h-[200px] w-[200px] lg:h-[150px] lg:w-[340px] bg-[#051630] opacity-80 translate-y-[-12.6rem] translate-x-0 lg:translate-x-[15rem] lg:translate-y-[-20rem] lg:bg-[#0d336b]"></div>

          <div className="absolute translate-y-[-12rem] translate-x-0 lg:translate-x-[15rem] lg:translate-y-[-20rem]">
            <div className="  w-[200px] h-[4rem] opacity-70 flex items-center ml-2">
              <h1 className="text-[#fff] font-mono text-xl lg:text-2xl font-bold">
                Netflix Clone
              </h1>
            </div>

            <div className=" max-w-[150px] lg:max-w-[280px] h-full opacity-70 flex items-center ml-2">
              <h1 className="text-[#58dfc3] font-mono text-[14px] lg:text-[18px] font-bold">
              Created a Netflix clone to show it's front end view using react, redux and firebase.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="1000"
        className="flex w-screen h-full justify-center items-center mt-8 "
      >
        <div className=" h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] mb-8 shadow-2xl">
          <img
            src="project1.jpeg"
            className="h-full w-full object-contain opacity-60 hover:scale-110 transition-all ease-in-out duration-1000"
          />
          <div className="absolute h-[200px] w-[200px] lg:h-[150px] lg:w-[340px] bg-[#051630] opacity-80 translate-y-[-12.6rem] translate-x-0 lg:translate-x-[-11rem] lg:translate-y-[-20rem] lg:bg-[#0d336b]"></div>

          <div className="absolute translate-y-[-12rem] translate-x-0 lg:translate-x-[-10rem] lg:translate-y-[-20rem]">
            <div className="  w-[200px] h-[4rem] opacity-70 flex items-center ml-2">
              <h1 className="text-[#fff] font-mono text-xl lg:text-2xl font-bold">
                Netflix Clone
              </h1>
            </div>

            <div className=" max-w-[150px] lg:max-w-[280px] h-full opacity-70 flex items-center ml-2">
              <h1 className="text-[#58dfc3] font-mono text-[14px] lg:text-[18px] font-bold">
              Created a Netflix clone to show it's front end view using react, redux and firebase.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
