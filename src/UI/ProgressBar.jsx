import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ percentage }) => {
    const numericValue = parseInt(percentage.replace("%", ""), 10);
  return (
    <div style={{ width: "60vw", maxWidth: "350px", aspectRatio: "1", margin: "0 auto" }}>
    <CircularProgressbar 
      value={numericValue} 
      text={`${percentage}`}
      strokeWidth={2}
      styles={buildStyles({
        textColor: '#000',
        pathColor: '#242424',
        trailColor: '#d6d6d6',
        textSize: '15px',
      })}
    />
  </div>
);
};
export default ProgressBar;
