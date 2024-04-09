import React from "react";

const Projects = () => {
  return (
    <div className="skills flex flex-col items-center">
      <div className="heading text-6xl text-center text-green-600 font-semiboldbold pt-2 mt-2">
        <h1 className="text-4xl sm:text-6xl font-bold">PROJECTS</h1>
      </div>
      <div className="w-56 h-2 my-2 mb-10 bg-slate-900 rounded-full"></div>

      <div className="cards flex justify-center flex-wrap items-center gap-5">
        {/* <!-- card 1 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md ">
          <div className="card_img w-14">screenshot here</div>
          <h1>title of project</h1>
          <p>summary of project</p>
          <div>technologies used</div>
        </div>
        {/* <!-- card 2 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md ">
          <div className="card_img w-14">screenshot here</div>
          <h1>title of project</h1>
          <p>summary of project</p>
          <div>technologies used</div>
        </div>
        {/* <!-- card 3 --> */}
        <div className="card  flex justify-center items-center flex-col border-2 p-4 border-slate-700 rounded-lg m-2 hover:scale-105 transition-all duration-300 hover:bg-slate-700 hover:shadow-slate-500 hover:shadow-md ">
          <div className="card_img w-14">screenshot here</div>
          <h1>title of project</h1>
          <p>summary of project</p>
          <div>technologies used</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
