import React, { useEffect, useState } from "react";
import ham from "../img/ham.png";
import logo from "../img/logo.png";
import search from "../img/search.png";
import user from "../img/user.png";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../constants";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestion, setShowSuggestions] = useState(false);

  console.log(searchQuery);

  // Debouncing IMP ###############################################

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSug();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // EVERY TIME COMPONENT UNMOUNTS RETURN IS CALLED
  }, [searchQuery]);

  const getSearchSug = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 grid grid-flow-col p-4 shadow-lg bg-white z-10">
      <div className="flex col-span-1">
        <img
          src={ham}
          alt="ham"
          className="h-8 mx-2 cursor-pointer"
          onClick={() => {
            toggleMenuHandler();
          }}
        />
        <img src={logo} alt="logo" className="h-8 cursor-pointer" />
      </div>
      <div className="col-span-11 px-10 justify-center">
        <div className="flex">
          <input
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setShowSuggestions(false);
            }}
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          />
          <button className="w-12 border border-gray-400 p-2 rounded-r-full bg-gray-200">
            <img src={search} alt="search-icon" className="h-6 w-6" />
          </button>
        </div>
        {showsuggestion && (
          <div className="fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="flex px-3 py-2 shadow-sm hover:bg-gray-100"
                >
                  <img className="h-3 w-3 justify-center" src={search} alt="" />
                  <p> {s}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2 w-fit p-1 flex justify-center border rounded-full border-blue-700 cursor-pointer">
        <p className="text-blue-700 m-1 font-semibold">Sign In</p>
        <img src={user} alt="user" className="h-8" />
      </div>
    </nav>
  );
};

export default Head;
