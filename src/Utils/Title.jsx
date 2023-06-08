import React from "react";

const Title = ({heading, sHeading}) => {
  return (
    <div >
      <div className="text-center my-9">
        <p className="md:text-4xl text-2xl font-semibold text-zinc-900 pb-3">{heading}</p>
        <p className="md:text-lg text-base font-medium text-orange-500">{sHeading}</p>
      </div>
    </div>
  );
};

export default Title;
