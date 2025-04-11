// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

// function Home () {
//     const [isHoveredLeft, setIsHoveredLeft] = useState(false);
//     const [isHoveredRight, setIsHoveredRight] = useState(false);
//     return (
//         <section id="landing">
//             <div className="container mx-auto px-4">
//                 <div className="flex justify-between">
//                     <nav className="w-full">
//                     <div className="flex justify-between items-center py-4">
//                         <div className="flex flex-row items-center gap-5">
//                         <Link to="/" className="text-xl font-bold text-black">SKINSTRIC </Link>
//                        <h4 className="text-sm text-gray-50o">[ INTRO ]</h4>
//                         </div>
//                         <button className="bg-black text-white py-2 px-4 rounded-full">ENTER CODE</button>
//                     </div>
//                     </nav>

//   {/* Left Arrow Section */}
//                     <div className="header">
//                         <div className="flex items-center py-4">
//                             <div className="arrows flex space-x-8">
//                             <div className={`relative  ${isHoveredLeft ? 'transform translate-x-4' : ''}`}>
//                             <div className="absolute w-16 h-16 bg-gray-200 top-0 left-0"></div>
//                             <div className="absolute w-16 h-16 bg-gray-200 top-0 left-1/2"></div>
//                             <div className="absolute w-16 h-16 bg-gray-200 top-0 left-1/4"
//                             onMouseEnter={() => setIsHoveredRight(true)}
//                             onMouseLeave={() => setIsHoveredRight(false)}
//                             >
//                                 <div className="backward">
//                                 <div className="flex items-center justify-center w-full h-full bg-gray-700 text-white rounded-lg cursor-pointer">
//                                     <FontAwesomeIcon icon={faCaretLeft} className="text-xl"/>
//                                 </div>
//                                 <h3 className="text-center text-sm mt-2">DISOVER A.I</h3>
//                                 </div>
//                             </div>
//                             </div>
//                             <div className={`relative ${isHoveredRight ? 'transform -translate-x-4' : ''}`}>
//                                 <div className="absolute w-16 h-16 bg-gray-200 top-0 right-0"></div>
//                                 <div className="absolute w-16 h-16 bg-gray-200 top-0 right-1/2"></div>
//                                 <div className="absolute w-16 h-16 bg-gray-200 top-0 right-1/4"
//                                 onMouseEnter={() => setIsHoveredLeft(true)}
//                                 onMouseLeave={() => setIsHoveredLeft(false)}>
//                                     <div className="forward">
//                                         <h3 className="text-center text-sm mt-2">TAKE TEST</h3>
//                                         <Link to="#" className="flex items-center justify-center w-full h-full bg-blue-500 text-white rounded-lg">
//                                         <div className="w-8 h-8 bg-white rounded-full mr-2"></div>
//                                         <div className={`w-8 h-8 bg-blue-500 rounded-full ${isHoveredLeft ? 'block' : 'hidden'}`}>
//                                             <FontAwesomeIcon icon={faCaretRight} className="text-xl"/>
//                                         </div>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                             </div>

//                             {/* Title Section */}
//                             <h1 className={`text-4xl font-bold text-center ${isHoveredLeft ? 'transform -translate-x-4' : isHoveredRight ? 'transform translate-x-4' : ''}`}>Sophisticated skincare</h1>
//                         </div>

//                         {/* Paragraph */}
//                         <div className="text-center text-gray-700 mt-4 px-8">SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.</div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
// export default Home;