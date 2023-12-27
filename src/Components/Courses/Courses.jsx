import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth";
import ClickSoundWrapper2 from "../../Sound/ClickSoundWrapper2";
import Spninner from "../../Utils/Spninner";
import SingleCourse from "./singleCourse";

const Courses = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    }
  }, [controls, inView]);
  const { webUrl,  } = UseAuth();
  const router = useNavigate();

  const fetchedNewAddedClass = async () => {
    const res = await axios.get(`${webUrl}/newAddedClass`);
    return res?.data;
  };

  const {
    data: allClasses = [],
    isLoading,
    refetch,
  } = useQuery(["added_new_class"], fetchedNewAddedClass);

  if (isLoading) return <Spninner />;


  const filteredAprovedClasses = allClasses?.filter(
    (singleCard) => singleCard.status === "approved"
  );

  
  let topFourClasses = filteredAprovedClasses?.slice(0,4);

  

  return (
    <>
      <div className="container mx-auto my-20">
        <motion.div ref={ref} initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 1.5 }} className="bg-custom bg-opacity-40 py-24 flex items-center justify-center my-10">
          <div className="text-4xl font-semibold">
            <p className="uppercase text-gray-900">
              Popular<span className="bg-custom p-2 md:ml-3">Choices</span>
            </p>
          </div>
        </motion.div>
        <div className="space-y-10 my-20">
       { topFourClasses?.map(e=> (
         <SingleCourse e={e} key={e._id}/>
       ))}
        </div>
        <ClickSoundWrapper2>
        <div
          className="hover:bg-teal-400 bg-custom active:bg-teal-400 transition duration-500 w-fit mt-5 mx-auto px-5 py-4 text-base font-semibold text-white cursor-pointer hover:font-bold text-center"
          onClick={() => router("/classes")}
        >
          Discover
        </div>
        </ClickSoundWrapper2>
      </div>
    </>
  );
};

export default Courses;
