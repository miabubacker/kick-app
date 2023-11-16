import React, { useState } from "react";
import "./RunningShoeProduct.scss";
import Heart3LineIcon from "remixicon-react/Heart3LineIcon"

function RunningShoeProduct(props) {
  const { selectedProduct } = props;

  const [selectcolor, setSelectColor] = useState(0);
  const [selectedsize, setSelectedSize] = useState([]);
  const {
    typesOfcolor,
    comeingDetails,
    title,
    price,
    color,
    aboutProduct,
    availableSize,
  } = selectedProduct;
  const sizeChart = () => {
    let size = [];
    for (let i = 38; i <= 47; i++) {
      size.push(i);
    }
    return size;
  };
  const shoeColorChnage = (colorindex) => {
    setSelectColor(colorindex);
  };

  const selectSize = (selectedSize) => {
    const s = [...selectedsize];
    const removedublicate = s.filter((data) => data === selectedSize);
    if (removedublicate.length) {
      const removedata = selectedsize.filter((data) => data !== selectedSize);
      setSelectedSize(removedata);
    } else {
      setSelectedSize([...selectedsize, selectedSize]);
    }
  };

  return (
    <>
      {Object.keys(selectedProduct).length ? (
        <section>
          <div className="gridImg_details_Container">
            <div className="img_grid_container">
              {typesOfcolor[selectcolor].map((img, index) => (
                <div key={index}>
                  <img className="gridImg" src={img} />
                </div>
              ))}
            </div>
            <div className="shoe_details">
              <div className="comming_details"> {comeingDetails}</div>
              <div className="shoeTitle">{title}</div>
              <span className="price">${price}.00</span>
              <div className="colors_container">
                <p className="colortitle">COLOR</p>
                <div className="colorMain">
                  {" "}
                  {color.map((colour, index) => (
                    <div
                      key={index}
                      className={
                        index === selectcolor ? "color_border" : "color"
                      }
                      onClick={() => {
                        shoeColorChnage(index);
                      }}
                    >
                      <div
                        style={{
                          width: "19px",
                          height: "19px",
                          background: colour,
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="size_and_charts_container">
                <div className="size">SIZE</div>
                <div className="sizeChart">SIZE CHART</div>
              </div>
              <div className="sizelabel">
                {sizeChart().map((size, index) => (
                  <ul
                    key={index}
                    className={
                      availableSize.includes(size)
                        ? `${
                            selectedsize.includes(index)
                              ? "buttonSize avilable dark"
                              : "buttonSize avilable"
                          }`
                        : "buttonSize notavailable"
                    }
                    onClick={() => {
                      availableSize.includes(size) && selectSize(index);
                    }}
                  >
                    {size}
                  </ul>
                ))}
              </div>
              <>
                <div className="cart_andFav">
                  <button>ADD TO CART</button>
                  <div className="fav"><Heart3LineIcon color="white"/></div>
                </div>
                <button className="buy_it">BUY IT NOW</button>
              </>
              <div className="aboutContiner">
                <h5>About the product</h5>
                <div className="title_and_details">
                  <p>{aboutProduct.aboutTitle}</p>
                  <p className="offer">{aboutProduct.aboutOffers}</p>
                  <div className="list">
                    {aboutProduct.aboutusPoints.map((points) => (
                      <li>{points}</li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>please Back to home Page</div>
      )}
    </>
  );
}

export default RunningShoeProduct;
