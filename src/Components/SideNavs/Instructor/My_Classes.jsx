import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import UseAuth from "../../../Hooks/useAuth";
import Spninner from "../../../Utils/Spninner";
import MyClassesBanner from "./MyClassesBanner";

const token = localStorage.getItem("access-token");

const My_Classes = () => {
   const [userCount, setUserCount] = useState([]);
  const { user} = UseAuth();

  const { data: addedNewClasses = [], isLoading } = useQuery({
    queryKey: ["for_instructor"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/newAddedClass/${user.email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  if (isLoading) return <Spninner />;

  axios.get("http://localhost:3000/classTakenStudents",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(res=> {
    setUserCount(res.data);
  })
  return (
    <div className="w-5/6 flex flex-col items-center h-screen">
      {addedNewClasses.map((singleClass) => (
        <MyClassesBanner userCount={userCount} singleClass={singleClass} key={singleClass._id} />
      ))}
    </div>
  );
};

export default My_Classes;