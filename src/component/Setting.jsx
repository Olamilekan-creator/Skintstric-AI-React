import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import shutterIcon from '../assets/shutter-icon.png'
import { useNavigate } from "react-router-dom";

const Setting = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/face');
        }, 10000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
<section id="landing">
        <div className="container">
          <div className="row">
            <div id="webpage__header">
              <div className="webpage__container">
                <div className="webpage__row">
                  <div className="set__container">
  
                  <div className="set__box--wrapper">
                    <div className="set__box1"></div>
                    <div className="set__box2"></div>
                    <div className="set__box3"></div>
                    <div className="set__cam">
                      <img src={shutterIcon} alt="" className="gallery" />
                    </div>
                    <h3 className="set__up">SETTING UP CAMERA...</h3>
                  </div>
                  </div>

                  <div className="set__text">
                    <h4 className="set__text--title">TO GET BETTER RESULTS MAKE SURE TO HAVE</h4>
                    <div className="set__text--text">
                    <div className="set__text--subtitle1">
                        <FontAwesomeIcon icon={faDiamond} className="fa-solid fa-diamond" />
                        <h4 className="subtitle__text1">NUETRAL EXPRESSION</h4>
                    </div>

                    <div className="set__text--subtitle1">
                        <FontAwesomeIcon icon={faDiamond} className="fa-solid fa-diamond" />
                        <h4 className="subtitle__text1">FRONTAL POSE</h4>
                    </div>

                    <div className="set__text--subtitle1">
                        <FontAwesomeIcon icon={faDiamond} className="fa-solid fa-diamond" />
                        <h4 className="subtitle__text1">ADEQUATE LIGHTING</h4>
                    </div>
                  </div>
                  </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
}
export default Setting;