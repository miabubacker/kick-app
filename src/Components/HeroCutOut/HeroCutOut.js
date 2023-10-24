import React, { useState } from "react";
import "./HeroCutOut.scss";
import heroImg from '../Assets/Imgs/image 14.svg'
import heroImgs from '../Assets/Imgs/image14s.svg'
 import side2 from '../Assets/Imgs/Rectangle 1.svg'
 import side1 from '../Assets/Imgs/Rectangle 2.svg'

export default function HeroCutOut() {
    const [bgIMg,setBgIMg]= useState(0)
    const desktopImage=[heroImg,side1]
const mobileImage=[heroImgs,side1]
 const [bg,setBg]=useState({   backgroundImage:`url(${heroImg})`})
  
     const bgIMgChange=(index)=>{
setBgIMg(index)
     }
     
   const  imgContainer= window.innerWidth >= 650 ? desktopImage : mobileImage;
   const containerStyle = {
    background: `url(${heroImg})`,
    backgroundSize: 'cover', // You can adjust other CSS properties here
    width: '100%',
    height: '300px', // Set the desired height
  };
  return (
    <section >
         <div className="heroText">
         <h1>do it <span>right</span></h1>
         </div>
         <div className="HeroImg" >
            <div className="sideText">Nike product of the year </div>
          <img  className='heromain'src={imgContainer[bgIMg]}/>
          <div className="aboutUs">
            <header>NIKE AIR MAX</header>
            <div>
                <div className="content">Nike introducing the new air max for everyone's comfort</div>
                <button>Shop now</button>
            </div>
          </div>
<div className="childImgConatainer">        
    <div className="childIcon1" onClick={()=>{bgIMgChange(1)}}><img src={side1}/></div>
            <div  className="childIcon2" onClick={()=>{bgIMgChange(0)}}><img src={side2}/></div></div>
         </div>

    </section>
  );
}
