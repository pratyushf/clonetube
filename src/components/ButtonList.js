import React, { useState } from "react";
import Button from "./Button";

const buttonFilter = [
  "All",
  "Trailers",
  "New",
  "Tamil Cinema",
  "Comedy",
  "Action",
  "Drama",
  "Romance",
  "Thriller",
  "Sci-Fi",
  "Animation",
  "Documentary",
  "Horror",
  "Fantasy",
  "Family",
  "Adventure",
  "Mystery",
  "Music",
  "Sports",
  "Biography",
  "Western",
  "History",
  "Crime",
  "Musical",
  "Superhero",
  "War",
  "Suspense",
  "Reality TV",
  "Talk Shows",
  "Cooking Shows",
];

const ButtonList = () => {
  const [showMore, setShowMore] = useState(false);

  // Number of buttons to show initially
  const initialButtonsCount = 14;

  // Calculate the total buttons to render based on showMore state
  const totalButtonsCount = showMore
    ? buttonFilter.length
    : initialButtonsCount;

  // Slice the buttonFilter array based on the totalButtonsCount
  const buttonsToRender = buttonFilter.slice(0, totalButtonsCount);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <div className="flex p-2 flex-wrap h-fit border">
      {buttonsToRender.map((filters) => (
        <Button key={filters} filters={filters} />
      ))}
      {!showMore && buttonFilter.length > initialButtonsCount && (
        <button className="show-more-button" onClick={handleShowMore}>
          Show More
        </button>
      )}
      {showMore && (
        <button className="show-more-button" onClick={handleShowLess}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default ButtonList;
