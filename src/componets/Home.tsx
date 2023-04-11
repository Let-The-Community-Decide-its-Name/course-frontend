import React, { useState } from "react";
import backgroundImage from "../assets/home-img.jpg"; 
import { MagnifyingGlassIcon  } from '@heroicons/react/24/solid'
import { useNavigate, useLocation } from "react-router-dom";
import Content from "./Content";
import Faq from "./Faq";
import Footer from "./Footer";


function MyComponent() {
    return (
      <div>
        <MagnifyingGlassIcon  className="h-6 w-6 text-white text-2xl cursor-pointer" />
      </div>
    )
  }

function Home() {
    const navigation = useNavigate();
    const [isUnderlinedArts, setIsUnderlinedArts] = useState<boolean | null>(null);
    const location = useLocation();
    const streamsStyle = "hover:border-b-2 transition duration-200 ease-in-out";
    return(
        <section>
        <div className="bg-center bg-cover h-screen mx-auto flex flex-col justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="text-white">
                <div className="mb-7 text-4xl md:text-7xl">
                <p>Project Course</p>
                </div>
                <div className="space-x-5 flex justify-center text-3xl md:text-4xl mb-3">

                <button className={`${streamsStyle} ${location.pathname === "/arts"? "border-b-2": ""}`} onClick={()=> {
                    console.log(location)
                    navigation("/arts")
                }}>Art
                </button>

                <button className={`${streamsStyle} ${location.pathname === "/commerce"? "border-b-2": ""}`} onClick={()=> {
                    navigation("/commerce")
                }}>Commerce
                </button>

                <button className={`${streamsStyle} ${location.pathname === "/science"? "border-b-2": ""}`} onClick={()=> navigation("/science")}>Science</button>         
                </div>

            </div>

            <div className=" w-[20%]">
            <form action="" className="flex justify-center items-center">
                <input type="text" placeholder="Search Course" className="min-w-[300px] py-2 rounded-full px-2 mr-3 mt-3"/>
            <MyComponent />

            </form>
            </div>
        </div>
        <Content />
        <Faq />
        <Footer />
        </section>
    )
}

export default Home