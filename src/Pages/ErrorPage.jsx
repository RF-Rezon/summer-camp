import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col h-screen bg-white">
        <img
          src="https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?b=1&s=612x612&w=0&k=20&c=BON5S0uDJeCe66N9klUEw5xKSGVnFhcL8stPLczQd_8="
          alt=""
          className="object-cover w-full h-64"
        />

        <div className="flex items-center justify-center flex-1">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">We can't find that page.</h1>

            <p className="mt-4 text-gray-500">Try searching again, or return home to start from the beginning.</p>

            <a
              href="#"
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
            >
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
