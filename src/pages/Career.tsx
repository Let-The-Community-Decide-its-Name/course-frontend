import React from "react";
// import "../index.css"

type Props = {};

function Career({}: Props) {
  return (
    <div className="bg-[#5C5CCB] h-screen">
      <div className="flex items-center justify-center mt-44">
        <div>
          <h1 className="font-semibold text-white text-6xl">
            Your Career Companion with
          </h1>
          <h1 className="font-semibold text-[#E4E41B] text-5xl mt-4 flex items-center justify-center">
            Powered by GPT-4
          </h1>
          <p className="text-base text-white mt-4 flex items-center justify-center">
            Simplify your career with our application, an open-source career
            recommender
          </p>
          <p className="text-base text-white m-px flex items-center justify-center">
            that powered by OpenAI to make your career decision simplified.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-2">
        <form action="">
          <input
            type="text"
            className="md:min-w-[370px] min-w-[270px] min-h-[40px] mr-2 rounded-md p-2 mt-8"
            placeholder="Enter Your Query"
          />
          <input type="submit" className="bg-orange-700 hover:bg-orange-600 cursor-pointer md:min-w-[70px] min-w-[70px] min-h-[40px] text-white rounded-md" />
        </form>
      </div>
    </div>
  );
}

export default Career;
