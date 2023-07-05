import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const vidId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <div className="ml-3 p-6">
        <div
          style={{
            width: "60vw", // 3/4 of screen width
            height: "70vh", // 4/5 of screen height
            margin: "0 auto", // center align horizontally
          }}
        >
          <iframe
            width="100%"
            height="100%"
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${vidId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div></div>
      </div>
      <div><CommentsContainer/></div>
    </div>
  );
}
