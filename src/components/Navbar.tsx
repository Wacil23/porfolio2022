import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
      <nav className="fixed z-[1]">
        <ul className="flex items-center flex-col content-center h-screen justify-center">
        <div className="bg-cyan-600 h-10 w-[1px]"></div>
          <li className="my-4 mx-4">
            <a>
              <BsFacebook />
            </a>
          </li>
          <li className="my-4 mx-4">
            <a>
              <BsGithub />
            </a>
          </li>
          <li className="my-4 mx-4">
            <a>
              <BsLinkedin />
            </a>
          </li>
        <div className="bg-cyan-600 w-[1px] h-10"></div>
        </ul>
      </nav>
  );
};

export default Navbar;
