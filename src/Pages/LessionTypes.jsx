import React from "react";
import { LuClipboardCheck, LuHeartHandshake, LuPlayCircle, LuRadio, LuTouchpad } from "react-icons/lu";
 
let strokeColor = "#14b8a6" ;
const LessionTypes = () => {
  return (
    <>
      <div className="container mx-auto pb-10 dash_classes">
        <div>
          <div className="pb-6">
          <div className="py-8 flex items-center justify-end my-10 bg-custom bg-opacity-40 w-1/2 border-l-[5px] border-l-custom">
          <div className="text-4xl font-semibold space-y-5 text-end pr-5">
              <p className="text-gray-800 text-[50px] font-semibold uppercase">Ways</p>
              <p className="text-gray-800 uppercase">How you will <span className="bg-custom p-2 ml-1 uppercase">Learn</span></p>
            </div>
          </div>
            <p className="text-lg font-medium text-center mx-auto py-6 pt-12 my-14">
              Avoid sticking to only one kind of instruction. Make use of the
              available choices. Soundscape was created with a clear strategy in
              mind. And diversifying it was the primary goal of this.
            </p>
            <div className="uppercase grid grid-cols-1 md:grid-cols-5 gap-10 py-10">
              <div id="1st" className="flex flex-col items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
                <LuPlayCircle className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">4k Video</p>
              </div>
             
              <div id="" className="flex flex-col items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
              <LuRadio className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">Live Class</p>
              </div>
              <div id="2nd" className="flex flex-col items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
              <LuTouchpad className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">Slides</p>
              </div>
              <div id="2nd" className="flex flex-col items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
              <LuClipboardCheck className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">Daily Exam</p>
              </div>
              <div id="2nd" className="flex flex-col items-center gap-4 bg-custom bg-opacity-20 p-6 py-10 border-b-[3px] border-b-custom">
              <LuHeartHandshake className="h-16 w-16" fill="transparent" stroke={strokeColor}/>

                <p className="text-base font-medium">24/7 Support</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessionTypes;
