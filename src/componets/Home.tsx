import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate, useLocation } from "react-router-dom";
import Content from "./Content";
import Faq from "./Faq";
import Footer from "./Footer";
import Course from "./Course";

function MyComponent() {
  return (
    <div>
      <MagnifyingGlassIcon className="h-9 w-9 text-white text-2xl cursor-pointer" />
    </div>
  );
}

function Home() {
  const navigation = useNavigate();
  const [isUnderlinedArts, setIsUnderlinedArts] = useState<boolean | null>(
    null
  );
  const location = useLocation();
  const streamsStyle = "hover:border-b-2 transition duration-200 ease-in-out";
  return (
    <section>
      <div className="mt-28 mb-24 mx-auto flex flex-col justify-center items-center">
        <div className="text-white">
          <div className="mb-7 text-4xl md:text-7xl">
            <p>PROJECT COURSE</p>
          </div>
          <div className="space-x-5 flex justify-center text-3xl md:text-4xl mb-3">
            <button
              className={`${streamsStyle} ${
                location.pathname === "/arts" ? "border-b-2" : ""
              }`}
              onClick={() => {
                console.log(location);
                navigation("/arts");
              }}
            >
              Art
            </button>

            <button
              className={`${streamsStyle} ${
                location.pathname === "/commerce" ? "border-b-2" : ""
              }`}
              onClick={() => {
                navigation("/commerce");
              }}
            >
              Commerce
            </button>

            <button
              className={`${streamsStyle} ${
                location.pathname === "/science" ? "border-b-2" : ""
              }`}
              onClick={() => navigation("/science")}
            >
              Science
            </button>
          </div>
        </div>

        <div className=" w-[20%]">
          <form className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Search Course"
              className="md:min-w-[500px] min-w-[300px] min-h-[50px] py-2 rounded-md px-2 mr-3 mt-3 border-black border-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
            <MyComponent />
          </form>
        </div>
      </div>
      <Course />
      <Content />
      <Faq />
      <Footer />
    </section>
  );
}

export default Home;
