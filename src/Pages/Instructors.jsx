import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Spninner from "../Utils/Spninner";
import UseAuth from "../Hooks/useAuth";
const token = localStorage.getItem("access-token");


const Instructors = () => {

  const {  webUrl } = UseAuth();

  const fetchedInstructors = async()=> { 
      const res = await axios.get(`${webUrl}/instructors`, 
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
      );
     return res.data;
  }

  const {
    data: totalInstructors = [],
    isLoading
  } = useQuery(["teachers"], fetchedInstructors);

  if (isLoading) return <Spninner />
  return (
    <>
    <div className="container mx-auto py-6 pb-20">
      <div className="bg-custom bg-opacity-40 py-24 flex items-center justify-center my-10">
            <div className="text-4xl font-semibold">
              <p>All <span className="bg-custom p-2 ml-1">Instructors</span></p>
            </div>
          </div>
        <div className="flex flex-wrap flex-col md:flex-row gap-32 items-center justify-between py-16">
            {totalInstructors.map((singleInstructor) => (
             <div key={singleInstructor._id} className="bg-custom bg-opacity-90">
             <div className="w-96 border-[3px] shadow-lg">
               <div className="card-body">
                 <h2 className="card-title text-2xl font-bold">{singleInstructor.name}</h2>
                 <p className="text-sm font-medium">{singleInstructor.email}</p>
               </div>
               <figure className="h-72">
                 <img src={singleInstructor.image} alt="instructor" className="h-full w-full  object-cover" />
               </figure>
             </div>
           </div>
            ))}
        </div>
    </div>
    </>
  );
};

export default Instructors;