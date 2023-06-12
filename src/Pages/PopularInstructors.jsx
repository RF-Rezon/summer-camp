import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Spninner from '../Utils/Spninner';

const fetchedInstructors = async()=> { 
    const res = await axios.get("https://summerproject.vercel.app/instructors");
   return res.data;
}
const PopularInstructors = () => {
    const {
        data: totalInstructors = [],
        isLoading
      } = useQuery(["teachers"], fetchedInstructors);
    
      if (isLoading) return <Spninner />
      const popularTeachers =  totalInstructors.slice(0,6)
      return (
        <>
          <div className="grid md:grid-cols-3 mt-16">
              {popularTeachers.map((singleInstructor) => (
                <div key={singleInstructor._id} className="h-3/4 mb-10">
                  <div className="glass w-96">
                    <div className="card-body">
                      <h2 className="card-title text-gray-400">{singleInstructor.name}</h2>
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

export default PopularInstructors;