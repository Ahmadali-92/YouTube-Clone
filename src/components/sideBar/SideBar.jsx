import React from "react";
import "./SideBar.css";
import { BiSolidHome } from "react-icons/bi";
import { AiOutlineFire } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiJeweledChalice } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaFlagSolid } from "react-icons/lia";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { isOpen } = useSelector((state) => state.toggle);
  // { menuBTN }
  const topSideFeature = [
    {
      icon: <BiSolidHome />,
      featureName: "Home",
    },
    {
      icon: <SiYoutubeshorts />,
      featureName: "Shorts",
    },
    {
      icon: <MdSubscriptions />,
      featureName: "Subscriptions",
    },
  ];

  const you = [
    {
      icon: <CgProfile />,
      featureName: "Your channel",
    },
    {
      icon: <GrHistory />,
      featureName: "History",
    },
    {
      icon: <GoVideo />,
      featureName: "Your videos",
    },
    {
      icon: (
        <MdOutlineWatchLater style={{ fontSize: "25px", margin: "-2px" }} />
      ),
      featureName: "Watch later",
    },
  ];

  const explore = [
    {
      icon: <AiOutlineFire />,
      featureName: "Trending",
    },
    {
      icon: <IoMusicalNoteOutline />,
      featureName: "Music",
    },
    {
      icon: <IoGameControllerOutline />,
      featureName: "Gamings",
    },
    {
      icon: <IoNewspaperOutline />,
      featureName: "News",
    },
    {
      icon: <GiJeweledChalice />,
      featureName: "Sports",
    },
  ];

  const bottomSideFeature = [
    {
      icon: <IoSettingsOutline />,
      featureName: "Settings",
    },
    {
      icon: <LiaFlagSolid />,
      featureName: "Report History",
    },
    {
      icon: <MdHelpOutline />,
      featureName: "Help",
    },
    {
      icon: <MdOutlineFeedback />,
      featureName: "Send feedback",
    },
  ];

  return (
    <>
      <aside>
        <div className={`asideBar  ${isOpen == true ? "toggleMenu" : ""}`}>
          <div className="topFeature">
            {topSideFeature.map((item, index) => (
              <div className="items" key={index}>
                <span className="featureIcon">{item.icon}</span>
                <span className="featureName">{item.featureName}</span>
              </div>
            ))}
          </div>
          <div className="hrLine"></div>
          <div className="youFeature">
            <div className="name">You </div>
            {you.map((item, index) => (
              <div className="items" key={index}>
                <span className="featureIcon">{item.icon}</span>
                <span className="featureName">{item.featureName}</span>
              </div>
            ))}
          </div>
          <div className="hrLine"></div>
          <div className="exploreFeature">
            <div className="name">Explore</div>
            {explore.map((item, index) => (
              <div className="items" key={index}>
                <span className="featureIcon">{item.icon}</span>
                <span className="featureName">{item.featureName}</span>
              </div>
            ))}
          </div>
          <div className="hrLine"></div>
          <div className="bottomFeature">
            {bottomSideFeature.map((item, index) => (
              <div className="items" key={index}>
                <span className="featureIcon">{item.icon}</span>
                <span className="featureName">{item.featureName}</span>
              </div>
            ))}
          </div>
          <div className="hrLine"></div>
          <span className="author">Clone by | Ahmad</span>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
