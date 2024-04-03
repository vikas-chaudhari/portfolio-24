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
    <div className="skills">
      <div className="heading text-6xl text-center text-green-600 font-semiboldbold py-2 my-2">
        <h1>SKILLS</h1>
      </div>

      <div className="cards flex justify-center flex-wrap items-center gap-5">
        {/* <!-- card 1 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-green-200 hover:shadow-green-200 hover:shadow-sm ">
          <div className="card_img w-48">
            <img src={html} alt="" />
          </div>
          <div className="card_data text-2xl text-gray-600 font-bold my-2">
            <h2>HTML5</h2>
          </div>
        </div>
        {/* <!-- card 2 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-green-200 hover:shadow-green-200 hover:shadow-sm">
          <div className="card_img w-48">
            <img src={css} alt="" />
          </div>
          <div className="card_data text-2xl text-gray-600 font-bold my-2">
            <h2>CSS</h2>
          </div>
        </div>
        {/* <!-- card 3 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-green-200 hover:shadow-green-200 hover:shadow-sm">
          <div className="card_img w-48">
            <img src={js} alt="" />
          </div>
          <div className="card_data text-2xl text-gray-600 font-bold my-2">
            <h2>JavaScript</h2>
          </div>
        </div>

        {/* <!-- card 4--> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-green-200 hover:shadow-green-200 hover:shadow-sm">
          <div className="card_img w-48">
            <img src={react} alt="" />
          </div>
          <div className="card_data text-2xl text-gray-600 font-bold my-2">
            <h2>React</h2>
          </div>
        </div>
        {/* <!-- card 5 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-green-200 hover:shadow-green-200 hover:shadow-sm">
          <div className="card_img w-48">
            <img src={python} alt="" />
          </div>
          <div className="card_data text-2xl text-gray-600 font-bold my-2">
            <h2>Python</h2>
          </div>
        </div>
        {/* <!-- card 6 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-green-200 hover:shadow-green-200 hover:shadow-sm">
          <div className="card_img w-48">
            <img src={mysql} className="mysql" alt="" />
          </div>
          <div className="card_data text-2xl text-gray-600 font-bold my-2">
            <h2>MySQL</h2>
          </div>
        </div>
        {/* <!-- card 7 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-green-200 hover:shadow-green-200 hover:shadow-sm">
          <div className="card_img w-48">
            <img src={cpp} className="cpp" alt="" />
          </div>
          <div className="card_data text-2xl text-gray-600 font-bold my-2">
            <h2>C++</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
