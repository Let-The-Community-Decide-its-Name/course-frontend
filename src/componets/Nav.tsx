import React from "react";
import temporarybackroundimage from "../assets/temp-logo.jpg"

function Navbar() {
    return(
        <div className="flex items-center justify-between bg-black px-10 py-3">
            <div>
                <img src={temporarybackroundimage} alt="Navbar-logo" className="h-12 w-12"/>
            </div>
            <div>
                <ul className="flex text-white justify-end items-center space-x-5 text-3xl">
                    <li>Home</li>
                    <li>Career</li>
                    <div className="bg-yellow-400 rounded-full px-8 pb-1 items-center text-black cursor-pointer hover:bg-yellow-600 transition duration-500">
                    <li>Join</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar