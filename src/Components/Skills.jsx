import React from "react";
import html from "../assets/images/skills/html.png";
import cpp from "../assets/images/skills/cpp.png";
import css from "../assets/images/skills/css.png";
import js from "../assets/images/skills/js.png";
import mysql from "../assets/images/skills/mysql.png";
import python from "../assets/images/skills/python.png";
import react from "../assets/images/skills/react.png";

function Skills() {
  return (
    <div className="skills flex flex-col items-center">
      <div className="heading text-6xl text-center text-green-600 font-semiboldbold pt-2 mt-2">
        <h1 className="text-4xl sm:text-6xl font-bold">SKILLS</h1>
      </div>
      <div className="w-56 h-2 my-2 mb-10 bg-slate-900 rounded-full"></div>

      <div className="cards flex justify-center flex-wrap items-center gap-5">
        {/* <!-- card 1 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md ">
          <div className="card_img w-14">
            <img src={html} alt="" />
          </div>
        </div>
        {/* <!-- card 2 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md">
          <div className="card_img w-14">
            <img src={css} alt="" />
          </div>
        </div>
        {/* <!-- card 3 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md">
          <div className="card_img w-14">
            <img src={js} alt="" />
          </div>
        </div>

        {/* <!-- card 4--> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md">
          <div className="card_img w-14">
            <img src={react} alt="" />
          </div>
        </div>
        {/* <!-- card 5 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md">
          <div className="card_img w-14">
            <img src={python} alt="" />
          </div>
        </div>
        {/* <!-- card 6 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md">
          <div className="card_img w-14">
            <img src={mysql} className="mysql" alt="" />
          </div>
        </div>
        {/* <!-- card 7 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md">
          <div className="card_img w-14">
            <img src={cpp} className="cpp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
