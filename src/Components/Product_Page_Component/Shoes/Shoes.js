import React, { useRef, useState } from "react";
 import './Shoes.scss'
 import { useNavigate } from "react-router-dom";
 import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon"
 import ArrowDropRightLineIcon from "remixicon-react/ArrowDropRightLineIcon"

export default function Shoes(props) {
  const {gallery,mainPageAction}=props
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  
  const viewProduct = (id) => {
    navigate(`/Product_Page/${id}`);
     mainPageAction.viewProduct(gallery.find((data)=>data.id===id))
  };
  const onNextClick = () => {
    if(index !== gallery.length/4 - 1) {
      setIndex(idx => idx + 1);
    }
  }
  
  //Handler to update the current index on click of left button
  const onPreviousClick = () => {
    if(index !== 0) {
      setIndex(idx => idx - 1);
    }
  }
   console.log(index,gallery.length)
  return (
    <section>
      <section className="dropContainer">
        <div className="topmain">
          <div className="header"> You may also like</div>
          <div className="buttonmain">
            <div
              className={index>0? 'btn':'btn enable'}
              onClick={() => {
                onPreviousClick("right");
           
              }}
            >
              <ArrowDropLeftLineIcon/>
            </div>
            <div
              className={index<1?'btn':'btn enable'}
              onClick={() => {
                onNextClick("left");
              }}
            >
              <ArrowDropRightLineIcon />
            </div>
          </div>
        </div>
        <section className="galleryContainer">
        <div className="gallery"  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {gallery.map((data) => (
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
        <div class="indicators">
                      {Array(2).fill().map((bar,i)=><span key={i}  className={i==index&&'active'}onClick={()=>{setIndex(i)}}>{bar}</span>)}
        </div>

      </section>
      </section>
    </section>
  );
}
