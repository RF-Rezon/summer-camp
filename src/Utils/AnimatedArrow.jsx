import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/arrow"; 

const AnimatedArrow = () => {
  
  return (
    <div>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default AnimatedArrow;