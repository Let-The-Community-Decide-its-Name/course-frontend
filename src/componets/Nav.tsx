import React from "react";

function Navbar() {
    return(
        <div className="flex items-center justify-between bg-black">
            <div>
                <img src="../assets/temp-logo.jpg" alt="temp-logo" />
            </div>
            <div>
                <ul className="flex text-white justify-end space-x-5 text-2xl">
                    <li>Home</li>
                    <li>Career</li>
                    <li>Join</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar