import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Spninner from "../../../Utils/Spninner";
import "./popupbtn.css";

const token = localStorage.getItem("access-token");

const fetchedNewAddedClass = async () => {
  const res = await axios.get("http://localhost:3000/newAddedClass",
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

const ManageClassesByAdmin = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const { data: allClasses, isLoading, refetch } = useQuery(["allClasses"], fetchedNewAddedClass);

  const [disabledButtons, setDisabledButtons] = useState([]);

  if (isLoading) return <Spninner />;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/newAddedClass/feedBack/${selectedItemId}` , {feedBack: inputValue},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    } ).then((res) => {
      refetch();
      console.log(res.data)
    });
    setSelectedItemId(null);
    setInputValue("");
    console.log(selectedItemId)
  };

  const handleButtonClick = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const approveHandler = (singleClass) => {
    const userId = singleClass._id;
    axios.patch(`http://localhost:3000/newAddedClass/approve/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      refetch();
      setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, userId]);
    });
  };

  const denyHandler = (singleClass) => {
    const userId = singleClass._id;
    axios.patch(`http://localhost:3000/newAddedClass/deny/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      refetch();
      setDisabledButtons((prevDisabledButtons) => [...prevDisabledButtons, userId]);
    });
  };

  return (
    <div>
      <div className="overflow-x-auto h-screen">
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
                    className="btn btn-ghost btn-xs hover:bg-green-500"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => denyHandler(singleClass)}
                    disabled={disabledButtons.includes(singleClass._id)}
                    className="btn btn-ghost btn-xs  hover:bg-red-500"
                  >
                    Deny
                  </button>
                  {/* <div>
                    <button className="btn btn-ghost btn-xs  hover:bg-purple-500" onClick={handleButtonClick}>FeedBack</button>
                    {showPopup && (
                      <div className="popup">
                        <form onSubmit={()=>handleFormSubmit(singleClass)} className="flex flex-col space-y-6">
                          <textarea value={inputValue} onChange={handleInputChange} placeholder="Enter your text" />
                          <button className="btn btn-ghost btn-xs w-3/5 mx-auto hover:bg-purple-500" type="submit">Submit</button>
                        </form>
                      </div>
                    )}
                  </div> */}
                  <button onClick={() => handleButtonClick(singleClass._id)}>Open Popup</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedItemId !== null && (
          <div className="popup">
            <form onSubmit={handleFormSubmit} className="flex flex-col space-y-6">
              <textarea value={inputValue} onChange={handleInputChange} placeholder="Enter your text" />
              <button className="btn btn-ghost btn-xs w-3/5 mx-auto hover:bg-purple-500" type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageClassesByAdmin;
