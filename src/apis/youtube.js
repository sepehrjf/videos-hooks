import axios from "axios";

const KEY = "AIzaSyAWx3rI4FOSiM6cwuipjnVcDDAZEbzdA-w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
