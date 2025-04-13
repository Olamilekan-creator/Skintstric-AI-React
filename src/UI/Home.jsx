import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Home () {
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);
    return (
        <section id="landing">
            <div className="border-2 border-solid bg-white-100 border-black-500 border-2 w-[100%] h-[100vh] overflow-hidden">
                    <nav className="w-full">
                    <div className="flex justify-between items-center py-4 p-2">
                        <div className="flex flex-row items-center gap-5">
                        <Link to="/" className="text-l font-bold text-black">SKINSTRIC </Link>
                       <h4 className="text-sm text-gray-50o">[ INTRO ]</h4>
                        </div>
                        <button className="bg-black text-white py-1 px-4 text-sm">ENTER CODE</button>
                    </div>
                    </nav>

{/* Arrows section */}
<div className=" flex justify-between items-center">
<div className="relative transform rotate-45">
<div className={`absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[500px] h-[500px] ${isHoveredLeft ? 'translate-x-2 transition-transform duration-300' : ''}`}>
<div className={`absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[470px] h-[470px] ${isHoveredLeft ? 'translate-x-2 transition-transform duration-300' : ''}`}>
<div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[440px] h-[440px]">
    <div className="flex flex-col justify-center items-flex-start -mt-[19%] -mr-[30%]">
<div className="absolute flex justify-center transform rotate-90 items-center border-solid bg-white-100 border-gray-500 border-2 w-[50px] h-[50px]"
 onMouseEnter={() => setIsHoveredRight(true)}
 onMouseLeave={() => setIsHoveredRight(false)}
>
    <div className="absolute flex justify-center transform rotate-90 items-center border-dotted bg-white-100 border-gray-500 border-2 w-[40px] h-[40px]">
<FontAwesomeIcon icon={faCaretRight} className="text-xl transform -rotate-45" />
    </div>
</div>
<h3 className="text-l transform -rotate-45">DISCOVER A.I.</h3>
</div>
</div>
</div>
</div>
</div>

<h1
  className={`text-8xl font-normal text-black text-center transition-transform duration-500 ease-in-out ${
    isHoveredLeft ? 'translate-x-[-100%]' : isHoveredRight ? 'translate-x-4' : ''
  }`}
>
  Sophisticated <br />
  <span className="block">skincare</span>
</h1>

<div className="relative transform rotate-45">
<div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[500px] h-[500px]">
<div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[470px] h-[470px]">
<div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[440px] h-[440px]">
    <div className="flex flex-col ">
    <h3 className="text-l transform -rotate-45">TAKE TEST</h3>
<div className="absolute flex justify-center items-center border-solid bg-white-100 border-gray-500 border-2 w-[50px] h-[50px]">
    <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[40px] h-[40px]">
<FontAwesomeIcon icon={faCaretRight} className="text-xl transform -rotate-45" />
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
  
                </div>
        </section>
    );
}
export default Home;