import React, { useState } from "react";
import "./Header.css";
import logoimage from "../../../assets/Youtube-Logo-PNG.png";
import { GoSearch } from "react-icons/go";
import { RiLiveLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import SideBar from "../../sideBar/SideBar";
import { useDispatch } from "react-redux";
import { toggleMenuBar } from "../../../slice/toggleSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [hideAll, setHideAll] = useState(false);
  const handleMenuBTN = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
    dispatch(toggleMenuBar(isOpen));
  };

  const handleSearch = () => {
    console.log("clicked search");
    console.log(setShowSearchInput(!showSearchInput));
    console.log("clicked search 3");
  };

  return (
    <>
      <header>
        <div className="header ">
          {/* remove */}
          {/* <div className="logoImage remove"> */}
          <div className="logoImage ">
            <div className="menuIcon" onClick={handleMenuBTN}>
              <SlMenu />
            </div>
            <img src={logoimage} alt="" />
          </div>
          {/* mobileView */}
          {/* <div className="searchBar mobileView "> */}
          <div className="searchBar ">
            <input
              className="mobileInput remove"
              // className="mobileInput remove"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
            <button className="mobileButton">
              <GoSearch onClick={handleSearch} />
            </button>
          </div>
          {/* remove */}
          {/* <div className="activity remove"> */}
          <div className="activity ">
            <ul>
              <li>
                <RiLiveLine style={{ marginLeft: "22px" }} />
              </li>
              <li>
                <FaRegBell />
              </li>
              <li>
                <CgProfile />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
