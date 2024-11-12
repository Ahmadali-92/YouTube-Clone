import axios from "axios";

const baseURL = "https://www.googleapis.com/youtube/v3";
const API_KEY = import.meta.env.VITE_APP_YOUTUBE_RAPIDAPI_KEY;

export const fetchApiData = async () => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`
  );
  return data;
};
