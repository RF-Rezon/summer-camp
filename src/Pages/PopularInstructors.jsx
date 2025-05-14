import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../Hooks/useAuth';
import ClickSoundWrapper2 from "../Sound/ClickSoundWrapper2";
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 gap-y-20 my-14 mb-24">
              {popularTeachers.map((singleInstructor) => (
                <div key={singleInstructor._id} className="bg-custom bg-opacity-60">
                  <div className="w-full shadow-lg px-4 pt-6 pb-5">
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
              
          </div>

               <ClickSoundWrapper2>
        <div
          className="bg-custom w-fit mt-5 mx-auto px-5 py-4 text-base font-semibold text-white cursor-pointer hover:font-bold text-center hover:scale-105 transition-all"
          onClick={() => router("/instructors")}
        >
          See all instructors
        </div>
        </ClickSoundWrapper2>
        </>
      );
};

export default PopularInstructors;