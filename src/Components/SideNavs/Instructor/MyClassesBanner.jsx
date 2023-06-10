import React from "react";

const MyClassesBanner = ({ singleClass, userCount }) => {
  const { av_seats, c_name, price, status } = singleClass;
  return (
    <div className="w-5/6 m-6">
      <div className="w-full rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm">
        <div className="rounded-[10px] bg-white p-10">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Available seats:
            <span className="ml-1">{av_seats}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Class Name:
            <span className="ml-1">{c_name}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Price:
            <span className="ml-1">{price}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Total Enrolled Students:
            <span className="ml-1">{userCount.length}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">Status: {status}</h3>

          <div className="mt-4 flex flex-wrap gap-1">
            {status === "approved" ? (
              <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-green-600">
                Approved
              </span>
            ) : status === "denied" ? (
              <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-red-600">Denied</span>
            ) : (
              <span className="whitespace-nowrap rounded-full text-white px-2.5 py-0.5 text-xs bg-yellow-600">
                Pending
              </span>
            )}
          </div>
          {/* Feed back can be good or bad */}
          <div className="my-5 bg-slate-100 break-words max-h-52 rounded-md">
            <p className="text-base text-black  font-medium p-5">FEEDBACK</p>
          </div>
          <button className="btn btn-neutral">Update</button>
        </div>
      </div>
    </div>
  );
};

export default MyClassesBanner;
