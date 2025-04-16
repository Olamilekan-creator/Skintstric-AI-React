import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gallery from "../assets/gallery (1).png";
import shutterIcon from "../assets/shutter-icon.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Camera = () => {
const fileInputRef =useRef(null);
const [showAnalysis, setShowAnalysis] = useState(false);
const [imageUploaded, setImageUploaded] = useState(false);
const [previewImage, setPreviewImage] = useState("");
const [showLeaveStay, setShowLeaveStay] = useState(true);
const [analysis, setAnalysis] = useState(null);

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = async () => {
                const base64String = reader.result;
                setPreviewImage(base64String);
                localStorage.setItem("capturedImage", base64String);
                setImageUploaded(true);

                try {
                  const response = await fetch('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json', 
                      },
                      body: JSON.stringify({ image: base64String }), 
                  });
  
                  if (!response.ok) {
                      throw new Error('Network response was not ok');
                  }
  
                  const data = await response.json();
                  console.log('Image uploaded successfully:', data);

                  localStorage.setItem("analysisResult", JSON.stringify(data.data));
                  setAnalysis(data.data);
              } catch (error) {
                  console.error('Error uploading image:', error);
              }
          };
  
              reader.readAsDataURL(file);
            }
          };

const handleShutterClick = () => {
    console.log("Shutter clicked!");
    setShowAnalysis(true);
};

const handleDenyClick = () => {
  setShowLeaveStay(false);
  setShowAnalysis(false);
};

useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });

  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <nav>
            <div className="nav__container">
              <div className="nav__row">
                <div className="nav__landing">
                  <div className="title">
                    <Link to="/" className="text">
                      SKINSTRIC
                    </Link>
                    <h4 className="tiny__text">[ INTRO ]</h4>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div id="webpage__header">
            <div className="webpage__container">
              <div className="webpage__row">
                <h3 className="web__text">TO START ANALYSIS</h3>
                <div className="cam__container">
                  <div className="cam__box--wrapper" data-aos="fade-down" data-aos-delay="700">
                    <div className="cam__box1"></div>
                    <div className="cam__box2"></div>
                    <div className="cam__box3"></div>
                    <div className="cam__line"></div>
                    <div className="camera">
                      <img src={shutterIcon} alt="" className="shutter" onClick={handleShutterClick} />
                    </div>
                  </div>

                  <div className="text__cam">
                    <h3 className="allow__text">
                      ALLOW A.I. <br /> TO SCAN YOUR FACE
                    </h3>
                 

                    {showAnalysis && (
                    <div className="analysis__wrapper">
                    <div className="analysis__box">
                      <h3 className="analysis__text">
                        ALLOW A.I. TO ACCESS YOUR CAMERA
                      </h3>
                    </div>

                  
                    <div className="leave__stay">
                      <h3 className="leave__text click" onClick={handleDenyClick}>DENY</h3>
                      <Link to="/setting" className="stay__text click">ALLOW</Link>
                    </div>
                  </div>
                    )}
                  </div>

                  <h3 className="allow__text--text">
                  ALLOW A.I. <br /> TO ACCESS GALLERY
                </h3>

                  <div className="cam1__box--wrapper" data-aos="fade-up" data-aos-delay="700">
                    <div className="cam1__box1"></div>
                    <div className="cam1__box2"></div>
                    <div className="cam1__box3"></div>
                    <div className="cam1__line"></div>
                    <div className="camera1">
                    <input 
                          type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                      <img
                        src={gallery}
                        alt="Gallery"
                      onClick={() => {
                        fileInputRef.current.click(); 
                    }}
                       style={{ cursor: "pointer" }}
                        className="gallery"
                      />
                    </div>
                  </div>
                </div>
               
                <div className="cam__cam--analysis">
                  <Link to="/" className="analysis__back click">
                    <div className="back__box">
                      <FontAwesomeIcon
                        icon={faCaretLeft}
                        className="back__back"
                      />
                    </div>
                    <h3 className="back__text">BACK</h3>
                  </Link>


                  {imageUploaded && (
                  <Link to="/preparing" className="analysis__front click">
                    <h3 className="front__text">PROCEED</h3>
                    <div className="analysis__front--box">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="front__back"
                      />
                    </div>
                  </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camera;
