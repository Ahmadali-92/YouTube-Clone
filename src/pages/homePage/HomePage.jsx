import React from "react";
import "./HomePage.css";
import SideBar from "../../components/sideBar/SideBar";
import ShowVideo from "../../components/showVideo/ShowVideo";
import Header from "../../components/home/header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="twoSectionDivide">
        <SideBar />
        <ShowVideo />
      </div>
    </>
  );
};

export default HomePage;
