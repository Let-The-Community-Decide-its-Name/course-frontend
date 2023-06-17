import React from "react";

function Course() {
  return (
    <div className="ml-10 mr-10 mb-10">
      <div className="text-white text-[45px] font-light mb-4">
        Popular courses
      </div>
      <div className="bg-[#D9D9D9] flex px-5 py-5">
        <div className="mr-5">
          <div className="bg-white h-36 w-36">
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <div className="text-[28px] bg-white md:min-w-[1230px] h-16 px-5 py-2 mb-4">
            Course Title
          </div>
          <div className="text-[18px] bg-white md:min-w-[1230px] h-16 px-5 py-2">
            Course Description
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
