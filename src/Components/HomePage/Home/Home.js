import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HeroCutOut from "../HeroCutOut/HeroCutOut";
import "./Home.scss";
import NewDrop from "../NewDrops/NewDrop";
import NewDropShoes from "../NewDropCollection/NewDropShoes";
import Categories from "../Categories/Categories";
import Review from "../Reviews/Review";

export default function Home(props) {
  const { loading, homeActions } = props;
  console.log(props);
  return (
    <div>
      {/* <Header {...props} /> */}
      <HeroCutOut />
      <NewDrop {...props} />
      <NewDropShoes {...props} />
      <Categories {...props} />
      <Review />
      {/* <Footer /> */}
    </div>
  );
}
