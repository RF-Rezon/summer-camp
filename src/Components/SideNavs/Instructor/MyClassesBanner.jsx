import React from "react";

const MyClassesBanner = ({ singleClass }) => {
  const { av_seats, c_name, price, status,  feedBack, description, photoURL} = singleClass;
  return (
    <div className="w-5/6 border-2 border-custom my-10">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm">
        <div className="bg-white p-10 basis-3/4">
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            Available seats:
            <span className="ml-1 font-medium text-gray-900 pl-2">{av_seats}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            Class Name:
            <span className="ml-1 font-medium text-gray-900 pl-2">{c_name}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            Price:
            <span className="ml-1 font-medium text-gray-900 pl-2">{price}</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">
            Total Enrolled Students:
            <span className="ml-1 font-medium text-gray-900 pl-2">0</span>
          </h3>
          <h3 className="mt-0.5 text-lg font-semibold text-gray-900">Status: {status}</h3>
          <p className="text-lg font-medium text-gray-900 py-3 pt-5">
          {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1 py-5">
            {status === "approved" ? (
              <span className="whitespace-nowrap rounded-full text-white px-3 py-2 text-sm font-medium bg-green-600">
                Approved
              </span>
            ) : status === "denied" ? (
              <span className="whitespace-nowrap rounded-full text-white px-3 py-2 text-sm font-medium bg-red-600">Denied</span>
            ) : (
              <span className="whitespace-nowrap rounded-full text-white px-3 py-2 text-sm font-medium bg-yellow-600">
                Pending
              </span>
            )}
          </div>
          {/* Feed back can be good or bad */}
         {feedBack && <div className="my-5 bg-slate-100 break-words max-h-52 rounded-md">
            <p className="text-base text-black  font-medium p-5">{feedBack}</p>
          </div>}
        </div>
        <div className="flex-1">
          <img src={photoURL} className="object-cover h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default MyClassesBanner;