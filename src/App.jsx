import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchApiData } from "./utils/api";
import Header from "./components/home/header/Header";
import HomePage from "./pages/homePage/HomePage";
import Details from "./pages/details/Details";
import Search from "./pages/search/Search";
import axios from "axios";

function App() {
  // const [query, setQuery] = useState("Trending");
  // const [searchResult, setSearchResult] = useState(false);
  // const fetchingDataFromAPI = () => {
  //   fetchApiData(`search/?q=${query}`).then((res) => {
  //     console.log(res.contents);
  //     setSearchResult(res.contents);
  //   });
  // };
  // useEffect(() => {
  //   fetchingDataFromAPI();
  // }, [searchResult]);

  const fetchAllVideos = async () => {
    // const api = "AIzaSyDUFUib9tStRYPbuGObSxMJZ8x73vgy0DE";
    try {
      let data = await fetchApiData().then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }
  };

  // const fetchAllVideos = async () => {
  //   const api = "AIzaSyDUFUib9tStRYPbuGObSxMJZ8x73vgy0DE";
  //   try {
  //     const responce = await axios.get(
  //       `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${api}`
  //     );
  //     console.log(responce.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  useEffect(() => {
    fetchAllVideos();
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
