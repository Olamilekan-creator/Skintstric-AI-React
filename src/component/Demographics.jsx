import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faDiamond,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ProgressBar from "../UI/ProgressBar";

const Demographics = () => {
  const [percentage, setPercentage] = useState("0%");
  const [selectedEthnicity, setSelectedEthnicity] = useState("");
  const [showEthnicities, setShowEthnicities] = useState(false);
  const [selectedAge, setSelectedAge] = useState("");
  const [showAges, setShowAges] = useState(false);
  const [clickedBox1, setClickedBox1] = useState(false);
  const [clickedBox2, setClickedBox2] = useState(false);
  const [clickedBox3, setClickedBox3] = useState(false);
  const [selectedEthnicityIndex, setSelectedEthnicityIndex] = useState(null);
const [selectedAgeIndex, setSelectedAgeIndex] = useState(null);
const [loading, setLoading] = useState(false);
const [showGender, setShowGenders] = useState(false);
const [selectedGenderIndex, setSelectedGenderIndex] = useState(null);
const [selectedGender, setSelectedGender] = useState("");

  const handleBoxClick = (index) => {
    setLoading(true);
    setTimeout(() => {
      setPercentage(ethnicities[index]?.confidence || "0%");
      setSelectedEthnicity(ethnicities[index]?.name || "");
      setSelectedEthnicityIndex(index);
      setLoading(false);
    }, 500);
  };

  const handleAgeClick = (index) => {
    setLoading(true);
    setTimeout(() => {
    setPercentage(age[index]?.confidence || "0%");
    setSelectedAge(age[index]?.ages || "");
    setSelectedAgeIndex(index);
    setLoading(false);
    }, 500);
  };

  const handleGenderClick = (index) => {
    setLoading(true);
    setTimeout(() => {
    setPercentage(gender[index]?.confidence || "0%");
    setSelectedGender(gender[index]?.genders || "");
    setSelectedGenderIndex(index);
    setLoading(false);
    }, 500);
  };

  const boxStyle = (isClicked) => {
    return {
        backgroundColor: isClicked ? "black" : "transparent",
        color: isClicked ? "white" : "black",
         transition: "background-color 0.3s ease, color 0.3s ease"
    };
  };

  const handleBoxClick1 = () => {
    setShowEthnicities(true);
    setShowAges(false);
    setShowGenders(false);
    setClickedBox1(true);
    setClickedBox2(false);
    setClickedBox3(false);
  };

  const handleBoxClick2 = () => {
    setShowGenders(false);
    setShowEthnicities(false);
    setShowAges(true);
    setClickedBox2(true);
    setClickedBox1(false);
    setClickedBox3(false);
  };

  const handleBoxClick3 = () => {
    setShowGenders(true);
    setShowEthnicities(false);
    setShowAges(false);
    setClickedBox3(true);
    setClickedBox1(false);
    setClickedBox2(false);
  };

  const ethnicities = [
    { name: "East Asian", confidence: "96%" },
    { name: "White", confidence: "6%" },
    { name: "Black", confidence: "3%" },
    { name: "South Asian", confidence: "2%" },
    { name: "Latino Hispanic", confidence: "0%" },
    { name: "South East Asian", confidence: "0%" },
    { name: "Middle Eastern", confidence: "0%" },
  ];

  const age = [
    { ages: "0-9", confidence: "0%" },
    { ages: "10-19", confidence: "4%" },
    { ages: "20-29", confidence: "96%" },
    { ages: "30-39", confidence: "2%" },
    { ages: "40-49", confidence: "0%" },
    { ages: "50-59", confidence: "0%" },
    { ages: "60-69", confidence: "0%" },
    { ages: "70+", confidence: "0%" },
  ];

  const gender = [
    { genders: "Female", confidence: "99%"},
    { genders: "Male", confidence: "1%" },
  ];

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

  const handleReset = () => {
    setPercentage("0%");
    setSelectedEthnicity("");
    setSelectedAge("");
    setShowEthnicities(false);
    setShowAges(false);
    setClickedBox1(false);
    setClickedBox2(false);
    setClickedBox3(false);
    setSelectedEthnicityIndex(null);
    setSelectedAgeIndex(null);
    setSelectedGender("");
    setShowGenders(false);
    setSelectedGenderIndex(null);
  };

  return (
    <section id="demographics">
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
            <div className="prepare__container">
              <div className="prepare__row">
                <h3 className="web__text">A.I. ANALYSIS</h3>
                <div className="demo__container">
                  <h4 className="demographics__text">DEMOGRAPHICS</h4>
                  <div className="demo__icon">
                    <div className="analysis__back">
                      <div className="back__box">
                        <FontAwesomeIcon
                          icon={faCaretLeft}
                          className="back__back"
                        />
                      </div>
                    </div>
                    <div className="analysis__front">
                      <div className="analysis__front--box">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="front__back"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="demographics__subtext">PREDICTED RACE & AGE</h4>

                <div className="demographics__wrapper">
                  <div className="east__container">
                    <div
                      className={`east__box1 ${clickedBox1 ? "active" : ""}`}
                      onClick={handleBoxClick1}
                    >
                      <h4 className="east__h4">
                        {selectedEthnicity || "Select Ethnicity"}
                      </h4>
                      <h4 className="east__text--h4">RACE</h4>
                    </div>
                    <div
                      className={`east__box2 ${clickedBox2 ? "active" : ""}`}
                      onClick={handleBoxClick2}
                    >
                      <h4 className="east__h4">
                        {selectedAge || "Select Age"}
                      </h4>
                      <h4 className="east__text--h4">AGE</h4>
                    </div>
                    <div
                      className={`east__box3 ${clickedBox3 ? "active" : ""}`}
                      onClick={handleBoxClick3}
                    >
                      <h4 className="east__h4"> {selectedGender || "Select Gender"}</h4>
                      <h4 className="east__text--h4">SEX</h4>
                    </div>
                  </div>

                  <div className="percentage__box" data-aos="fade-up" data-aos-delay="700">
                    <h4 className="percentage__h4">
                      {selectedEthnicity || selectedAge || selectedGender}
                    </h4>
                    <div className="percent__box">
                      <div className="percentage__circle">
                        <ProgressBar percentage={percentage} />
                      </div>
                    </div>
                  </div>

                  <div className="race__container" data-aos="fade-up" data-aos-delay="900">
                    <div className="race__text">
                      <h4 className="race__text--text">RACE</h4>
                      <h4 className="race__text--text">A.I. CONFIDENCE</h4>
                    </div>

                    {showEthnicities && (
                      <>
                        {ethnicities.map((ethnicity, index) => (
                          <div
                            className="east__asian"
                            key={ethnicity.name}
                            onClick={() => handleBoxClick(index)}
                            style={boxStyle(index === selectedEthnicityIndex)}
                          >
                            <div className="race__icon">
                              <FontAwesomeIcon
                                icon={faDiamond}
                                className="race__diamond"
                              />
                              <h4 className="east__asian--text">
                                {ethnicity.name}
                              </h4>
                            </div>
                            <h4 className="east__asian--text">
                              {ethnicity.confidence}
                            </h4>
                          </div>
                        ))}
                      </>
                    )}

                    {showAges && (
                      <>
                        {age.map((ageGroup, index) => (
                          <div
                            className="east__asian"
                            key={ageGroup.ages}
                            onClick={() => handleAgeClick(index)}
                            style={boxStyle(index === selectedAgeIndex)}
                          >
                            <div className="race__icon">
                              <FontAwesomeIcon
                                icon={faDiamond}
                                className="race__diamond"
                              />
                              <h4 className="east__asian--text">
                                {ageGroup.ages}
                              </h4>
                            </div>
                            <h4 className="east__asian--text">
                              {ageGroup.confidence}
                            </h4>
                          </div>
                        ))}
                      </>
                    )}

                    {showGender && (
                            <>
                            {gender.map((genderGroup, index) => (
                              <div
                                className="east__asian"
                                key={genderGroup.genders}
                                onClick={() => handleGenderClick(index)}
                                style={boxStyle(index === selectedGenderIndex)}
                              >
                                <div className="race__icon">
                                  <FontAwesomeIcon
                                    icon={faDiamond}
                                    className="race__diamond"
                                  />
                                  <h4 className="east__asian--text">
                                    {genderGroup.genders}
                                  </h4>
                                </div>
                                <h4 className="east__asian--text">
                                  {genderGroup.confidence}
                                </h4>
                              </div>
                            ))}
                          </>
                    )}
                  </div>
                </div>

                <div className="prepare__demo">
                  <Link to="/" className="analysis__back click">
                    <div className="back__box">
                      <FontAwesomeIcon
                        icon={faCaretLeft}
                        className="back__back"
                      />
                    </div>
                    <h3 className="back__text">BACK</h3>
                  </Link>
                  <h4 className="estimate">
                    If A.I. estimate is wrong, select the correct one.
                  </h4>
                  <div className="prepare__btn">
                    <button className="reset__btn" onClick={handleReset}>RESET</button>
                    <button className="confirm__btn">CONFIRM</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demographics;
