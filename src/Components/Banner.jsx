import React from "react";
import heroMan from "../assets/heroman.png";
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-14 lg:mt-8">
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-5xl font-bold lg:leading-[3.25rem]">
          One Step <br className="hidden lg:block" /> Closer To Your{" "}
          <br className="hidden lg:block" />{" "}
          <span className="text-gradient">Dream Job</span>
        </h1>
        <p className="text-[#757575] text-lg">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn-gradient px-5 py-2.5 rounded-lg text-white font-bold text-lg lg:text-xl">
          Get Started
        </button>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={heroMan} alt="A man" className="w-full object-contain " />
      </div>
    </div>
  );
};

export default Banner;
