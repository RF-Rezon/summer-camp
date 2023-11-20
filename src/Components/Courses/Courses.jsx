import React from "react";
import SingleCourse from "./singleCourse";
import UseAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Spninner from "../../Utils/Spninner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClickSoundWrapper2 from "../../Sound/ClickSoundWrapper2";

const Courses = () => {
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
        <div className="bg-custom bg-opacity-40 py-24 flex items-center justify-center my-10">
          <div className="text-4xl font-semibold">
            <p className="uppercase text-gray-900">
              Popular<span className="bg-custom p-2 md:ml-3">Choices</span>
            </p>
          </div>
        </div>
        <div className="space-y-10 my-20">
       { topFourClasses?.map(e=> (
         <SingleCourse e={e} key={e._id}/>
       ))}
        </div>
        <ClickSoundWrapper2>
        <div
          className="bg-custom w-fit mt-5 mx-auto px-5 py-4 text-base font-semibold text-white cursor-pointer hover:font-bold text-center"
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
