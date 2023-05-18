import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="p-0  bottom-0 md:static">
      <div className="bottom-0 text-gray-300 relative w-[100%]">
        <center className="flex justify-center">
          <div className="bg-[#2A2AB4] text-4xl font-bold rounded-xl justify-center h-[300px] py-[90px] absolute bottom-52 md:bottom-20 w-[90%] z-10">
            <h1>Get Career Advice With</h1>
            <h1>Zero Investment</h1>
            <button className="text-sm font-medium bg-black px-5 py-2 rounded-md mb-3 mt-5">
              <Link to="/career">Get Advice</Link>
            </button>
            <h1 className="text-sm font-normal text-black">Absolutely Free!</h1>
          </div>
        </center>

        <div className="bg-[#747A8B] pt-64 relative z-11 mt-14">
          <p className="flex justify-center">
            Copyright © Free Course 2023. All Rights Reserved Community
          </p>
          {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
          {/* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            placeat reprehenderit libero commodi pariatur voluptatum. Excepturi
            et dolore quam eos id sunt voluptatibus, porro consequatur
            praesentium architecto ipsum temporibus ratione!
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
