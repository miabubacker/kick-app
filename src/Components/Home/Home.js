import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import HeroCutOut from "../HeroCutOut";

export default function Home(props) {
  const { loading, homeActions } = props;
  return (
    <React.Fragment>
      <Header {...props}/>
      <HeroCutOut {...props}/>
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
    </React.Fragment>
  );
}
