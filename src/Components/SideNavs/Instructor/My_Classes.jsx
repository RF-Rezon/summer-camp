import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import UseAuth from "../../../Hooks/useAuth";
import Spninner from "../../../Utils/Spninner";
import MyClassesBanner from "./MyClassesBanner";

const token = localStorage.getItem("access-token");

const My_Classes = () => {
  const { user, webUrl} = UseAuth();

  const { data: addedNewClasses = [], isLoading } = useQuery({
    queryKey: ["for_instructor"],
    queryFn: async () => {
      const res = await axios.get(`${webUrl}/newAddedClass/${user.email}`,
      );
      return res.data;
    },
  });

  if (isLoading) return <Spninner />;

  return (
    <div className="w-5/6 flex flex-col items-center h-screen space-y-10 min-h-screen mt-64 md:mt-0">
      {addedNewClasses.map((singleClass) => (
        <MyClassesBanner singleClass={singleClass} key={singleClass._id} />
      ))}
    </div>
  );
};

export default My_Classes;