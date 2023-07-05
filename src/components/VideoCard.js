import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return <div>No video information available.</div>;
  }

  const { snippet = {}, statistics = {} } = info;
  const { channelTitle, title, thumbnails = {} } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;


  return (
    <div className=" m-4 border w-96 rounded-lg p-2 shadow-lg cursor-pointer flex flex-col justify-around">
      {thumbnails.medium && (
        <img src={thumbnails.medium.url} className=" w-96 p-1" alt="" />
      )}
      <div>
        <h3 className=" font-semibold text-start">{title}</h3>
      </div>
      <div>{channelTitle}</div>
      <div className="  text-gray-600 flex justify-between">
        <div className="">{viewCount} views</div>
        <div className="">{snippet.publishedAt.slice(0, 10)}</div>
      </div>
    </div>
  );
};

export default VideoCard;

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//Higher-order Functions

// export const AdVideoCard = (VideoCard) =>{
//   return(
//     <div className="p-1 m-1 border border-red-500">
//       <VideoCard/>
//     </div>
//   );
// };
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
