import React from "react";
import "./Video.css";
import videoImg from "../../assets/videoImage.jpg";

const Video = ({ data }) => {
  return (
    <>
      <div className="videoSection">
        <div className="videoImage">
          <img src={data?.snippet?.thumbnails?.high?.url} alt="" />
          {/* <span className="videoTime">1:20:26</span> */}
        </div>
        <div className="videoContent">
          <div className="videoprofile">
            <img src={videoImg} alt="" />
          </div>
          <div className="videoDetails">
            <h1 className="videoHeading">
              {data?.snippet?.title.length > 10
                ? `${data?.snippet?.title}.cancat(0, 10)+"...`
                : ""}
            </h1>
            <p className="videoPara">{data?.snippet?.channelTitle}</p>
            <div className="videoOption">
              <span>895K views</span>
              <span> . 2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
