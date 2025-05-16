import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/useAuth";
const token = localStorage.getItem("access-token");

const User_Selected_Class = () => {
  const {user, webUrl} = UseAuth();
    const navigate = useNavigate();

  const { data: singleCardData = [], isLoading, refetch } = useQuery({
    queryKey: ["takenSingleCourse"],
    queryFn: async () => {
      const res = await axios.get(`${webUrl}/classTakenStudents/${user.email}`,
      );
      return res.data;
    }
  });

  const deleteHandler = (singleCourse) => {
    const id = singleCourse._id;
    axios.delete(`${webUrl}/classTakenStudents/delete/${id}`,
    )
    .then(res=>{
        Swal.fire({
            icon: "success",
            title: "You deleted this class"
          }),
          refetch();
    })
  };
  const payHandler = () => {
    Swal.fire({
      title: "You want pay!",
      text: `Thanks for that! No money. I will teach you for free. Take love😊💖`,
      icon: "success"
    })
  };

  return (
    <div className="mt-96 md:mt-10" >
      <div className="dash_classes">
        <div className="overflow-x-auto min-h-screen">
          <table className="custom-table">
            {/* head */}
            <thead>
              <tr className="text-sm">
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {singleCardData?.map((singleClass) => (
                <tr key={singleClass._id} className="text-base font-semibold">
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleClass.classPhoto} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{singleClass.className}</td>
                  <td>{singleClass.instructorName}</td>
                  <td>{singleClass.instructorEmail}</td>
                  <td>{singleClass.availableSeat}</td>
                  <td>{singleClass.price}</td>
                  <th className="flex flex-col gap-4">
                    <button
                      onClick={() => deleteHandler(singleClass)}
                      className="btn btn-ghost btn-xs hover:bg-red-500"
                    >
                      Delete
                    </button>
                    <button onClick={payHandler} className="btn btn-ghost btn-xs  hover:bg-yellow-500">
                      Pay
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

export default User_Selected_Class;