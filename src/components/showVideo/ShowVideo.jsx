import React, { useEffect, useState } from "react";
import "./ShowVideo.css";
import Video from "../video/Video";
import axios from "axios";

const ShowVideo = () => {
  const [videoItems, setVideoItems] = useState([]);
  const optionsName = [
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
    "All",
    "javascript",
    "java",
    "python",
  ];

  const fetchAllVideos = async () => {
    const api = import.meta.env.VITE_APP_YOUTUBE_RAPIDAPI_KEY;
    try {
      const responce = await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${api}`
        )
        .then((res) => {
          setVideoItems(res?.data?.items);
          console.log(res?.data?.items);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchAllVideos();
  }, []);

  return (
    <>
      <div className="allVideosShow">
        <div className="options">
          {optionsName.map((option, index) => (
            <div className="showOption" key={index}>
              <span className="category">{option}</span>
            </div>
          ))}
        </div>
        <div className="videos">
          {videoItems.map((data, index) => (
            // <div className="video" key={index}>
            <Video data={data} key={index} />
            // {/* </div> */}
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowVideo;
