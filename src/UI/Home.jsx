import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

function Home() {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);
  const middleRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    gsap.set(middleRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(outerRef.current, { opacity: 0, scale: 0.8 });
  }, []);

  const handleHover = () => {
    gsap.to(middleRef.current, {
      opacity: 1,
      scale: 1,
      x: "-20px",
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(outerRef.current, {
      opacity: 1,
      scale: 1,
      x: "-35px",
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleHoverLeave = () => {
    gsap.to(middleRef.current, {
      opacity: 0,
      scale: 0.8,
      x: "0px",
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(outerRef.current, {
      opacity: 0,
      scale: 0.8,
      x: "0px",
      duration: 0.6,
      ease: "power2.out",
    });
  };

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
        <div className=" flex justify-between items-center pt-0 lg:pt-[15%] xl:pt-0 md:pt-7">
          <div className={`relative transform rotate-45 transition-all duration-500 ease-in-out ${isHoveredLeft ? "opacity-0 scale-0 pointer-events-auto" : "opacity-100 scale-100 pointer-events-auto"}`}>
            <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[500px] h-[500px] hidden"></div>
              <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[470px] h-[470px] hidden mt-6"></div>
                <div className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[440px] h-[440px] mt-12">
                 <div className="flex -mt-[30%] -mr-[40%] transform rotate-90">
                  <div className="flex -mt-[19%] -mr-[30%] transform -rotate-90">
                    <div className={`absolute flex justify-center transform -rotate-90 items-center border-solid bg-white-100 border-gray-500 border-2 w-[35px] h-[35px] transition-transform duration-300 ease-out hover:scale-150 pointer-events-auto`}
                      onMouseEnter={() => setIsHoveredRight(true)}
                      onMouseLeave={() => setIsHoveredRight(false)}>
                      <div className="absolute flex justify-center transform rotate-90 items-center border-dotted bg-white-100 border-gray-500 border-2 w-[35px] h-[35px] pointer-events-none">
                        <FontAwesomeIcon
                          icon={faCaretLeft}
                          className="text-xl transform -rotate-45"/>
                          </div>
                          </div>
                    <h3 className="text-l transform -rotate-45 ">
                      DISCOVER A.I.
                    </h3>
              </div>
            </div>
            </div>
          </div>

          <div className={`relative transform rotate-45 transition-all duration-500 ease-in-out ${isHoveredRight ? "opacity-0 scale-0 pointer-events-auto" : "opacity-100 scale-100 pointer-events-auto"}`}>
            <div ref={outerRef} className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[500px] h-[500px] ml-10 -mt-2"></div>
              <div ref={middleRef} className="absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[470px] h-[470px] -mt-2 ml-12"></div>
                <div className={`absolute flex justify-center items-center border-dotted bg-white-100 border-gray-500 border-2 w-[440px] h-[440px] ml-12`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeave}>
                  <div className="flex flex-row -ml-[60%] -mb-[27%]">
                    <h3 className="text-l transform -rotate-45">TAKE TEST</h3>
                    <div className="flex flex-row">
                    <Link to="/introduce"  className={`absolute flex justify-center items-center border-solid bg-white-100 border-gray-500 border-2 w-[35px] h-[35px] transition-transform duration-300 ease-out hover:scale-150 pointer-events-auto`}
                      onMouseEnter={() => setIsHoveredLeft(true)}
                      onMouseLeave={() => setIsHoveredLeft(false)}>
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
        
        <h1
          className={`text-8xl pt-40 font-normal text-black text-center transition-transform duration-500 ease-in-out text-l lg:text-7xl xl:text-l md:text-[45px] sm:text-[40px] ${
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

        <div className="max-w-[340px] mt-[25%] pl-3 pt-[50%] pt-0 lg:pt-[35%] xl:pt-0 md:pt-[45%]">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE
          TALORED TO WHAT YOUR SKIN NEEDS.
        </div>
      </div>
    </section>
  );
}
export default Home;