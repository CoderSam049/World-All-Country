import React, { useState } from "react";

export default function CountryFilter({ setQuery }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  function handleHover() {
    setIsDropDownOpen(true);
  }
  function handleMouseLeave() {
    setIsDropDownOpen(false);
  }
  function handleClick() {
    setIsDropDownOpen(!isDropDownOpen); // Toggle on click/touch for mobile
  }

  return (
    <div className="newfilterbox">
      <div className="filterbox">
        <p>
          Filter by region &nbsp;&nbsp;{" "}
          <i
            onMouseEnter={handleHover}  // For desktop hover
            onClick={handleClick}       // For mobile click
            className="fa-solid fa-angle-down arrow"
          ></i>
        </p>
      </div>

      <div
        onMouseLeave={handleMouseLeave}  // For desktop hover out
        onClick={(e) => {
          setQuery(e.target.id.toLowerCase());  // Set the query based on region
        }}
        className={`filterbox filterboxlist ${
          isDropDownOpen ? "openarrow" : ""
        }`}
      >
        <p className="region" id="africa">Africa</p>
        <p className="region" id="america">America</p>
        <p className="region" id="europe">Europe</p>
        <p className="region" id="asia">Asia</p>
        <p className="region" id="oceania">Oceania</p>
      </div>
    </div>
  );
}
