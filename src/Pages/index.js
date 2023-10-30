import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/HomePage/Home";
import Header from "../Components/Header/Header";
import "../Components/HomePage/Home/Home.scss";
import Product_page from "./ProductPage/Product_page";
import Footer from "../Components/Footer/Footer";
import Landingpage from "./LandingPage/Landingpage";

export default function Main() {
  return (
    <div className="mainConatiner">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Landingpage />} />
          <Route path="/Product_Page" element={<Product_page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
