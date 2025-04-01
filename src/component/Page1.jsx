import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import Landing from "./Landing"

const Page1 = () => {
    return (
    <section id="page1">
<div class="page__container">
    <div class="page__row">
        <nav>
            <div class="nav__container">
              <div class="nav__row">
                <div class="nav__landing">
                  <div class="title">
                    <a href="#" class="text">SKINSTRIC</a>
                    <h4 class="tiny__text">[ INTRO ]</h4>
                  </div>
                  <button class="nav__btn">ENTER CODE</button>
                </div>
              </div>
            </div>
          </nav>

          <div class="sophisticated__text">
        <h3 class="page__text">Sophisticated <br />skincare</h3>
       <div class="page1__wrapper">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3">
        <div class="forward">
            <h3 class="forward__text">TAKE TEST</h3>
            <div class="arrow">
                <div class="small__box1"></div>
                <div class="small__box2"></div>
                <FontAwesomeIcon icon={faCaretRight} className='forward__arrow' />
            </div>  
        </div>
        </div>
        </div>
    </div>
    <div class="para__text">SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TALORED TO WHAT YOUR SKIN NEEDS.</div>
 </div>
 </div>
</section>
  );
}

export default Page1;