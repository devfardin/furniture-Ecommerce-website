import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Header from "./Header";
const Main = () => {
  return (
    <div>
      <ScrollToTop />
      <div>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
