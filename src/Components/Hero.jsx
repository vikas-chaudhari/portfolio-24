import React from "react";
import hacker_cropped from "../assets/images/freepik/hacker_cropped.jpg";
import hacker_very_cropped from "../assets/images/freepik/hacker_very_cropped.jpg";
import resume from "../assets/VIKAS_CV.pdf";
function Hero() {
  return (
    <div className="hero flex h-screen w-screen flex-col sm:flex-row-reverse items-center text-white">
      {/* Right hero starts here */}
      <div className="hero_img sm:w-2/4 sm:h-full w-full h-2/4 flex justify-center items-center ">
        <img
          className="w-full sm:hidden h-full object-contain border-4"
          src={hacker_cropped}
        />
        <img
          className="w-full hidden sm:block  h-full object-contain  border-4"
          src={hacker_very_cropped}
        />
      </div>

      {/* left hero starts here */}
      <div className="lefthero sm:w-2/4 sm:h-full w-full h-2/4 flex flex-col justify-center items-center p-4 bg-slate-950">
        <div className="label w-full h-full flex flex-col justify-center items-center space-y-4">
          <h2 className="hello text-2xl text-center">helllo...</h2>
          <h1 className="text-2xl">I AM</h1>
          <h1 className="text-4xl text-green-500">VIKAS CHAUDHARI</h1>
          <h2 className="text-4xl text-red-600 text-center">
            SOFTWARE DEVELOPER
          </h2>
          <div className="btn w-full flex py-10  gap-5 flex-wrap justify-center">
            <a href="mailto:vikas79725@gmail.com">
              <button className="w-32 h-10 border-2 rounded-lg border-white hover:bg-white transition-all duration-500 hover:text-black">
                MESSAGE
              </button>
            </a>
            <a href={resume} target="_blank">
              <button className="w-32 h-10 border-2 rounded-lg transition-all duration-500 border-white hover:bg-white hover:text-black">
                GET CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
