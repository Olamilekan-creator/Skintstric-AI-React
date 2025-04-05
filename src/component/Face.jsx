import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import takePicture from '../assets/image 225 (Traced).png'

const Face = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const startCamera = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
    };
    startCamera();
}, []);

const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
};
    return (
<section id="face" style={{ position: 'relative', height: '100vh' }}>
<video 
                ref={videoRef} 
                autoPlay 
                style={{ 
                    position: 'absolute', 
                    top: '0', 
                    left: '0', 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    zIndex: 0
                }} 
            ></video>
            <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />

        <div className="face__container" style={{ position: 'absolute', top: '0', left: '0', width: '100%', zIndex: 1 }}>
            <div className="face__row">
                <nav>
                    <div className="nav__container">
                      <div className="nav__row">
                        <div className="nav__landing">
                          <div className="title">
                            <a href="#" className="head__text">SKINSTRIC</a>
                            <h4 className="head__tiny--text">[ ANALYSIS ]</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                  
                        <h4 className="ellipse__text">GREAT SHOT!</h4>
               <div className="picture">
                        <h4 className="picture__text">TAKE PICTURE</h4>
                        <div className="picture__container">
                            <div className="picture__icon--icon" onClick={captureImage}>
                        <img src={takePicture} alt="" className="picture__icon" />
                    </div>
                </div>
                </div>

                    <div className="picture__analysis">
                        <div className="picture__back click">
                            <div className="picture__back--box">
                              <FontAwesomeIcon icon={faCaretLeft} className="picture__back--back" />
                            </div>
                            <h3 className="picture__back--text">BACK</h3>
                          </div>

                          <div className="option__container">
                            <h4 className="option__title">TO GET BETTER RESULTS MAKE SURE TO HAVE</h4>
                            <div className="option__subtitle--wrapper">
                                <div className="option__subtitle--icon">
                                    <FontAwesomeIcon icon={faDiamond} className="diamond__icon" />
                                    <h4 className="option__subtitle--text">NUETRAL EXPRESSION</h4>
                                </div>

                                <div className="option__subtitle--icon">
                                    <FontAwesomeIcon icon={faDiamond} className="diamond__icon" />
                                    <h4 className="option__subtitle--text">FRONTAL POSE</h4>
                                </div>

                                <div className="option__subtitle--icon">
                                    <FontAwesomeIcon icon={faDiamond} className="diamond__icon" />
                                    <h4 className="option__subtitle--text">ADEQUATE LIGHTING</h4>
                                </div>
                            </div>
                                </div>
                            
                        <div className="picture__front--text click">
                          <h3 className="picture__front">PROCEED</h3>
                          <div className="picture__front--box">
                            <FontAwesomeIcon icon={faCaretRight} className="picture__front--back" />
                          </div>
                        </div>
                    </div>
            </div>
        </div>
      </section>
    );
}
export default Face;