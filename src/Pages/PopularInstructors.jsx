import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../Hooks/useAuth';
import Spninner from '../Utils/Spninner';


const PopularInstructors = () => {

  const router = useNavigate();
  
  const {  webUrl } = UseAuth();

  const fetchedInstructors = async()=> { 
      const res = await axios.get(`${webUrl}/instructors`);
     return res.data;
  }
    const {
        data: totalInstructors = [],
        isLoading
      } = useQuery(["teachers"], fetchedInstructors);
    
      if (isLoading) return <Spninner />
      const popularTeachers =  totalInstructors.slice(0,6)
      return (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-20 place-items-center py-16">
          {/* flex flex-wrap flex-col md:flex-row gap-32 items-center justify-between */}
              {popularTeachers.map((singleInstructor) => (
                <div key={singleInstructor._id} className="bg-custom bg-opacity-60 w-11/12">
                  <div className="shadow-lg p-6">
                    <div className="pb-10">
                      <h2 className="card-title text-2xl font-bold text-gray-900">{singleInstructor.name}</h2>
                      <p className="text-base font-medium pt-2">{singleInstructor.email}</p>
                    </div>
                    <figure className="h-72">
                      <img src={singleInstructor.image} alt="instructor" className="h-full w-full  object-cover" />
                    </figure>
                  </div>
                </div>
              ))}
              <div>
              </div>
          </div>
              <div className='w-full'>
                <div
                      className="hover:bg-teal-400 bg-custom active:bg-teal-400 transition duration-500 w-[200px] mt-14 mx-auto px-5 py-4 text-base font-semibold text-white cursor-pointer hover:font-bold text-center"
                      onClick={()=> router("/instructors")}
                    >
                      See all instructors
                    </div>
              </div>
        </>
      );
};

export default PopularInstructors;