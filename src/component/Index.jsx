import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

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
                    <Link to="/" className="text">SKINSTRIC</Link>
                    <h4 className="tiny__text">[ INTRO ]</h4>
                  </div>
                  <button className="nav__btn click">ENTER CODE</button>
                </div>
              </div>
            </div>
          </nav>

          <div className="header">
            <div className="header__container">
                  <div className="arrows">
                    <div className={`left__page1--wrapper ${isHoveredLeft ? 'hide-right' : ''}`} data-aos="fade-right" data-aos-delay="400">
                      <div className="left__box1"></div>
                      <div className="left__box2"></div>
                      <div className="left__box3"
                        onMouseEnter={() => setIsHoveredRight(true)}
                        onMouseLeave={() => setIsHoveredRight(false)}
                      
                      >
                      <div className="backward">
                          <div className="arrow1 click">
                              <div className="right__small--box1" id="outerBox"></div>  
                              <div className="right__small--box2" id="innerBox"></div>  
                              <FontAwesomeIcon icon={faCaretLeft} className="back__icon" />
                            </div>
                          <h3 className="forward__text">DISCOVER A.I</h3>
                      </div>
                      </div>
                      </div>
                  </div>

                    <div className={`page1__wrapper ${isHoveredRight ? 'hide-left' : ''}`} data-aos="fade-left" data-aos-delay="400">
                      <div className="box1"></div>
                      <div className="box2"></div>
                      <div className="box3"
                      onMouseEnter={() => setIsHoveredLeft(true)}
                      onMouseLeave={() => setIsHoveredLeft(false)}

                      >
                      <div className="forward">
                          <h3 className="forward__text">TAKE TEST</h3>
                          <Link to="/introduce" className="arrow click">
                              <div className="small__box1"></div>
                              <div className={`small__box2 ${isHoveredLeft ? 'show' : ''}`}></div>
                              <FontAwesomeIcon icon={faCaretRight} className="forward__arrow" />
                          </Link>  
                      </div>
                      </div>
                      </div>
                      <h1 className={`landing__title ${isHoveredLeft ? 'move-left' : isHoveredRight ? 'move-right' : ''}`}>
                    Sophisticated skincare
                  </h1>
                  </div>
                </div>
            <div className="para">SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TALORED TO WHAT YOUR SKIN NEEDS.</div>
     </div>
        </div>
    </section>
    );
}
export default Index;