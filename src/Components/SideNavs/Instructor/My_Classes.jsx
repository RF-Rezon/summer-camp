import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import UseAuth from "../../../Hooks/useAuth";
import Spninner from "../../../Utils/Spninner";
import MyClassesBanner from "./MyClassesBanner";

const My_Classes = () => {
  const { user, loading } = UseAuth();

  const { data: addedNewClasses, isLoading } = useQuery({
    queryKey: ["for_instructor"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/newAddedClass/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Spninner />;
  return (
    <div className="w-5/6 flex flex-col items-center">
      {addedNewClasses.map((singleClass) => (
        <MyClassesBanner singleClass={singleClass} key={singleClass._id} />
      ))}
    </div>
  );
};

export default My_Classes;
