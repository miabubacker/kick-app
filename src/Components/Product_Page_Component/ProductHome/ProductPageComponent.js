import React from "react";
import RunningShoeProduct from "../RunningShoeProduct/RunningShoeProduct";
import '../ProductHome/ProductHome.scss'
import Shoes from "../Shoes/Shoes";
export default function ProductPageComponent(props) {
  return (
    <section className="product_page_details_section">
      <RunningShoeProduct {...props} />
      <Shoes  {...props}/>
      </section>
  );
}
