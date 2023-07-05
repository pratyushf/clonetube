import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VID_API } from "../constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VID_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className=" flex flex-wrap justify-center">
      {videos.map((videos) => (
        <Link key={videos.id} to={"/watch?v=" + videos.id}>
          <VideoCard key={videos.id} info={videos} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
