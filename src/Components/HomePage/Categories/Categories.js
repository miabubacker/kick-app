import React, { useRef, useState } from "react";
import "./Categories.scss";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon"
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon"
import ArrowRightUpLineIcon from "remixicon-react/ArrowRightUpLineIcon"

export default function Categories(props) {
   const {shoesCategories}=props
  const sliderRef = useRef(null);
  const [lengthimg, setLengthIMg] = useState(0);
  const scrollAmount = 650;
  const scrollShoes = (moves) => {
    if (moves === "left") {
      if (window.innerWidth >= 1300) {
        const container = sliderRef.current;
        container.scrollLeft -= scrollAmount;
        setLengthIMg((container.scrollLeft -= container.offsetTop));
      } else {
        const container = sliderRef.current;
        setLengthIMg((container.scrollTop -= container.offsetTop));
      }
    } else {
      if (window.innerWidth >= 1300) {
        const container = sliderRef.current;
        container.scrollLeft += scrollAmount;
        setLengthIMg((container.scrollLeft += container.offsetTop));
      } else {
        const container = sliderRef.current;
        console.log(container);
        // container.scrollLeft += container;
        setLengthIMg((container.scrollTop += container.offsetTop));
      }
    }
  };
  return (
    <>
      <section className="categoriesContainer">
        <div className="header">
          <div className="categoriesTitle">Categories</div>
          <div className="buttonContainer">
            <button
              disabled={lengthimg <= 0}
              className={lengthimg <= 0 ? "disabled" : "view"}
              onClick={() => {
                scrollShoes("left");
              }}
            >
              <ArrowLeftSLineIcon />
            </button>
            <button
              disabled={
                lengthimg >= 2256 || lengthimg >= 1367 || lengthimg >= 1276
              }
              className={
                lengthimg >= 2256 || lengthimg >= 1485 || lengthimg >= 1276
                  ? "disabled"
                  : "view"
              }
              onClick={() => {
                scrollShoes("right");
              }}
            >
             <ArrowRightSLineIcon/>
            </button>
          </div>
        </div>
        <div className="ShoesContainer" ref={sliderRef}>
          {shoesCategories.map((data, index) => (
            <div className="showsMain" key={index}>
              <div className="shoeimgContainer">
                <img src={data.img} />
              </div>
              <div className="aboutAndIcon">
                <div className="aboutshoes">{data.about}</div>
                <div className="ArrowIcon">
                  <ArrowRightUpLineIcon color="white"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
