import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "../Hooks/useAuth";
import Spninner from "../Utils/Spninner";

const Instructors = () => {
  const { webUrl } = UseAuth();

  const fetchedInstructors = async () => {
    const res = await axios.get(
      `${webUrl}/instructors`
    );
    return res.data;
  };

  const { data: totalInstructors = [], isLoading } = useQuery(
    ["teachers"],
    fetchedInstructors
  );

  if (isLoading) return <Spninner />;
  return (
    <>
      <div className="py-6 min-h-screen bg-white">
          <div className="md:mt-28 mt-48">
            <div className="bg-custom bg-opacity-40 py-24 flex items-center justify-center my-10">
              <div className="text-4xl font-semibold">
                <p className="text-gray-900">
                  All <span className="bg-custom p-2 ml-1">Instructors</span>
                </p>
              </div>
            </div>
            <div className="w-5/6 my-10 mb-14 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-7 gap-y-20 my-14 mb-24 mt-20">{totalInstructors?.map((singleInstructor) => (
                <div key={singleInstructor?._id} className="bg-custom bg-opacity-60">
                  <div className="w-full shadow-lg px-4 pt-6 pb-5">
                    <div className="pb-10">
                      <h2 className="card-title text-2xl font-bold text-gray-900">
                        {singleInstructor?.name}
                      </h2>
                      <p className="text-base font-medium pt-2">
                        {singleInstructor?.email}
                      </p>
                    </div>
                    <figure className="h-72">
                      <img
                        src={singleInstructor?.image}
                        alt="instructor"
                        className="h-full w-full  object-cover"
                      />
                    </figure>
                  </div>
                </div>
              ))}</div>
              
            </div>
                  </div>
          </div>
    </>
  );
};

export default Instructors;
