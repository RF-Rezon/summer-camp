import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Spninner from "../../../Utils/Spninner";

const fetchedNewAddedClass = async () => {
  const res = await axios.get("http://localhost:3000/users");
  return res.data;
};

const ManageUsersByAdmin = () => {

  const makeAdminHandler = (singleUser) => {
    const userId = singleUser._id;
    axios.patch(`http://localhost:3000/newAddedClass/makeadmin/${userId}`).then((res) => {
      refetch();
    });
  };
  const makeInstructorHandler = (singleUser) => {
    const userId = singleUser._id;
    axios.patch(`http://localhost:3000/newAddedClass/makeinstructor/${userId}`).then((res) => {
      refetch();
    });
  };
  const { data: allRegisteredUsers, isLoading, refetch } = useQuery(["allRegisteredUsers"], fetchedNewAddedClass);

  // const funs = async () => {
  //   const generalUsers = await allRegisteredUsers.filter((user) => !user?.role);
  //   return generalUsers;
  // };

  // funs().then(res=> {
  //   console.log(res)
  // })


  if (isLoading) return <Spninner />;
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sm">
                <th> Name</th>
                <th> Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allRegisteredUsers.map((singleUser) => (
                <tr key={singleUser?._id} className="text-base font-semibold">
                  <td>{singleUser?.name}</td>
                  <td>{singleUser?.email}</td>
                  <td>{singleUser?.role}</td>

                  <th className="flex flex-col gap-4">
                    <button
                      onClick={() => makeAdminHandler(singleUser)}
                      className="btn btn-ghost btn-xs hover:bg-green-500"
                    >
                      Make Admin
                    </button>
                    <button
                      onClick={() => makeInstructorHandler(singleUser)}
                      className="btn btn-ghost btn-xs  hover:bg-purple-500"
                    >
                      Make Instructor
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersByAdmin;