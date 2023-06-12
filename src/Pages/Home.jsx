import React from "react";
import PopularInstructors from "./PopularInstructors";

const Home = () => {
  return (
    <div>
      <div className="my-8">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/WKkdzxb/Black-White-Simple-Music-Channel-Youtube-Banner.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/hWmkLBb/Black-White-Simple-Music-Channel-Youtube-Banner-1.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/Jkmt4qB/Black-White-Simple-Music-Channel-Youtube-Banner-2.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/YDCT6vv/Black-White-Simple-Music-Channel-Youtube-Banner-3.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8"> 
        <PopularInstructors/>
      </div>
    </div>
  );
};

export default Home;