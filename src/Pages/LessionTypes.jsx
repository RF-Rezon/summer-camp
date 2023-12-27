import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { LuClipboardCheck, LuHeartHandshake, LuPlayCircle, LuRadio, LuTouchpad } from "react-icons/lu";
import { useInView } from "react-intersection-observer";


let strokeColor = "#14b8a6" ;
const LessionTypes = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <>
      <div className="container mx-auto pb-10 dash_classes">
        <div>
          <div className="pb-6">
          <motion.div ref={ref}
            initial={{ opacity: 0, x:  -150 }}
            animate={controls}
            transition={{ duration: 1.5 }} className="py-8 flex items-center justify-end my-10 bg-custom bg-opacity-40 border-l-[5px] border-l-custom md:w-1/2 md:mr-auto mr-20 w-fit">
          <div className="text-4xl font-semibold space-y-5 text-end pr-5">
              <p className="text-gray-800 md:text-4xl font-semibold uppercase">Ways</p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-2 md:items-center items-end">
                <p className="text-gray-800 uppercase pl-3">How you will </p><span className="bg-custom p-2 ml-1 customWhite uppercase">Learn</span>
              </div>
            </div>
          </motion.div>
            <p className="text-lg font-medium text-center mx-auto py-6 pt-12 my-14">
              Avoid sticking to only one kind of instruction. Make use of the
              available choices. Soundscape was created with a clear strategy in
              mind. And diversifying it was the primary goal of this.
            </p>
            <div className="uppercase grid grid-cols-1 md:grid-cols-5 gap-10 py-10">
              <motion.div whileHover={{ scale: 1.5, rotate: 2.0}}
                  whileTap={{ scale: 0.95 }} className="flex flex-col hover:cursor-pointer items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
                <LuPlayCircle className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">4k Video</p>
              </motion.div>
             
              <motion.div whileHover={{ scale: 1.5, rotate: 2.0}}
                  whileTap={{ scale: 0.95 }}  className="flex flex-col hover:cursor-pointer items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
              <LuRadio className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">Live Class</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.5, rotate: 2.0}}
                  whileTap={{ scale: 0.95 }} className="flex flex-col hover:cursor-pointer items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
              <LuTouchpad className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">Slides</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.5, rotate: 2.0}}
                  whileTap={{ scale: 0.95 }}  className="flex flex-col hover:cursor-pointer items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
              <LuClipboardCheck className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">Daily Exam</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.5, rotate: 2.0}}
                  whileTap={{ scale: 0.95 }} className="flex flex-col hover:cursor-pointer items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
              <LuHeartHandshake className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">24/7 Support</p>
              </motion.div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessionTypes;
