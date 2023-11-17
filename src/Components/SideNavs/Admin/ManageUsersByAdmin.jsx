import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Spninner from "../../../Utils/Spninner";
import UseAuth from "../../../Hooks/useAuth";

const ManageUsersByAdmin = () => {
  // const [CurrentUserRole, setCurrentUserRole] = useState("");
  // const [SingleUser, setSingleUser] = useState(null);
  const { webUrl, user } = UseAuth();
  const token = localStorage.getItem("access-token");

  const fetchedNewAddedClass = async () => {
    const res = await axios.get(
      `${webUrl}/users`
      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // }
    );
    return res.data;
  };

  const makeAdminHandler = (singleUser) => {
    const userId = singleUser._id;
    axios
      .patch(`${webUrl}/newAddedClass/makeadmin/${userId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        refetch();
      });
  };
  const makeInstructorHandler = (singleUser) => {
    const userId = singleUser._id;
    axios
      .patch(`${webUrl}/newAddedClass/makeinstructor/${userId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        refetch();
      });
  };
  const {
    data: allRegisteredUsers,
    isLoading,
    refetch,
  } = useQuery(["allRegisteredUsers"], fetchedNewAddedClass);

  // useEffect(() => {
  //   allRegisteredUsers.map((single) => setSingleUser(single));

  //   if (SingleUser?.email == user?.email) {
  //     axios
  //       .get(`${webUrl}/users/${user?.email}`)
  //       .then((response) => {
  //         setCurrentUserRole(response?.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user role:", error);
  //       });
  //   } else {
  //     return;
  //   }
  // }, [allRegisteredUsers, user, webUrl]);

  // console.log(CurrentUserRole);

  // const funs = async () => {
  //   const generalUsers = await allRegisteredUsers.filter((user) => !user?.role);
  //   return generalUsers;
  // };

  // funs().then(res=> {
  // })

  if (isLoading) return <Spninner />;
  return (
    <div>
      <div>
        <div className="overflow-x-auto h-screen">
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
                      className="btn btn-ghost btn-xs hover:bg-green-500 hover:text-black"
                    >
                      Make Admin
                    </button>
                    <button
                      onClick={() => makeInstructorHandler(singleUser)}
                      className="btn btn-ghost btn-xs  hover:bg-purple-500 hover:text-black"
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
