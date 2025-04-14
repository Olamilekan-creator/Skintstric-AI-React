import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  return (
    <section>
      <div className="border-2 border-solid bg-white-100 border-black-500 border-2 w-[100%] h-[100vh] overflow-hidden">
        <nav className="w-full">
          <div className="flex justify-between items-center py-4 p-2">
            <div className="flex flex-row items-center gap-5">
              <Link to="/" className="text-l font-bold text-black">
                SKINSTRIC{" "}
              </Link>
              <h4 className="text-sm text-gray-50o">[ INTRO ]</h4>
            </div>
            <button className="bg-black text-white py-1 px-4 text-sm">
              ENTER CODE
            </button>
          </div>
        </nav>

        {/* Arrows section */}
        <div className=" flex justify-between items-center">
          <div className={`relative transform rotate-45 transition-all duration-500 ease-in-out ${isHoveredLeft ? "opacity-0 scale-0 pointer-events-auto" : "opacity-100 scale-100 pointer-events-auto"}`}>
            <div
              className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[500px] h-[500px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div
                className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[470px] h-[470px] transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-500"
              >
                <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[440px] h-[440px]">
                  <div className="flex flex-col justify-center items-flex-start -mt-[19%] -mr-[30%]">
                    <div
                      className={`absolute flex justify-center transform rotate-90 items-center border-solid bg-white-100 border-gray-500 border-2 w-[35px] h-[35px] transition-transform duration-300 ease-out hover:scale-150 pointer-events-auto`}
                      onMouseEnter={() => setIsHoveredRight(true)}
                      onMouseLeave={() => setIsHoveredRight(false)}
                    >
                      <div className="absolute flex justify-center transform rotate-90 items-center border-dotted bg-white-100 border-gray-500 border-2 w-[35px] h-[35px] pointer-events-none">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="text-xl transform -rotate-45"
                        />
                      </div>
                    </div>
                    <h3 className="text-l transform -rotate-45">
                      DISCOVER A.I.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transform rotate-45 transition-all duration-500 ease-in-out ${isHoveredRight ? "opacity-0 scale-0 pointer-events-auto" : "opacity-100 scale-100 pointer-events-auto"}`}>
            <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[500px] h-[500px]">
              <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[470px] h-[470px]">
                <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[440px] h-[440px]">
                  <div className="flex flex-col ">
                    <h3 className="text-l transform -rotate-45">TAKE TEST</h3>
                    <Link to="/introduce" className={`absolute flex justify-center items-center border-solid bg-white border-gray-500 border-2 w-[35px] h-[35px] transition-transform duration-300 ease-out hover:scale-150 pointer-events-auto`}
                                          onMouseEnter={() => setIsHoveredLeft(true)}
                                          onMouseLeave={() => setIsHoveredLeft(false)}
                    >
                      <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[35px] h-[35px]">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="text-xl transform -rotate-45"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1
          className={`text-8xl pt-40 font-normal text-black text-center transition-transform duration-500 ease-in-out ${
            isHoveredLeft
              ? "translate-x-[-32%]"
              : isHoveredRight
              ? "translate-x-[32%]"
              : "translate-x-0"
          }`}
        >
          Sophisticated <br />
          <span className={`inline-block transition-transform duration-500 ease-in-out ${
            isHoveredLeft
              ? "translate-x-[-32%]"
              : isHoveredRight
              ? "translate-x-[32%]"
              : "translate-x-0"
          }`}>skincare</span>
        </h1>

        <div className="max-w-[340px] mt-[25%] pl-3">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE
          TALORED TO WHAT YOUR SKIN NEEDS.
        </div>
      </div>
    </section>
  );
}
export default Home;
