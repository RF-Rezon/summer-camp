import React from "react";
import HomeExtra from "./HomeExtra";
import PopularInstructors from "./PopularInstructors";
import Courses from "../Components/Courses/Courses";
import AnimatedArrow from "../Utils/AnimatedArrow";
import LessionTypes from "./LessionTypes";
import Partners from "./Partners";
import headerVideo from "/public/video.mp4";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const Home = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen">
      <div className="mx-auto min-h-screen space-y-88">
        <div className="relative">
          <video
            className="min-h-screen w-full object-cover"
            src={headerVideo}
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute top-1/3 md:left-1/4 w-full md:w-fit">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-custom bg-opacity-60 p-5"
            >
              <p className="text-[30px] md:text-[50px] font-semibold uppercase mb-4 md:mb-0 mt-2 md:mt-0">
                Soundscape
              </p>
              <p className="text-lg font-medium pb-2">
                provides lessons, exercises, and interactive tools that help you
                learn music. Learn the skills essential for understanding music,
                reading music, and playing an instrument.
              </p>
            </motion.div>
          </div>
          <div className="w-full bg-pink-600 flex items-center justify-center">
            <div className="absolute   bottom-20 md:left-20 md:bottom-52">
              <div className="h-40 md:h-44 w-40 md:w-44">
                <AnimatedArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ........................................................................................... */}
      <Courses />
      {/* ..................................................................................... */}
      <div className="container mx-auto py-6 pt-10 mt-20">
        <div className="pb-10">
          <div
            className="py-8 flex items-center justify-start my-10 bg-custom bg-opacity-40 border-r-[5px] border-r-custom md:w-1/2 md:ml-auto ml-20"
          >
            <div className="text-4xl font-semibold space-y-5 text-start pl-5">
              <p className="text-gray-800 text-4xl font-semibold">TOP</p>
              <p className="text-gray-800">
                <span className="bg-custom p-2">INSTRUCTORS</span>
              </p>
            </div>
          </div>
        </div>
        <PopularInstructors />
      </div>
      {/* ............................................................................................... */}
      <div className="container mx-auto">
        <div className="pb-10">
          <motion.div 
          ref={ref}
          initial={{ opacity: 0, x:  -150 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="py-8 flex items-center justify-end my-10 bg-custom bg-opacity-40 border-l-[5px] border-l-custom md:w-1/2 md:mr-auto mr-20 w-fit">
            <div className="text-4xl font-semibold space-y-5 text-end pr-5">
              <p className="text-gray-800 px-3 md:px-0 md:text-4xl font-semibold uppercase text-end">
                Students
              </p>
              <p className="text-gray-800">
                <span className="bg-custom p-2 ml-1 uppercase">Reviews</span>
              </p>
            </div>
          </motion.div>
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
