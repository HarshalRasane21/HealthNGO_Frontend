import React from "react";
import Header from "./components/Home/header";
import Footer from "./components/Home/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
