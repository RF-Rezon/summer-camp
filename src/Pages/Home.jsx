import { motion, useAnimation } from "framer-motion";
import Courses from "../Components/Courses/Courses";
import AnimatedArrow from "../Utils/AnimatedArrow";
import HomeExtra from "./HomeExtra";
import LessionTypes from "./LessionTypes";
import Partners from "./Partners";
import PopularInstructors from "./PopularInstructors";
import headerVideo from "/public/video.mp4";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const Home = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,   
  });
  
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto min-h-screen space-y-88">
        <div className="relative">
          <video
            className="min-h-screen w-full object-cover"
            src={headerVideo}
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute top-1/3 md:left-1/4 w-full md:w-fit ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-custom bg-opacity-60 p-5 space-y-4"
            >
              <p className="md:text-6xl font-semibold uppercase mb-4 md:mb-0 mt-2 md:mt-0 hidden md:block">
                Soundscape
              </p>
              <p className="text-lg font-base pb-2 tracking-wide">
                provides lessons, exercises, and interactive tools that help you
                learn music. Learn the skills essential for understanding music,
                reading music, and playing an instrument.
              </p>
            </motion.div>
          </div>
          <div className=" absolute bottom-8 left-0 md:left-20 md:bottom-20">
            
              <div className="h-40 md:h-52 w-40 md:w-52">
                <AnimatedArrow />
              </div>
            
          </div>
        </div>
      </div>
      {/* ........................................................................................... */}
      <Courses />
      {/* ..................................................................................... */}
      <div className="container mx-auto py-6 pt-10">
        <div className="pb-10">
        <div  className="py-8 flex items-center justify-start my-10 bg-custom bg-opacity-40 border-r-[5px] border-r-custom md:w-1/2 md:ml-auto ml-20">

      
        <div className="text-3xl md:text-4xl font-semibold space-y-5 text-start pl-5">
          <p className="text-gray-800 font-semibold">TOP</p>
          <p className="text-gray-800">
            <span className="bg-custom p-2">INSTRUCTORS</span>
          </p>
        </div>
          </div>
    </div>
        <PopularInstructors />
      </div>
      {/* ............................................................................................... */}
      <div className="container mx-auto mt-28">
        <div className="pb-10">
          <motion.div 
          ref={ref}
          initial={{ opacity: 0, x:  -50 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="py-8 flex items-center justify-end my-10 bg-custom bg-opacity-40 border-l-[5px] border-l-custom md:w-1/2 md:mr-auto w-fit">
            <div className="text-3xl md:text-4xl font-semibold space-y-5 text-end pr-5">
              <p className="text-gray-800 pl-7 md:pl-0 font-semibold uppercase text-end">
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
