import React from "react";
import Title from "../Utils/Title";
import HomeExtra from "./HomeExtra";
import PopularInstructors from "./PopularInstructors";

const Home = () => {
  return (
    <div className="">
      <div className="mx-auto max-h-full border-b-custom z-50">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full h-1/3">
            <img
              src="/1.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-1/3">
            <img
              src="/2.png"
              className="w-full h-full object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-pink-300">
        <div className="bg-green-300 py-16">
          <Title heading="Our" sHeading="Popular Instructors" />
        </div>
        <PopularInstructors />
      </div>
      <div className="bg-slate-800 container mx-auto">
        <div className="bg-orange-300 py-16">
          <Title heading="Some" sHeading="Students Reviews" />
        </div>
        <HomeExtra />
      </div>
    </div>
  );
};

export default Home;
