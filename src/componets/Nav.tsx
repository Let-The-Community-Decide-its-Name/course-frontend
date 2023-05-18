import React from "react";
import temporarybackroundimage from "../assets/temp-logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-3">
      <div>
        <img
          src={temporarybackroundimage}
          alt="Navbar-logo"
          className="h-12 w-12"
        />
      </div>
      <div>
        <ul className="flex text-white justify-end items-center space-x-5 text-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/career">Career</Link>
          </li>
          <div className="bg-yellow-400 rounded-full px-8 pb-1 items-center text-black cursor-pointer hover:bg-yellow-600 transition duration-500">
            <a
              href="https://github.com/Let-The-Community-Decide-its-Name"
              target="blank"
            >
              Join
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
