import React from "react";
import { Puff } from "react-loader-spinner";

const Spninner = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-40">
        <Puff
          height="100"
          width="100"
          radius={1}
          color="#000"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Spninner;
