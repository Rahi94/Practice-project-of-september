import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playGroundImage from "../../assets/playground.png"

const QZone = () => {
    return (
        <div>
            <h2>QZone</h2>
            <div>
               <img src={swimmingImage} alt="" />
               <img src={classImage} alt="" />
               <img src={playGroundImage} alt="" />
            </div>
        </div>
    );
};

export default QZone;