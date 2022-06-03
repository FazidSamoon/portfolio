import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer class="items-center p-4">
      <div className="flex flex-col items-center justify-center">
        <div>
          <p className=" text-sm font-bold md:text-lg">
            Copyright © 2022 - Fazid Samoon
          </p>
        </div>

        <div className="flex items-center mt-2 md:text-lg gap-2">
          <a href="https://github.com/FazidSamoon">
            <AiFillGithub />
          </a>
          <a href="www.linkedin.com/in/fazid-samoon">
            <AiFillLinkedin />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
