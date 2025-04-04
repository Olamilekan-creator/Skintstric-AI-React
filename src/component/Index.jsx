import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
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
                    <div className="left__page1--wrapper">
                      <div className="left__box1"></div>
                      <div className="left__box2"></div>
                      <div className="left__box3">
                      <div className="backward">
                          <div className="arrow1 click">
                              <div className="right__small--box1" id="outerBox"></div>
                              <div className="right__small--box2" id="innerBox">
                              <FontAwesomeIcon icon={faCaretLeft} className="back__back" />
                            </div>
                          </div>  
                          <h3 className="forward__text">DISCOVER A.I</h3>
                      </div>
                      </div>
                      </div>
                  </div>

                  <h1 className="landing__title">
                    Sophisticated skincare
                  </h1>

                    <div className="page1__wrapper">
                      <div className="box1"></div>
                      <div className="box2"></div>
                      <div className="box3">
                      <div className="forward">
                          <h3 className="forward__text">TAKE TEST</h3>
                          <Link to="/introduce" className="arrow click">
                              <div className="small__box1" id="outerBox"></div>
                              <div className="small__box2" id="innerBox"></div>
                              <FontAwesomeIcon icon={faCaretRight} className="forward__arrow" />
                          </Link>  
                      </div>
                      </div>
                      </div>
                  </div>
                </div>
            <div className="para">SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TALORED TO WHAT YOUR SKIN NEEDS.</div>
     </div>
        </div>
    </section>
    );
}
export default Index;