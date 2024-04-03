import React from "react";
import logo from "../assets/images/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div
      className="footer flex flex-col items-center mt-8 bg-slate-900 text-white"
      id="contact"
    >
      <div className="logo">
        <img src={logo} className="w-16 my-4" loading="lazy" alt="" />
      </div>
      <div className="follow text-2xl my-2">
        <h2>Follow Us</h2>
      </div>
      <div className="social_media flex gap-5 text-3xl my-4">
        <a
          className="hover:text-green-600 transition-all duration-300 hover:drop-shadow-md hover:shadow-green-400"
          target="_blank"
          href="https://www.instagram.com/vikas_chaudhari79/"
        >
          <FaInstagram />
        </a>
        <a
          className="hover:text-green-600 transition-all duration-300 hover:drop-shadow-md hover:shadow-green-400 "
          target="_blank"
          href="https://www.linkedin.com/in/vikas-chaudhari-730604243/"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="hover:text-green-600 transition-all duration-300 hover:drop-shadow-md hover:shadow-green-400 "
          target="_blank"
          href="https://twitter.com/vikaschaud31343"
        >
          <FaXTwitter />
        </a>
        <a
          className="hover:text-green-600 transition-all duration-300 hover:drop-shadow-md hover:shadow-green-400"
          target="_blank"
          href="https://github.com/vikas-chaudhari"
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <p className="text-2xl">
          Copyright &copy;2023 All rights reserved | Powered with
          <span className="text-red-500"> &hearts; </span>by Vikas Chaudhari
        </p>
      </div>
    </div>
  );
}

export default Footer;
