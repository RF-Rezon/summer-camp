import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Spninner from "../Utils/Spninner";

const fetchedInstructors = async()=> { 
    const res = await axios.get("http://localhost:3000/instructors");
   return res.data;
}
const Instructors = () => {
  const {
    data: totalInstructors,
    isLoading
  } = useQuery(["teachers"], fetchedInstructors);

  if (isLoading) return <Spninner />
  return (
    <>
      <div className="grid md:grid-cols-3  m-10">
          {totalInstructors.map((singleInstructor) => (
            <div key={singleInstructor._id} className="h-3/4 m-7">
              <div className="card glass w-96">
                <div className="card-body">
                  <h2 className="card-title">{singleInstructor.name}</h2>
                  <p>{singleInstructor.email}</p>
                </div>
                <figure className="h-72">
                  <img src={singleInstructor.image} alt="instructor" className="h-full w-full  object-cover" />
                </figure>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Instructors;