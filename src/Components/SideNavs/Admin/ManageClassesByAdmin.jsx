import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Spninner from "../../../Utils/Spninner";
import "./popupbtn.css";
import UseAuth from "../../../Hooks/useAuth";

const ManageClassesByAdmin = () => {
  const token = localStorage.getItem("access-token");
  const { webUrl } = UseAuth();

  const fetchedNewAddedClass = async () => {
    const res = await axios.get(
      `${webUrl}/newAddedClass`
    );
    return res.data;
  };

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const {
    data: allClasses,
    isLoading,
    refetch,
  } = useQuery(["allClasses"], fetchedNewAddedClass);

  const [disabledButtons, setDisabledButtons] = useState([]);

  if (isLoading) return <Spninner />;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(
        `${webUrl}/newAddedClass/feedBack/${selectedItemId}`,
        { feedBack: inputValue },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        refetch();
      });
    setSelectedItemId(null);
    setInputValue("");
  };

  const handleButtonClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const approveHandler = (singleClass) => {
    const userId = singleClass._id;
    axios
      .patch(
        `${webUrl}/newAddedClass/approve/${userId}`,
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        refetch();
        setDisabledButtons((prevDisabledButtons) => [
          ...prevDisabledButtons,
          userId,
        ]);
      });
  };

  const denyHandler = (singleClass) => {
    const userId = singleClass._id;
    axios
      .patch(
        `${webUrl}/newAddedClass/deny/${userId}`,
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        refetch();
        setDisabledButtons((prevDisabledButtons) => [
          ...prevDisabledButtons,
          userId,
        ]);
      });
  };

  return (
    <div className="mt-80 md:mt-0">
      <div className="dash_classes ">
        <div className="overflow-x-auto min-h-screen py-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sm">
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allClasses.map((singleClass) => (
                <tr key={singleClass._id} className="text-base font-semibold">
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleClass.photoURL} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{singleClass.c_name}</td>
                  <td>{singleClass.name}</td>
                  <td>{singleClass.email}</td>
                  <td>{singleClass.av_seats}</td>
                  <td>{singleClass.price}</td>
                  <td>
                    {singleClass.status === "approved" ? (
                      <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-green-600">
                        Approved
                      </span>
                    ) : singleClass.status === "denied" ? (
                      <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-red-600">
                        Denied
                      </span>
                    ) : (
                      <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-yellow-600">
                        Pending
                      </span>
                    )}
                  </td>
                  <th className="flex flex-col gap-4">
                    <button
                      onClick={() => approveHandler(singleClass)}
                      disabled={disabledButtons.includes(singleClass._id)}
                      className="btn btn-ghost btn-xs hover:bg-green-500 hover:text-black"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => denyHandler(singleClass)}
                      disabled={disabledButtons.includes(singleClass._id)}
                      className="btn btn-ghost btn-xs  hover:bg-red-500 hover:text-black"
                    >
                      Deny
                    </button>
                    <button
                      className="btn btn-ghost btn-xs  hover:bg-blue-500 hover:text-black"
                      onClick={() => handleButtonClick(singleClass._id)}
                    >
                      Feed Back
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedItemId !== null && (
            <div className="popup">
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col space-y-6"
              >
                <textarea
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter your text"
                />
                <button
                  className="btn btn-ghost btn-xs w-3/5 mx-auto hover:bg-purple-500"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageClassesByAdmin;
