import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../Components/HomePage/Home";
import Header from "../../Components/Header/Header";
import "../../Components/HomePage/Home/Home.scss";
import Product_page from "../ProductPage/Product_page";
import Footer from "../../Components/Footer/Footer";
import Landingpage from "../LandingPage/Landingpage";

export default function Main(props) {
  return (
    <div className="mainConatiner">

        <Header />
        <Routes>
          <Route path="/" element={<Landingpage {...props} />} />
          <Route path="/Product_Page/:id" element={<Product_page {...props}/>} />
        </Routes>
        <Footer />
    </div>
  );
}
