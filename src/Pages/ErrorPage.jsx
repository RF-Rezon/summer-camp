import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col h-screen bg-zinc-900">
        <img
          src="https://i.ibb.co/f9mVVFy/5ddb9f0f3e748d667f8829a1547252b1.png"
          alt=""
          className="object-cover w-full h-1/2"
        />

        <div className="flex items-center justify-center flex-1">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">We can't find that page.</h1>

            <p className="mt-4 text-gray-500">Try searching again, or return home to start from the beginning.</p>

            <a
              href="/"
              className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-teal-600 rounded hover:bg-teal-700 focus:outline-none focus:ring"
            >
              Go Back Home Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
