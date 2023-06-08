import React from "react";
import { RotatingTriangles } from "react-loader-spinner";

const Spninner = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          ariaLabel="rotating-triangels-loading"
          wrapperStyle={{}}
          wrapperClass="rotating-triangels-wrapper"
        />
      </div>
    </div>
  );
};

export default Spninner;
