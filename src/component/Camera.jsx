import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import gallery from "../assets/gallery (1).png";
import shutterIcon from "../assets/shutter-icon.png";
import { Link } from "react-router-dom";

const Camera = () => {
const fileInputRef =useRef(null);

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        console.log("File selected:", file);
    } else {
        console.log("No file selected.");
    }
};

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
                  <div className="cam__box--wrapper">
                    <div className="cam__box1"></div>
                    <div className="cam__box2"></div>
                    <div className="cam__box3"></div>
                    <div className="camera">
                      <img src={shutterIcon} alt="" className="shutter" />
                    </div>
                  </div>

                  <div className="text__cam">
                    <h3 className="allow__text">
                      ALLOW A.I. <br /> TO SCAN YOUR FACE
                    </h3>
                    <div className="analysis__box">
                      <h3 className="analysis__text">
                        ALLOW A.I. TO ACCESS YOUR CAMERA
                      </h3>
                    </div>
                    <div className="leave__stay">
                      <h3 className="leave__text click">DENY</h3>
                      <h3 className="stay__text click">ALLOW</h3>
                    </div>
                  </div>

                  <div className="cam1__box--wrapper">
                    <div className="cam1__box1"></div>
                    <div className="cam1__box2"></div>
                    <div className="cam1__box3"></div>
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
                      onClick={() => { console.log("Image clicked!"); // Check if this logs to the console
                        fileInputRef.current.click(); 
                    }}
                       style={{ cursor: "pointer" }}
                        className="gallery"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="allow__text">
                  ALLOW A.I. <br /> TO ACCESS GALLERY
                </h3>

                <div className="cam__cam--analysis">
                  <div className="analysis__back click">
                    <div className="back__box">
                      <FontAwesomeIcon
                        icon={faCaretLeft}
                        className="back__back"
                      />
                    </div>
                    <h3 className="back__text">BACK</h3>
                  </div>

                  <Link to="/preparing" className="analysis__front click">
                    <h3 className="front__text">PROCEED</h3>
                    <div className="analysis__front--box">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="front__back"
                      />
                    </div>
                  </Link>
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
