import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";

const Preparing = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/estimation');
        }, 10000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <section id="preparing">
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
                    <h3 className="set__up">PREPARING YOUR ANALYSIS...</h3>
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
export default Preparing;