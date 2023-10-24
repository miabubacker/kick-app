import React from "react";
import "./HeroCutOut.scss";
import heroImg from '../Assets/Imgs/image 14.svg'
 import side1 from '../Assets/Imgs/Rectangle 1.svg'
 import side2 from '../Assets/Imgs/Rectangle 2.svg'

export default function HeroCutOut() {
  return (
    <section >
         <div className="heroText">
         <h1>do it <span>right</span></h1>
         </div>
         <div className="HeroImg">
            <div ><img src={heroImg}/></div>
            <div style={{position:'absolute',right:'0',bottom:'0'}}><img src={side1}/></div>
            <div  style={{position:'absolute',right:'20px',bottom:'50px'}}><img src={side2}/></div>
         </div>

    </section>
  );
}
