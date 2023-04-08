import React, { useState } from "react";
import backgroundImage from "../assets/home-img.jpg"; 
import { MagnifyingGlassIcon  } from '@heroicons/react/24/solid'
import { useNavigate } from "react-router-dom";
import Content from "./Content";

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
    return(
        <section>
        <div className="bg-center bg-cover h-screen mx-auto flex flex-col justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="text-white">
                <div className="mb-7 text-6xl">
                <p>Project Course</p>
                </div>
                <div className="space-x-5 flex justify-center text-3xl mb-3">

                <button className="hover:border-b-2 transition duration-200 ease-in-out" onClick={()=> {
                    navigation("/arts")
                }}>Art
                </button>

                <button className="hover:border-b-2 transition duration-200 ease-in-out" onClick={()=> {
                    navigation("/commerce")
                }}>Commerce
                </button>

                <button className="hover:border-b-2 transition duration-200 ease-in-out" onClick={()=> navigation("/science")}>Science</button>         
                </div>

            </div>

            <div className=" w-[20%]">
            <form action="" className="flex justify-center items-center">
                <input type="text" placeholder="Search Course" className="min-w-[300px] py-2 rounded-full px-2 mr-3"/>
            <MyComponent />

            </form>
            </div>
        </div>
        <Content />
        </section>
    )
}

export default Home