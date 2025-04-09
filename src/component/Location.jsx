import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Location = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleProceed = async () => {
    try {
      const response = await fetch(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ introduction: inputText }), // Send the inputText in the body
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
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
                <div className="web__box--wrapper" data-aos="fade-up" data-aos-delay="700">
                  <div className="web__box1"></div>
                  <div className="web__box2"></div>
                  <div className="web__box3"></div>
                  <div className="intro">
                    <h5 className="web__text--text">WHERE ARE YOU FROM?</h5>
                    <input
                      type="text"
                      action=""
                      className="where__form--text"
                      placeholder="Where are you from?"
                      value={inputText}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="analysis">
                  <Link to ="/" className="analysis__back click">
                    <div className="back__box">
                      <FontAwesomeIcon
                        icon={faCaretLeft}
                        className="fa-solid fa-caret-left back__back"
                      />
                    </div>
                    <h3 className="back__text">BACK</h3>
                  </Link>

                  {inputText && (
                    <Link to ="/camera" className="analysis__front click">
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
export default Location;
