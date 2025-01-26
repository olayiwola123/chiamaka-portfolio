import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
