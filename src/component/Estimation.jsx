import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Estimation = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setSelectedBox(boxId);
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
    <section id="estimation">
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
                <h3 className="web__text">A.I. ANALYSIS</h3>
                <h4 className="prepare__text">
                  A.I HAS ESTIMATED THE FOLLOWING. <br />
                  FIX ESTIMATED INFORMATION IF NEEDED.
                </h4>
                <div className="prepare__box--wrapper" data-aos="fade-up" data-aos-delay="600">
                  <div className="web__box1"></div>
                  <div className="web__box2"></div>
                  <div className="web__box3"></div>

                  <div className="four__wrapper">
                    <div className="four__box--container">
                      <div
                        className="four__box" data-aos="fade-down" data-aos-delay="800"
                        onClick={() => handleBoxClick(1)}
                        style={{
                          backgroundColor:
                            selectedBox === 1 ? "#1a1b1c" : "#f3f3f4",
                        }}
                      >
                        <h3
                          className="box__text--1"
                          style={{
                            color: selectedBox === 1 ? "white" : "black",
                          }}
                        >
                          DEMOGRAPHICS
                        </h3>
                      </div>

                      <div
                        className="four__box" data-aos="fade-right" data-aos-delay="800"
                        onClick={() => handleBoxClick(2)}
                        style={{
                          backgroundColor:
                            selectedBox === 2 ? "#1a1b1c" : "#f3f3f4",
                        }}
                      >
                        <h3
                          className="box__text--2"
                          style={{
                            color: selectedBox === 2 ? "white" : "black",
                          }}
                        >
                          SKIN TYPE <br /> DETAILS
                        </h3>
                      </div>
                    </div>

                    <div className="four__box--container2">
                      <div
                        className="four__box" data-aos="fade-left" data-aos-delay="800"
                        onClick={() => handleBoxClick(3)}
                        style={{
                          backgroundColor:
                            selectedBox === 3 ? "#1a1b1c" : "#f3f3f4",
                        }}
                      >
                        <h3
                          className="box__text--3"
                          style={{
                            color: selectedBox === 3 ? "white" : "black",
                          }}
                        >
                          COSMETIC <br /> CONCERNS
                        </h3>
                      </div>

                      <div
                        className="four__box" data-aos="fade-up" data-aos-delay="800"
                        onClick={() => handleBoxClick(4)}
                        style={{
                          backgroundColor:
                            selectedBox === 4 ? "#1a1b1c" : "#f3f3f4",
                        }}
                      >
                        <h3
                          className="box__text--4"
                          style={{
                            color: selectedBox === 4 ? "white" : "black",
                          }}
                        >
                          WEATHER
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prepare">
                  <Link to="/" className="analysis__back click">
                    <div className="back__box">
                      <FontAwesomeIcon
                        icon={faCaretLeft}
                        className="back__back"
                      />
                    </div>
                    <h3 className="back__text">BACK</h3>
                  </Link>

                  {selectedBox && (
             <Link to="/demographics" className="analysis__front click">
                      <h3 className="front__text">GET SUMMARY</h3>
                      <div className="analysis__front--box">
                        <FontAwesomeIcon icon={faCaretRight} className="front__back" />
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
export default Estimation;
