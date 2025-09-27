import React, { useState } from "react";
import './light.css';
import bulbImage from './assets/bulb.jpg';

function LightBulb(){

       const [isOn, setIsOn] = useState(false);

       function toggleLight(){
        setIsOn((prevState) => !prevState);
       }

    return(
        <>
            <h1>MY LIGHT BULB</h1>
            <div className="container">
            <div className={isOn ? 'bulbOn' : 'bulbOff'}>
                <div className="fila12">
                    <div className="filament1"></div>
                    <div className="filament2"></div>
                </div>
                <div className="filament3"></div></div>
            <div className="off"></div>
            
            </div>
            <button className="switch" onClick={toggleLight}>ON/OFF</button>
        </>
        );
}
export default LightBulb;