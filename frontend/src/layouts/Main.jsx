import React from "react";
import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
const Main = () => {
  return (
    <div>
      <ScrollToTop/>
      <div>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
