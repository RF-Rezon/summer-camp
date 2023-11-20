import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/useAuth";
import Spninner from "../Utils/Spninner";
import ClickSoundWrapper2 from "../Sound/ClickSoundWrapper2";

const Classes = () => {
  const { user, webUrl} = UseAuth();
  const navigate = useNavigate();


  const fetchedNewAddedClass = async () => {
    const res = await axios.get(`${webUrl}/newAddedClass`);
    return res?.data;
  };

  const handleTakingClass = (specificClass) => {
   
    const obj = {
      email: user?.email,
      name: user?.displayName,
      className: specificClass?.c_name,
      instructorName: specificClass?.name,
      instructorEmail: specificClass?.email,
      availableSeat: specificClass?.av_seats,
      price: specificClass?.price,
      classPhoto: specificClass?.photoURL,
    };
    if (!user) {
      Swal.fire({
        title: "NO LOGGED IN!",
        text: `You have to log in first.`,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login page",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    } else {
      Swal.fire({
        title: `Hello! ${user.displayName}`,
        text: "Do you want to take this class?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post(`${webUrl}/classTakenStudents`, obj).then((res) => {
            Swal.fire({
              icon: "success",
              title: "You added this class",
              text: "Check Dashboard!",
            });
          });
        }
      });
    }
  };

  const {
    data: addedNewClasses = [],
    isLoading,
    refetch,
  } = useQuery(["added_new_class"], fetchedNewAddedClass);

  const filteredAprovedClasses = addedNewClasses.filter(
    (singleCard) => singleCard.status === "approved"
  );

  if (isLoading) return <Spninner />;
  return (
    <div>
     
      <div className="md:mt-28 mt-52">
        <div className="w-full flex flex-col items-center space-y-10 min-h-screen my-24">
          {filteredAprovedClasses?.map((newSingleClass) => (
            <div key={newSingleClass._id} className="w-5/6 my-10 mb-14">
              <div className="flex flex-col md:flex-row items-center justify-between w-full p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm border-custom border-2  mb-5">
                <div className="bg-white p-10 basis-3/4">
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    Class Name:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {newSingleClass.c_name}
                    </span>
                  </h3>
                  <p className="text-lg font-medium text-gray-900 py-3 pt-5">
                    {newSingleClass.description}
                  </p>
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    Instructor:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {newSingleClass.name}
                    </span>
                  </h3>
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    Instructor Email:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {newSingleClass.email}
                    </span>
                  </h3>
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    Available seats:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {500 - newSingleClass.av_seats}
                    </span>
                  </h3>
                  <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
                    Price:
                    <span className="ml-1 font-medium text-gray-900 pl-2">
                      {newSingleClass.price}
                    </span>
                  </h3>
                  <ClickSoundWrapper2>
                  <button
                    className={
                      newSingleClass.av_seats > 1
                        ? "bg-teal-700 px-5 py-2.5 text-base font-medium shadow cursor-pointer mt-10"
                        : "btn-disabled bg-teal-700 px-5 py-2.5 text-base font-medium shadow cursor-pointer mt-10"
                    }
                    onClick={() => handleTakingClass(newSingleClass)}
                  >
                    Select
                  </button>
                  </ClickSoundWrapper2>
                </div>
                <div className="flex-1">
                  <img
                    src={newSingleClass.photoURL}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
