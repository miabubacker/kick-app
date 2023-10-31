import React from "react";
import RunningShoeProduct from "../RunningShoeProduct/RunningShoeProduct";

export default function ProductPageComponent(props) {
  return (
    <>
      <RunningShoeProduct {...props} />
    </>
  );
}
