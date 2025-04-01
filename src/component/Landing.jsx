import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Page1 from './Page1';

const Landing = () => {
    return (
            <section id="landing">
      <div className="container">
        <div className="row">
          <nav>
            <div className="nav__container">
              <div className="nav__row">
                <div className="nav__landing">
                  <div className="title">
                    <a href="/" className="text">SKINSTRIC</a>
                    <h4 className="tiny__text">[ INTRO ]</h4>
                  </div>
                  <button className="nav__btn">ENTER CODE</button>
                </div>
              </div>
            </div>
          </nav>

          <div className="header">
            <div className="header__container">
              <h1 className="landing__title">Sophisticated skincare</h1>
              <div className="arrow__prev">
                <div className="landing__back">
                  <div className="back__box">
                    <FontAwesomeIcon icon={faCaretLeft} className='back__back' />
                  </div>
                  <h3 className="back__text">DISCOVER A.I</h3>
                </div>
              </div>

              <div className="arrow__next">
                <div className="landing__front">
                  <h3 className="front__text">TAKE TEST</h3>
                  <div className="analysis__front--box">
                  <FontAwesomeIcon icon={faCaretRight} className='front__back' />
                  </div>
                </div>
              </div>
            </div>
            <div className="para">
              SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
            </div>
          </div>
        </div>
      </div>
    </section>
);
} 
export default Landing;