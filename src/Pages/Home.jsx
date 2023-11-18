import React from "react";
import HomeExtra from "./HomeExtra";
import PopularInstructors from "./PopularInstructors";
import Courses from "../Components/Courses/Courses";
import AnimatedArrow from "../Utils/AnimatedArrow";


const Home = () => {
  return (
    <div>
      <div className="mx-auto border-b-custom z-50 min-h-screen space-y-88">
          <div className="relative">
            <img src="/1.png" className="w-full min-h-screen object-cover" />
            <div className="absolute top-1/3 left-1/4">
              <div className="bg-custom pb-2 pl-4">
                <p className="text-7xl font-semibold py-5 uppercase">Soundscape</p>
                <p className="text-lg font-normal pb-2">
                  provides lessons, exercises, and interactive tools that help
                  you learn music. Learn the skills essential for understanding
                  music, reading music, and playing an instrument.
                </p>
              </div>
            </div>
            <div className="absolute left-4 bottom-[24px]">
            <AnimatedArrow className='h-3 w-3'/>
            </div>
          </div>
      </div>
      {/* ........................................................................................... */}
        <Courses />
      {/* ..................................................................................... */}
      <div className="container mx-auto py-6 pt-10 mt-20">
      <div className="pb-10">
          <div className="py-8 flex items-center justify-start my-10 bg-custom bg-opacity-40 w-1/2 ml-auto">
          <div className="text-4xl font-semibold space-y-5 text-start pl-5">
              <p className="text-gray-800 text-[50px] font-semibold">TOP</p>
              <p className="text-gray-800"><span className="bg-custom p-2 ml-1">INSTRUCTORS</span></p>
            </div>
          </div>
        </div>
        <PopularInstructors />
      </div>
      {/* ............................................................................................... */}
      <div className="container mx-auto pb-10">
        <div className="pb-10">
          <div className="py-8 flex items-center justify-end my-10 bg-custom bg-opacity-40 w-1/2">
          <div className="text-4xl font-semibold space-y-5 text-end pr-5">
              <p className="text-gray-800 text-[50px] font-semibold uppercase">Some</p>
              <p className="text-gray-800 uppercase">Student <span className="bg-custom p-2 ml-1 uppercase">Reviews</span></p>
            </div>
          </div>
        </div>
        <HomeExtra />
      </div>
    </div>
  );
};

export default Home;
