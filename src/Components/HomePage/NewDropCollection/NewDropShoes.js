import React, { useState } from "react";
import "./NewDropShoes.scss";
import { useNavigate } from "react-router-dom";

export default function NewDropShoes(props) {
  const navigate = useNavigate();
   const {gallery,mainPageAction}=props

  const viewProduct = (id) => {
    navigate(`/Product_Page/${id}`);
     mainPageAction.viewProduct(gallery.find((data)=>data.id===id))
  };
  const slicedShoes = gallery.slice(0, 4); 
  return (
    <>
      <section className="galleryContainer">
        <div className="gallery">
          {slicedShoes.map((data) => (
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
