import React from "react";

const ConnectWithMe = () => {
  return (
    <div className="  flex flex-col items-center p-5 ">
      <div className="heading text-6xl text-center text-green-600 font-semiboldbold pt-2 mt-2">
        <h1 className="text-4xl sm:text-6xl font-bold">Connect With Me</h1>
      </div>
      <div className="w-56 h-2 my-2 mb-10 bg-slate-900 rounded-full"></div>

      <form
        action=""
        className=" w-full flex flex-col justify-center items-center md:flex-row p-2 gap-6"
      >
        <div className="flex flex-col w-full md:w-1/2 gap-10 ">
          <input
            type="text"
            placeholder="Enter your name"
            className="outline-none border-green-500 border-2  w-full p-2 px-4 rounded-full"
          />
          <input
            type="text"
            placeholder="Enter your email address"
            className="outline-none border-green-500 border-2  w-full p-2 px-4 rounded-full"
          />
        </div>
        <textarea
          className="md:w-1/2  w-full outline-none border-green-500 border-2 p-1 px-4 mt-5 rounded-lg"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your thoughts"
        ></textarea>
      </form>
      <button className=" w-32 flex gap-2 justify-center items-center hover:text-white bg-transparent border-green-600 border-2 mt-10 p-2 px-5 rounded-full select-none hover:bg-green-500 text-xl transition-all duration-300 hover:shadow-sm hover:shadow-green-400">
        Submit
      </button>
    </div>
  );
};

export default ConnectWithMe;
