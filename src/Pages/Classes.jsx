import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/useAuth";
import Spninner from "../Utils/Spninner";

const fetchedNewAddedClass = async () => {
  const res = await axios.get("http://localhost:3000/newAddedClass");
  return res.data;
};

const Classes = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();

  const handleTakingClass = (specificClass) => {
    //  const enrlS = (+specificClass?.enrolledStudents);
    //   console.log(enrlS)

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
        icon: "warning",
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
          axios.post("http://localhost:3000/classTakenStudents", obj).then((res) => {
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
  const { data: addedNewClasses, isLoading, refetch } = useQuery(["added_new_class"], fetchedNewAddedClass);

  if (isLoading) return <Spninner />;
  return (
    <div>
      <div className="grid md:grid-cols-2 m-10">
        {addedNewClasses.map((newSingleClass) => (
          <div key={newSingleClass._id} className="h-3/4 m-7 flex flex-col items-center justify-center">
            <div
              className={
                newSingleClass.av_seats > 1
                  ? "card glass md:card-side w-full m-5"
                  : "card md:card-side w-full bg-red-500 m-5"
              }
            >
              <div className="card-body">
                <span className="font-semibold text-2xl text-zinc-700">Class: </span>
                <h2 className="card-title">{newSingleClass.c_name}</h2>
                <span className="font-semibold text-2xl text-zinc-700">Instructor: </span>
                <p>{newSingleClass.name}</p>
                <span className="font-semibold text-2xl text-zinc-700">Instructor Email: </span>
                <p>{newSingleClass.email}</p>
                <span className="font-semibold text-2xl text-zinc-700">Available Seats: </span>
                <p>{newSingleClass.av_seats}</p>
                <span className="font-semibold text-2xl text-zinc-700">Price: </span>
                <p>{newSingleClass.price}</p>
              </div>
              <figure className="h-full">
                <img src={newSingleClass.photoURL} alt="instructor" className="h-full w-full object-cover" />
              </figure>
            </div>
            <button
              className={
                newSingleClass.av_seats > 1 ? "btn btn-outline btn-accent" : "btn-disabled btn btn-outline btn-accent"
              }
              onClick={() => handleTakingClass(newSingleClass)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
