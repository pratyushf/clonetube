import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // if (!isMenuOpen) return null;

  return (!isMenuOpen) ? null : (
    <div className=" p-5 shadow-lg w-48">
      <ul className=" border p-2">
        <Link><li className=" cursor-pointer font-bold p-1 underline">Home</li></Link>
        <li className=" cursor-pointer font-bold p-1 underline">Shorts</li>
        <li className=" cursor-pointer font-bold p-1 underline">
          Subscriptions
        </li>
      </ul>
      <ul className=" border p-2">
        <li className=" cursor-pointer font-semibold">Explore</li>
        <li className=" cursor-pointer m-2 font-serif">Trending</li>
        <li className=" cursor-pointer m-2 font-serif">Shopping</li>
        <li className=" cursor-pointer m-2 font-serif">Music</li>
        <li className=" cursor-pointer m-2 font-serif">Live</li>
        <li className=" cursor-pointer m-2 font-serif">News</li>
        <li className=" cursor-pointer m-2 font-serif">Sports</li>
        <li className=" cursor-pointer m-2 font-serif">Gaming</li>
        <li className=" cursor-pointer m-2 font-serif">Movies</li>
      </ul>
      <ul className=" border p-2">
        <li className=" cursor-pointer font-bold p-1 underline">Settings</li>
        <li className=" cursor-pointer font-bold p-1 underline">
          Report History
        </li>
        <li className=" cursor-pointer font-bold p-1 underline">Help</li>
      </ul>
    </div>
  );
};

export default Sidebar;
