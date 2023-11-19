import React from "react";
import HomeExtra from "./HomeExtra";
import PopularInstructors from "./PopularInstructors";
import Courses from "../Components/Courses/Courses";
import AnimatedArrow from "../Utils/AnimatedArrow";
import LessionTypes from "./LessionTypes";
import Partners from "./Partners";
import headerVideo from "/public/video.mp4";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto border-b-custom z-50 min-h-screen space-y-88">
          <div className="relative">
            {/* <img src="/1.png" className="w-full min-h-screen object-cover" /> */}
            <video className="min-h-screen w-full object-cover" src={headerVideo} autoPlay loop muted></video>
            <div className="absolute top-1/3 left-1/4">
              <div className="bg-custom bg-opacity-60 p-5">
                <p className="text-[50px] font-semibold uppercase">Soundscape</p>
                <p className="text-lg font-medium pb-2">
                  provides lessons, exercises, and interactive tools that help
                  you learn music. Learn the skills essential for understanding
                  music, reading music, and playing an instrument.
                </p>
              </div>
            </div>
            <div className="absolute left-20 bottom-52">
            <div className="h-40 w-40">
              <AnimatedArrow />
            </div>
            </div>
          </div>
      </div>
      {/* ........................................................................................... */}
        <Courses />
      {/* ..................................................................................... */}
      <div className="container mx-auto py-6 pt-10 mt-20">
      <div className="pb-10">
          <div className="py-8 flex items-center justify-start my-10 bg-custom bg-opacity-40 border-r-[5px] border-r-custom w-1/2 ml-auto">
          <div className="text-4xl font-semibold space-y-5 text-start pl-5">
              <p className="text-gray-800 text-[50px] font-semibold">TOP</p>
              <p className="text-gray-800"><span className="bg-custom p-2 ml-1">INSTRUCTORS</span></p>
            </div>
          </div>
        </div>
        <PopularInstructors />
      </div>
      {/* ............................................................................................... */}
      <div className="container mx-auto">
        <div className="pb-10">
          <div className="py-8 flex items-center justify-end my-10 bg-custom bg-opacity-40 w-1/2 border-l-[5px] border-l-custom">
          <div className="text-4xl font-semibold space-y-5 text-end pr-5">
              <p className="text-gray-800 text-[50px] font-semibold uppercase">Some</p>
              <p className="text-gray-800 uppercase">Student <span className="bg-custom p-2 ml-1 uppercase">Reviews</span></p>
            </div>
          </div>
        </div>
        <HomeExtra />
      </div>
      {/* ..................................................................................................... */}
      <LessionTypes />
      {/* .......................................................................................................... */}
      <Partners />
    </div>
  );
};

export default Home;
