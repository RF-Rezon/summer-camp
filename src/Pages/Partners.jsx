import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { useInView } from "react-intersection-observer";

const Partners = () => {
        const controls = useAnimation();
        const [ref, inView] = useInView();
        
        useEffect(() => {
          if (inView) {
            controls.start({ opacity: 1, y: 0 });
          }
        }, [controls, inView]);
  return (
    <div>
       <div className="container mx-auto pb-10 dash_classes">
        <div>
          <div className="pb-6 py-16">
          <motion.div ref={ref} initial={{ opacity: 0, y:  160 }}
            animate={controls}
            transition={{ duration: 1.5 }} className="py-8 flex items-center justify-center my-10 bg-custom bg-opacity-40 w-1/3 mx-auto mb-14">
          <div className="text-[50px] font-semibold space-y-5 text-end pr-5">
              <p className="text-gray-800 uppercase"><span className="bg-custom p-2 ml-1 uppercase">Partners</span></p>
            </div>
          </motion.div>
         <div className='py-24 my-10 space-y-6' >
             
             <Marquee direction='right' speed={40}>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/atticus.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/channel.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/cytora.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/harmon.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/loupedeck.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/point.svg"/>
              </div>
              </Marquee>
              <Marquee direction='left' speed={60}> 
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/rhode.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/roto.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/sourcy.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/systems-studio.svg"/>
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/tentree.svg"/>
              </div>
              </Marquee>
         </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
