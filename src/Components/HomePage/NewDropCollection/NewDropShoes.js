import React, { useState } from "react";
import "./NewDropShoes.scss";
import gallery1 from "../../Assets/Imgs/gallery1.svg";
import gallery2 from "../../Assets/Imgs/gallery2.svg";
import gallery3 from "../../Assets/Imgs/gallery3.svg";
import gallery4 from "../../Assets/Imgs/gallery4.svg";
import { useNavigate } from "react-router-dom";

export default function NewDropShoes(props) {
  const navigate = useNavigate();
   const {gallery,mainPageAction}=props
  const viewProduct = (id) => {
    navigate(`/Product_Page/${id}`);
     mainPageAction.viewProduct(gallery.filter((data)=>data.id===id))
  };
  return (
    <>
      <section className="galleryContainer">
        <div className="gallery">
          {gallery.map((data, ) => (
            <div className="galleryCardMain" key={data.id}>
              <div className="gallerycard">
                <div className="newLeaf">New</div>
                <div className="imgContainer">
                  <img src={data.thumbNailImg} />
                </div>
                <div className="content">{data.title}</div>
                <button
                  onClick={() => {
                    viewProduct(data.id);
                  }}
                >
                  View Product - <span className="amount">{data.price}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
