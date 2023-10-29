import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import HeroCutOut from "../HeroCutOut";
import './Home.scss'
import NewDrop from "../NewDrops/NewDrop";
import NewDropShoes from "../NewDropCollection/NewDropShoes";
import Categories from "../Categories/Categories";
import Review from "../Reviews/Review";
import Footer from "../Footer/Footer";

export default function Home(props) {
  const { loading, homeActions } = props;
  return (

    <div>
      {/* <Header {...props} /> */}
      <HeroCutOut {...props} />
      <NewDrop {...props} />
      <NewDropShoes {...props} />
      <Categories {...props} />
      <Review />
      {/* <Footer /> */}


      {/* Home   
      <button
        onClick={() => {
          homeActions.fetchRequestedFeatures();
        }}
      >
        loading
      </button> */}
      {/* <Routes>
            <Route path='/' element={<Dashboard {...props}/>}/>
            <Route path='product/:id' element={<Product {...props}/>}/>
            <Route path='/cart' element={<Cart {...props} />}/>
            <Route path='/BuyerForm' element={<Form {...props} />}/>
        </Routes> */}
    </div>
  );
}
