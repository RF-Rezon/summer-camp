import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "../../../Hooks/useAuth";
import Spninner from "../../../Utils/Spninner";

const ManageUsersByAdmin = () => {

  const { webUrl, user } = UseAuth();
  const token = localStorage.getItem("access-token");

  const fetchedNewAddedClass = async () => {
    const res = await axios.get(
      `${webUrl}/users`

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

  if (isLoading) return <Spninner />;
  return (
    <div className="mt-80 md:mt-0">
      <div className="dash_classes ">
        <div>
          <div className="overflow-x-auto min-h-screen py-8">
            <table className="custom-table">
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
    </div>
  );
};

export default ManageUsersByAdmin;
