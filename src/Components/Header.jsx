import React from "react";
import logo from "../assets/images/logo.png";
function Header() {
  return (
    <div className="w-screen bg-opacity-50 backdrop-blur-sm bg-slate-950 text-white flex justify-between p-2 fixed z-50">
      <div className="logo">
        <img src={logo} className="w-16" alt="" />
      </div>
      <div className="navlinks  sm:flex sm:justify-center sm:items-center  hidden pr-5">
        <ul className="flex gap-10">
          <li>
            <a
              className="px-2 py-1 rounded-md text-md transition-all hover:bg-green-600 duration-300"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="px-2 py-1 rounded-md text-md transition-all hover:bg-green-600 duration-300"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="px-2 py-1 transition-all hover:bg-green-600 duration-300 rounded-md text-md"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="menu flex justify-center items-center text-3xl sm:hidden">
        &#x2630;
      </div>
    </div>
  );
}

export default Header;
